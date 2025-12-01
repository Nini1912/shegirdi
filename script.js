/* script.js - Handles Global Login State */

document.addEventListener("DOMContentLoaded", function () {
  checkLoginState();
});

function checkLoginState() {
  const isLoggedIn = localStorage.getItem("shegirdi_user_logged_in");
  const navButtons = document.querySelector(".nav-buttons");

  // If user is logged in, replace the "Sign In" buttons with "Profile"
  if (isLoggedIn === "true" && navButtons) {
    navButtons.innerHTML = `
            <a href="profile.html" style="text-decoration:none; display:flex; align-items:center; gap:10px; margin-right:10px;">
                <span style="background:#fffbeb; padding:6px 12px; border-radius:20px; border:1px solid #fcd34d; font-weight:700; color:#b45309; font-size:14px;">
                    💰 450
                </span>
            </a>
            <a href="profile.html" class="btn btn-outline" style="border:none; padding:8px 12px;">👤 პროფილი</a>
        `;
  }
}

// Function to Log In (Called from auth.html)
function loginUser() {
  localStorage.setItem("shegirdi_user_logged_in", "true");
  // Simulate loading
  setTimeout(() => {
    window.location.href = "profile.html";
  }, 1000);
}

// Function to Log Out (Called from profile.html or header)
function logout() {
  localStorage.removeItem("shegirdi_user_logged_in");
  window.location.href = "index.html";
}
