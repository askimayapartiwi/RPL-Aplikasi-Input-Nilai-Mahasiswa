import { simpanData, loadData } from "./dataService.js";
import { validasiInput } from "./validation.js";
import { tampilkanAlert, tampilkanTabel } from "./uiHandler.js";

document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("nilaiForm");
  const tabelBody = document.getElementById("tabelNilai");

  // ==========================
  // Halaman Input Nilai
  // ==========================
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Ambil data dari form
      const data = {
        nama: document.getElementById("nama").value.trim(),
        nim: document.getElementById("nim").value.trim(),
        mataKuliah: document.getElementById("mataKuliah").value, // dari <select>
        nilai: parseFloat(document.getElementById("nilai").value.trim()),
      };

      // Validasi input
      if (!validasiInput(data)) return;

      // Simpan ke Firestore
      const hasil = await simpanData(data);

      // Tampilkan notifikasi
      if (hasil) {
        tampilkanAlert(" Data berhasil disimpan!", "success");
        form.reset();
      } else {
        tampilkanAlert(" Gagal menyimpan data!", "danger");
      }
    });
  }

  // ==========================
  // Halaman Lihat Data
  // ==========================
  if (tabelBody) {
    const data = await loadData();
    tampilkanTabel(data);
  }
});
