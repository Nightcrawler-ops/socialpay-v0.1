 // Simple tab switcher
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(this.dataset.tab).classList.add('active');
      });
    });
//
// JavaScript for profile menu dropdown
document.querySelector('.profile-menu .avatar').addEventListener('click', function() {
  document.querySelector('.profile-menu').classList.toggle('active');
});