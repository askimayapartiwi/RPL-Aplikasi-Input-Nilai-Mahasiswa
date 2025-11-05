// Modul Konfigurasi Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Konfigurasi Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyBCs_6xEttPrI-ZAIIF97w9oWFhr30ivKk",
  authDomain: "input-nilai-mahasiswa-62410.firebaseapp.com",
  projectId: "input-nilai-mahasiswa-62410",
  storageBucket: "input-nilai-mahasiswa-62410.firebasestorage.app",
  messagingSenderId: "605518243025",
  appId: "1:605518243025:web:7e3536a621b402fd2891f0",
  measurementId: "G-2WF48CP42G"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore 
export const db = getFirestore(app);
