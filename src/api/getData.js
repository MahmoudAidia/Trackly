import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export async function getData(collectionName, userId) {
  const expenseRef = collection(db, collectionName);
  const q = query(expenseRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  // const querySnapshot = await getDocs(collection(db, collectionName));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}
