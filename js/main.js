console.log("SIRANA KEMBANG ready");

/// Login dummy
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "dashboard.html";
  });
}


// Register dummy
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Pendaftaran berhasil (dummy)");
    window.location.href = "login.html";
  });
}
