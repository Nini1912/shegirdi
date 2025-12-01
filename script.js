/* script.js - Handles Global Login State */

document.addEventListener("DOMContentLoaded", function () {
  checkLoginState();
});

/* script.js */

function checkLoginState() {
  const isLoggedIn = localStorage.getItem("shegirdi_user_logged_in");
  const navButtons = document.querySelector(".nav-buttons");

  if (isLoggedIn === "true" && navButtons) {
    // I added the 3rd button (Logout) here 👇
    navButtons.innerHTML = `
            <a href="profile.html" style="text-decoration:none; display:flex; align-items:center; gap:10px; margin-right:10px;">
                <span style="background:#fffbeb; padding:6px 12px; border-radius:20px; border:1px solid #fcd34d; font-weight:700; color:#b45309; font-size:14px;">
                    💰 450
                </span>
            </a>
            <a href="profile.html" class="btn btn-outline" style="border:none; padding:8px 12px; margin-right: 5px;">👤 პროფილი</a>
            <a href="#" onclick="logout()" class="btn btn-outline" style="padding:8px 12px; border-color: #ef4444; color: #ef4444;">🚪</a>
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
