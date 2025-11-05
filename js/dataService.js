import { db } from "./firebaseConfig.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const COLLECTION_NAME = "nilai_mahasiswa";

export async function simpanData(data) {
  try {
    await addDoc(collection(db, COLLECTION_NAME), data);
    return true;
  } catch (error) {
    console.error("Gagal menyimpan data:", error);
    return false;
  }
}

export async function loadData() {
  try {
    const snapshot = await getDocs(collection(db, COLLECTION_NAME));
    const hasil = [];
    snapshot.forEach((doc) => hasil.push(doc.data()));
    return hasil;
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return [];
  }
}
