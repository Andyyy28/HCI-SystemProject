const togglePassword = document.querySelector(".toggle-password");
const passwordField = document.querySelector(".password-field input");
const toggleIcon = togglePassword.querySelector("img");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordField.getAttribute("type") === "password";

  // Toggle password visibility
  passwordField.setAttribute("type", isPassword ? "text" : "password");

  // Change the icon based on visibility
  toggleIcon.src = isPassword
    ? "eye-svgrepo-com.svg"  // Open eye (password visible)
    : "eye-closed-svgrepo-com.svg";  // Closed eye (password hidden)
}); 
  document.getElementById("login-btn").addEventListener("click", () => {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html"; // or your homepage
  });
  
