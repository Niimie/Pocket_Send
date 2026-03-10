const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {

const type = passwordInput.type === "password" ? "text" : "password";
passwordInput.type = type;

togglePassword.classList.toggle("ph-eye");
togglePassword.classList.toggle("ph-eye-slash");

});