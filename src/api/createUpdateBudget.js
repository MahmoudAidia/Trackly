import {
  collection,
  query,
  where,
  getDocs,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Firebase/firebase";

export async function createUpdateBudget({ userId, category, limit }) {
  const collectionName = "budget";
  const numericValue = Number(limit) || 0;
  try {
    const q = query(
      collection(db, collectionName),
      where("userId", "==", userId),
      where("category", "==", category),
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      for (const docSnap of querySnapshot.docs) {
        const docRef = doc(db, collectionName, docSnap.id);
        const oldValue = Number(docSnap.data().limit) || 0;
        await updateDoc(docRef, {
          limit: oldValue + numericValue,
        });
      }

      return {
        created: false,
        updated: true,
        count: querySnapshot.docs.length,
      };
    } else {
      const docRef = await addDoc(collection(db, collectionName), {
        userId,
        category,
        limit: numericValue,
      });

      return { updated: false, created: true, id: docRef.id };
    }
  } catch (err) {
    console.error("Error in createUpdateBudget:", err);
    throw err;
  }
}
