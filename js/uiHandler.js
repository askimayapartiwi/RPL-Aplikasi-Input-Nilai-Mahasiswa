/**
 * Modul manipulasi tampilan (alert, tabel, dll)
 */

export function tampilkanAlert(pesan, tipe = "success") {
  const container = document.getElementById("alertContainer");
  if (!container) return;

  container.innerHTML = `
    <div class="alert alert-${tipe} text-center mt-3 animate__animated animate__fadeIn" role="alert">
      ${pesan}
    </div>
  `;

  // Hapus alert otomatis setelah 3 detik
  setTimeout(() => {
    container.innerHTML = "";
  }, 3000);
}

/**
 * Menampilkan tabel data mahasiswa (untuk lihatData.html)
 */
export function tampilkanTabel(data) {
  const tabelBody = document.getElementById("tabelNilai");
  if (!tabelBody) return;
  tabelBody.innerHTML = "";

  data.forEach((item, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${item.nama}</td>
        <td>${item.nim}</td>
        <td>${item.mataKuliah}</td>
        <td>${item.nilai}</td>
      </tr>
    `;
    tabelBody.insertAdjacentHTML("beforeend", row);
  });
}
