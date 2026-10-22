
const form = document.getElementById("loginForm");
const pesan = document.getElementById("pesan");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document
    .getElementById("username")
    .value.trim();

  const password = document
    .getElementById("password")
    .value;

  if (username === "admin" && password === "aren123") {
    pesan.textContent = "Login berhasil! Mengalihkan...";
    pesan.className = "pesan-sukses";

    window.location.href = "produk.html";
  } else {
    pesan.textContent =
      "Username atau password salah. Silakan coba lagi.";
    pesan.className = "pesan-error";
  }
});
