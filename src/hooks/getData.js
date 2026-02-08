import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export async function getData(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}
