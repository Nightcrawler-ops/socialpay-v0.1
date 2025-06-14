window.onload = function() {
  const username = localStorage.getItem('username') || localStorage.getItem('email');

  if (!username) {
      window.location.href = '/pages/login.html';
      return;
  }

  document.getElementById('usernameDisplay').textContent = `Welcome, ${username}!`;

  document.getElementById('logoutBtn').onclick = function() {
      localStorage.clear();
      window.location.href = "../pages/login.html";
  };

  document.getElementById('homeBtn').onclick = function() {
      window.location.href = "../index.html";
  };
};
