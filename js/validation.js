/**
 * Modul validasi input form
 */
export function validasiInput(data) {
  const { nama, nim, mataKuliah, nilai } = data;

  if (!nama || !nim || !mataKuliah || !nilai) {
    alert("Semua field harus diisi!");
    return false;
  }

  if (isNaN(nilai) || nilai < 0 || nilai > 100) {
    alert("Nilai harus berupa angka antara 0-100!");
    return false;
  }

  return true;
}
