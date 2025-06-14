document.getElementById("closeBtn").addEventListener("click", function () {
  alert("Close button clicked - You can wire this to hide the modal");
});
const mediaBtn = document.getElementById('mediaBtn');
const mediaInput = document.getElementById('mediaInput');
let mediaData = null;
let mediaType = null;

mediaBtn.addEventListener('click', () => mediaInput.click());

mediaInput.addEventListener('change', function() {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    mediaData = e.target.result;
    mediaType = file.type.startsWith('video') ? 'video' : 'image';
    mediaBtn.textContent = file.name;
  };
  reader.readAsDataURL(file);
});

document.getElementById('postBtn').addEventListener('click', function () {
  const textarea = document.querySelector('textarea');
  const text = textarea.value.trim();
  if (!text && !mediaData) {
    alert("Please enter some text or attach media.");
    return;
  }
  // Simulate user info
  const user = {
    name: "Ayotech👨‍💻",
    avatar: "../assets/images/profile/yello.jpeg"
  };
  const post = {
    id: Date.now(),
    user,
    text,
    media: mediaData,
    mediaType,
    timestamp: new Date().toISOString()
  };
  // Save to localStorage
  const posts = JSON.parse(localStorage.getItem('socialpay_posts') || '[]');
  posts.unshift(post);
  localStorage.setItem('socialpay_posts', JSON.stringify(posts));
  // Reset form
  textarea.value = '';
  mediaData = null;
  mediaType = null;
  mediaBtn.textContent = "📷 Media";
  alert("Post created! Go to Home Feed to see it.");
  // Optionally redirect to home
  window.location.href = "../index.html";
});
