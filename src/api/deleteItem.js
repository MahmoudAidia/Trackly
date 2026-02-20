import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export async function deleteItem({ collectionName, userId, dataId }) {
  try {
    const docRef = doc(db, collectionName, dataId);
    const docSnap = await getDoc(docRef);

    if (!docSnap?.exists()) {
      return { deleted: false };
    }
    if (docSnap?.data()?.userId !== userId) {
      return { deleted: false };
    }
    await deleteDoc(docRef);
    return { deleted: true, id: dataId };
  } catch (err) {
    console.error("Error deleting document:", err);
    throw err;
  }
}
