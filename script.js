/* script.js - Handles Global Login, Auth Guard, and Real Coins */

document.addEventListener("DOMContentLoaded", function () {
  checkLoginState();
  updateProfileCoins(); // If we are on the profile page
});

// 1. Check if user is logged in and render the Header
function checkLoginState() {
  const isLoggedIn = localStorage.getItem("shegirdi_user_logged_in");
  const navButtons = document.querySelector(".nav-buttons");

  // Get current coins (default to 0 if new user)
  let currentCoins = localStorage.getItem("shegirdi_coins");
  if (!currentCoins) {
    currentCoins = 0;
    localStorage.setItem("shegirdi_coins", "0");
  }

  if (isLoggedIn === "true" && navButtons) {
    navButtons.innerHTML = `
            <a href="profile.html" style="text-decoration:none; display:flex; align-items:center; gap:10px; margin-right:10px;">
                <span style="background:#fffbeb; padding:6px 12px; border-radius:20px; border:1px solid #fcd34d; font-weight:700; color:#b45309; font-size:14px;">
                    💰 ${currentCoins}
                </span>
            </a>
            <a href="profile.html" class="btn btn-outline" style="border:none; padding:8px 12px; margin-right: 5px;">👤 პროფილი</a>
            <a href="#" onclick="logout()" class="btn btn-outline" style="padding:8px 12px; border-color: #ef4444; color: #ef4444;">🚪</a>
        `;
  }
}

// 2. Auth Guard: Checks login before going to a URL
function requireAuth(url) {
  const isLoggedIn = localStorage.getItem("shegirdi_user_logged_in");
  if (isLoggedIn === "true") {
    window.location.href = url;
  } else {
    // Save where they wanted to go, so maybe you can redirect back later (optional)
    alert("ტესტის გასავლელად საჭიროა ავტორიზაცია!");
    window.location.href = "auth.html";
  }
}

// 3. Login User
function loginUser() {
  localStorage.setItem("shegirdi_user_logged_in", "true");
  
  // Give new users 0 coins if they don't have any
  if (!localStorage.getItem("shegirdi_coins")) {
    localStorage.setItem("shegirdi_coins", "0");
  }

  setTimeout(() => {
    window.location.href = "profile.html";
  }, 1000);
}

// 4. Logout
function logout() {
  localStorage.removeItem("shegirdi_user_logged_in");
  window.location.href = "index.html";
}

// 5. Update Coins on Profile Page
function updateProfileCoins() {
  const coinDisplay = document.getElementById("profile-coin-display");
  if (coinDisplay) {
    const coins = localStorage.getItem("shegirdi_coins") || 0;
    coinDisplay.innerText = coins;
  }
}

// 6. Function to Add Coins (Used in Tests)
function addCoins(amount) {
  let current = parseInt(localStorage.getItem("shegirdi_coins")) || 0;
  let newAmount = current + amount;
  localStorage.setItem("shegirdi_coins", newAmount);
}
