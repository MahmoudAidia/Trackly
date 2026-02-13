import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export async function postData({ collectionName, data }) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return {
      id: docRef.id,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}
