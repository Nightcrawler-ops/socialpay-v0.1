document.getElementById("closeBtn").addEventListener("click", function () {
  alert("Close button clicked - You can wire this to hide the modal");
});
const mediaBtn = document.getElementById('mediaBtn');
const mediaInput = document.getElementById('mediaInput');
let mediaData = null;
let mediaType = null;
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
let mediaFiles = []; // Array of {data, type, name}

mediaBtn.addEventListener('click', () => mediaInput.click());

mediaInput.addEventListener('change', function() {
  mediaFiles = [];
  const files = Array.from(this.files);
  let error = false;
  let loaded = 0;
  files.forEach(file => {
    if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
      alert('Only photos and videos are allowed.');
      error = true;
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      alert(`File "${file.name}" is too large. Please select files under 50MB.`);
      error = true;
      return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
      mediaFiles.push({
        data: e.target.result,
        type: file.type.startsWith('video') ? 'video' : 'image',
        name: file.name
      });
      loaded++;
      if (loaded === files.length && !error) {
        mediaBtn.textContent = `${mediaFiles.length} file(s) selected`;
      }
    };
    reader.readAsDataURL(file);
  });
});

document.getElementById('postBtn').addEventListener('click', function () {
  const textarea = document.querySelector('textarea');
  const text = textarea.value.trim();
  if (!text && mediaFiles.length === 0) {
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
    media: mediaFiles,
    timestamp: new Date().toISOString()
  };
  const posts = JSON.parse(localStorage.getItem('socialpay_posts') || '[]');
  posts.unshift(post);
  localStorage.setItem('socialpay_posts', JSON.stringify(posts));
  textarea.value = '';
  mediaFiles = [];
  mediaBtn.textContent = "📷 Media";
  alert("Post created! Go to Home Feed to see it.");
  window.location.href = "../index.html";
});
