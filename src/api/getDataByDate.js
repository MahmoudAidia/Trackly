import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { format } from "date-fns";

export async function getDataByDate(collectionName, userId) {
  const expensesRef = collection(db, collectionName);
  const q = query(expensesRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  const expenses = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      id: doc.id,
      date: data.date?.toDate ? data.date.toDate() : new Date(data.date),
    };
  });

  const groupedMap = expenses.reduce((acc, expense) => {
    const dateKey = format(expense.date, "yyyy-MM-dd");
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(expense);
    return acc;
  }, {});

  const groupedArray = Object.keys(groupedMap).map((date) => ({
    date,
    expenses: groupedMap[date],
  }));

  return groupedArray;
}
