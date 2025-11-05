import { simpanData, loadData } from "./dataService.js";
import { validasiInput } from "./validation.js";
import { tampilkanAlert, tampilkanTabel } from "./uiHandler.js";

document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("nilaiForm");
  const tabelBody = document.getElementById("tabelNilai");

  // Halaman input nilai
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = {
        nama: document.getElementById("nama").value.trim(),
        nim: document.getElementById("nim").value.trim(),
        mataKuliah: document.getElementById("mataKuliah").value.trim(),
        nilai: parseFloat(document.getElementById("nilai").value.trim())
      };

      if (!validasiInput(data)) return;

      const hasil = await simpanData(data);

      if (hasil) {
        tampilkanAlert(" Data berhasil disimpan!", "success");
        form.reset();
      } else {
        tampilkanAlert(" Gagal menyimpan data!", "danger");
      }
    });
  }

  // Halaman lihat data
  if (tabelBody) {
    const data = await loadData();
    tampilkanTabel(data);
  }
});
