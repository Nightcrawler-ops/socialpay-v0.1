document.getElementById("closeBtn").addEventListener("click", function () {
  alert("Close button clicked - You can wire this to hide the modal");
});
const mediaBtn = document.getElementById('mediaBtn');
const mediaInput = document.getElementById('mediaInput');
let mediaData = null;
let mediaType = null;
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
let mediaFiles = [];
let filesLoading = 0;

const postBtn = document.getElementById('postBtn');
postBtn.disabled = false; // Make sure it's enabled by default

// Add a loading indicator element if not present
let loadingIndicator = document.getElementById('mediaLoading');
if (!loadingIndicator) {
  loadingIndicator = document.createElement('div');
  loadingIndicator.id = 'mediaLoading';
  loadingIndicator.style.display = 'none';
  loadingIndicator.style.margin = '0.5rem 0';
  loadingIndicator.style.color = '#0066ff';
  loadingIndicator.style.fontWeight = 'bold';
  mediaBtn.parentNode.insertBefore(loadingIndicator, mediaBtn.nextSibling);
}

mediaBtn.addEventListener('click', () => mediaInput.click());

mediaInput.addEventListener('change', function() {
  mediaFiles = [];
  const files = Array.from(this.files);
  let validFiles = [];

  files.forEach(file => {
    if (
      (file.type.startsWith('image/') || file.type.startsWith('video/')) &&
      file.size <= MAX_FILE_SIZE
    ) {
      validFiles.push(file);
    }
  });

  if (validFiles.length === 0) {
    alert('Please select at least one valid photo or video (max 50MB each).');
    this.value = '';
    mediaBtn.textContent = "📷 Media";
    filesLoading = 0;
    loadingIndicator.style.display = 'none';
    postBtn.disabled = false;
    return;
  }

  filesLoading = validFiles.length;
  mediaBtn.textContent = "Loading...";
  loadingIndicator.textContent = `Uploading ${filesLoading} file(s)... (Videos may take longer)`;
  loadingIndicator.style.display = 'block';
  postBtn.disabled = true;

  validFiles.forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      mediaFiles.push({
        data: e.target.result,
        type: file.type.startsWith('video') ? 'video' : 'image',
        name: file.name
      });
      filesLoading--;
      if (filesLoading === 0) {
        mediaBtn.textContent = `${mediaFiles.length} file(s) selected`;
        loadingIndicator.style.display = 'none';
        postBtn.disabled = false;
      } else {
        loadingIndicator.textContent = `Uploading ${filesLoading} file(s)... (Videos may take longer)`;
      }
    };
    reader.onerror = function() {
      alert(`Failed to load file: ${file.name}`);
      filesLoading--;
      if (filesLoading === 0) {
        mediaBtn.textContent = `${mediaFiles.length} file(s) selected`;
        loadingIndicator.style.display = 'none';
        postBtn.disabled = false;
      }
    };
    reader.readAsDataURL(file);
  });
});

postBtn.addEventListener('click', function () {
  const textarea = document.querySelector('textarea');
  const text = textarea ? textarea.value.trim() : "";

  if (filesLoading > 0) {
    alert("Please wait for all media files to finish loading.");
    return;
  }

  if (!text && mediaFiles.length === 0) {
    alert("Please enter some text or attach media.");
    return;
  }

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
  if (textarea) textarea.value = '';
  mediaFiles = [];
  mediaBtn.textContent = "📷 Media";
  loadingIndicator.style.display = 'none';
  postBtn.disabled = false;
  alert("Post created! Go to Home Feed to see it.");
  window.location.href = "../index.html";
});
