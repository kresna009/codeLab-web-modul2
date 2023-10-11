const calculationForm = document.getElementById("calculation-form");
const jumlahkanButton = document.getElementById("jumlah-button");
const registerForm = document.querySelector(".register-form");
const daftarButton = document.getElementById("register-button");

jumlahkanButton.addEventListener("click", function (event) {
  const bilanganPertama = parseFloat(
    document.getElementById("bilangan-pertama").value
  );
  const bilanganKedua = parseFloat(
    document.getElementById("bilangan-kedua").value
  );
  const hasil = bilanganPertama + bilanganKedua;

  alert("Hasil penjumlahan = " + hasil);
});

daftarButton.addEventListener("click", function (event) {
  const namaInput = document.getElementById("nama");
  const emailInput = document.getElementById("email");
  const alamatInput = document.getElementById("alamat");

  if (
    emailInput.value.trim() === "" &&
    namaInput.value.trim() === "" &&
    alamatInput.value.trim() === ""
  ) {
    event.preventDefault();
    alert("Anda harus mengisi data dengan lengkap !");
  }
});
