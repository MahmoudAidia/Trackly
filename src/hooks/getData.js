import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export async function getData(collectionName) {
  try {
    const collectionData = collection(db, collectionName);
    const dataSnapshot = await getDocs(collectionData);
    console.log(dataSnapshot);
    const data = dataSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error fetching expenses:", err);
    return [];
  }
}
