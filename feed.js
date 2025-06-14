// Dummy posts for initial load
const DUMMY_POSTS = [
  {
    id: 1001,
    user: { name: "Ayotech", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    text: "Welcome to SocialPay! 🚀 Try out all the features and let us know what you think.",
    media: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString()
  },
  {
    id: 1002,
    user: { name: "KallyFX", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
    text: "Just dropped a new video! 🎥🔥",
    media: [
      { data: "https://www.w3schools.com/html/mov_bbb.mp4", type: "video", name: "sample-video1.mp4" }
    ],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString()
  },
  {
    id: 1003,
    user: { name: "NathFavour", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
    text: "Feeling grateful today! 🙏💡",
    media: [
      { data: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", type: "image", name: "sample-image1.jpg" }
    ],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString()
  },
  {
    id: 1004,
    user: { name: "Ayotech", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    text: "Check out this cool sunset! 🌅",
    media: [
      { data: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", type: "image", name: "sample-image2.jpg" }
    ],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString()
  },
  {
    id: 1005,
    user: { name: "KallyFX", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
    text: "Who else is coding tonight? 💻🌙",
    media: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString()
  },
  {
    id: 1006,
    user: { name: "NathFavour", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
    text: "Throwback to last weekend! 😁",
    media: [
      { data: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", type: "image", name: "sample-image3.jpg" },
      { data: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5a?auto=format&fit=crop&w=400&q=80", type: "image", name: "sample-image4.jpg" }
    ],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString()
  },
  {
    id: 1007,
    user: { name: "RandomUser1", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
    text: "Just joined SocialPay! 👋",
    media: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString()
  },
  {
    id: 1008,
    user: { name: "RandomUser2", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
    text: "Loving the vibes here! 🎉",
    media: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString()
  },
  {
    id: 1009,
    user: { name: "RandomUser3", avatar: "https://randomuser.me/api/portraits/men/23.jpg" },
    text: "Check out my new shoes! 👟",
    media: [
      { data: "https://images.unsplash.com/photo-1517260911205-8c8e9b1b3aee?auto=format&fit=crop&w=400&q=80", type: "image", name: "sample-image5.jpg" }
    ],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString()
  },
  {
    id: 1010,
    user: { name: "RandomUser4", avatar: "https://randomuser.me/api/portraits/women/24.jpg" },
    text: "Anyone up for a challenge? 🏆",
    media: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString()
  },
  {
    id: 1011,
    user: { name: "RandomUser5", avatar: "https://randomuser.me/api/portraits/men/25.jpg" },
    text: "Nature walk today 🌳🌲",
    media: [
      { data: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", type: "image", name: "sample-image6.jpg" }
    ],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString()
  },
  {
    id: 1012,
    user: { name: "RandomUser6", avatar: "https://randomuser.me/api/portraits/women/26.jpg" },
    text: "Best coffee in town ☕️",
    media: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 14).toISOString()
  },
  {
    id: 1013,
    user: { name: "RandomUser7", avatar: "https://randomuser.me/api/portraits/men/27.jpg" },
    text: "Movie night! 🍿",
    media: [
      { data: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", type: "image", name: "sample-image7.jpg" }
    ],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 16).toISOString()
  },
  {
    id: 1014,
    user: { name: "RandomUser8", avatar: "https://randomuser.me/api/portraits/women/28.jpg" },
    text: "Learning new things every day! 📚",
    media: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString()
  },
  {
    id: 1015,
    user: { name: "RandomUser9", avatar: "https://randomuser.me/api/portraits/men/29.jpg" },
    text: "Look at this cute puppy! 🐶",
    media: [
      { data: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80", type: "image", name: "sample-image8.jpg" }
    ],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString()
  },
  {
    id: 1016,
    user: { name: "RandomUser10", avatar: "https://randomuser.me/api/portraits/women/30.jpg" },
    text: "Workout done for today! 💪",
    media: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString()
  },
  {
    id: 1017,
    user: { name: "RandomUser11", avatar: "https://randomuser.me/api/portraits/men/31.jpg" },
    text: "Travel goals! ✈️🌍",
    media: [
      { data: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5a?auto=format&fit=crop&w=400&q=80", type: "image", name: "sample-image9.jpg" }
    ],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString()
  },
  {
    id: 1018,
    user: { name: "RandomUser12", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
    text: "Music is life 🎶",
    media: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 28).toISOString()
  },
  {
    id: 1019,
    user: { name: "RandomUser13", avatar: "https://randomuser.me/api/portraits/men/34.jpg" },
    text: "Just finished a great book! 📖",
    media: [],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 32).toISOString()
  },
  {
    id: 1020,
    user: { name: "RandomUser14", avatar: "https://randomuser.me/api/portraits/women/35.jpg" },
    text: "Sunshine and smiles today! 😁☀️",
    media: [
      { data: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", type: "image", name: "sample-image10.jpg" }
    ],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString()
  }
];

function ensureDummyPosts() {
  let posts = JSON.parse(localStorage.getItem('socialpay_posts') || '[]');
  if (!Array.isArray(posts) || posts.length === 0) {
    localStorage.setItem('socialpay_posts', JSON.stringify(DUMMY_POSTS));
  }
}
ensureDummyPosts();


function timeAgo(dateString) {
  const now = new Date();
  const posted = new Date(dateString);
  const diff = Math.floor((now - posted) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff/60)} min${Math.floor(diff/60) > 1 ? 's' : ''} ago`;
  if (diff < 86400) return `${Math.floor(diff/3600)} hr${Math.floor(diff/3600) > 1 ? 's' : ''} ago`;
  if (diff < 604800) return `${Math.floor(diff/86400)} day${Math.floor(diff/86400) > 1 ? 's' : ''} ago`;
  const options = { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
  return `posted on ${posted.toLocaleString('en-US', options)}`;
}

function getTotalComments(comments) {
  let total = 0;
  comments.forEach(c => {
    total += 1 + (c.replies ? c.replies.length : 0);
  });
  return total;
}

function renderFeed() {
  const feed = document.getElementById('feed');
  if (!feed) return;
  const posts = JSON.parse(localStorage.getItem('socialpay_posts') || '[]');
  feed.innerHTML = posts.map(post => {
    const comments = JSON.parse(localStorage.getItem(`comments_${post.id}`) || '[]');
    const totalComments = getTotalComments(comments);
    // Media grid
    let mediaGrid = '';
    if (Array.isArray(post.media) && post.media.length) {
      mediaGrid = `<div class="media-grid">` +
        post.media.map((m, idx) =>
          m.type === 'image'
            ? `<img src="${m.data}" class="media-thumb" data-idx="${idx}" alt="media">`
            : `<video src="${m.data}" class="media-thumb" data-idx="${idx}" controls muted></video>`
        ).join('') +
        `</div>`;
    }
    return `
      <div class="post" data-id="${post.id}">
        <div class="post-header">
          <img src="${post.user.avatar}" alt="${post.user.name}" class="avatar">
          <div class="user-info">
            <span class="username">${post.user.name}</span>
            <span class="timestamp">${timeAgo(post.timestamp)}</span>
          </div>
          <span class="post-options" style="margin-left:auto;cursor:pointer;position:relative;">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            <ul class="post-menu" style="display:none;position:absolute;right:0;top:24px;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,0.12);border-radius:8px;list-style:none;padding:0.5rem 0;z-index:10;">
              <li class="edit-post" style="padding:0.7rem 1.2rem;cursor:pointer;">Edit</li>
              <li class="delete-post" style="padding:0.7rem 1.2rem;cursor:pointer;color:#ff3d00;">Delete</li>
            </ul>
          </span>
        </div>
        <p class="post-text">${post.text}</p>
        ${mediaGrid}
        <div class="post-actions">
          <span class="comment"><i class="fa-regular fa-comment"></i><span class="comment-count">${totalComments}</span></span>
          <span class="like"><i class="fa-regular fa-heart"></i><span class="like-count">0</span></span>
          <span class="dollar"><i class="fa-regular fa-dollar-sign"></i></span>
          <span class="share"><i class="fa-regular fa-share-from-square"></i><span class="share-count">0</span></span>
        </div>
        <div class="donation-activity"></div>
        <div class="comments-section" style="display:none;">
          <div class="comments-list" style="max-height:200px;overflow-y:auto;">
            ${comments.map((c, idx) => `
              <div class="comment-item" data-cidx="${idx}">
                <span class="comment-user">${c.user}</span>
                <span class="comment-text">${c.text}</span>
                <span class="comment-actions">
                  <i class="fa-regular fa-heart comment-like ${c.liked ? 'fa-solid liked' : ''}"></i>
                  <span class="comment-like-count">${c.likes || 0}</span>
                  <span class="reply-btn">Reply</span>
                </span>
                <div class="replies">
                  ${(c.replies||[]).map((r, ridx) => `
                    <div class="reply-item" data-ridx="${ridx}">
                      <span class="reply-user">${r.user}</span>
                      <span class="reply-text">${r.text}</span>
                      <span class="reply-actions">
                        <i class="fa-regular fa-heart reply-like ${r.liked ? 'fa-solid liked' : ''}"></i>
                        <span class="reply-like-count">${r.likes || 0}</span>
                      </span>
                    </div>
                  `).join('')}
                </div>
                <div class="reply-box" style="display:none;">
                  <input type="text" class="reply-input" placeholder="Reply...">
                  <button class="reply-submit">Send</button>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="add-comment">
            <input type="text" class="comment-input" placeholder="Add a comment...">
            <button class="comment-submit">Post</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  attachPostReactions();
  attachInlineComments();
  attachMediaLightbox();
}

function attachPostReactions() {
  document.querySelectorAll('.post').forEach(post => {
    // Like
    const likeBtn = post.querySelector('.like');
    const likeCount = likeBtn.querySelector('.like-count');
    const heartIcon = likeBtn.querySelector('i');
    let liked = false;
    likeBtn.onclick = function() {
      liked = !liked;
      let count = parseInt(likeCount.textContent, 10);
      if (liked) {
        count += 1;
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
        heartIcon.style.color = 'red';
      } else {
        count = Math.max(0, count - 1);
        heartIcon.classList.remove('fa-solid');
        heartIcon.classList.add('fa-regular');
        heartIcon.style.color = '';
      }
      likeCount.textContent = count;
    };

    // Double-tap/double-click to like
    const postMedia = post.querySelector('.post-media img, .post-media video');
    if (postMedia) {
      let lastTap = 0;
      postMedia.addEventListener('touchend', function(e) {
        const now = new Date().getTime();
        if (now - lastTap < 300) {
          likeBtn.click();
          e.preventDefault();
        }
        lastTap = now;
      });
      postMedia.addEventListener('dblclick', function(e) {
        likeBtn.click();
        e.preventDefault();
      });
    }

    // Support (Donate)
    const dollarBtn = post.querySelector('.dollar');
    const dollarIcon = dollarBtn.querySelector('i');
    const donationActivity = post.querySelector('.donation-activity');
    dollarBtn.onclick = function() {
      const amount = prompt('Enter support amount (₦):', '15');
      if (!amount || isNaN(amount) || Number(amount) < 15) return;
      let isAnonymous = true;
      if (confirm('Do you want your support to be public? Click OK to show initials, Cancel to stay anonymous.')) {
        isAnonymous = false;
      }
      const userInitials = "A.Y.";
      let feedback = isAnonymous ? 'Anonymous just sent support' : `${userInitials} just sent support`;
      donationActivity.textContent = feedback;
      donationActivity.classList.add('active');
      setTimeout(() => {
        donationActivity.classList.remove('active');
      }, 3000);
      dollarIcon.classList.add('fa-solid');
      setTimeout(() => dollarIcon.classList.remove('fa-solid'), 500);
    };

    // Share
    const shareBtn = post.querySelector('.share');
    const shareCount = shareBtn.querySelector('.share-count');
    const shareIcon = shareBtn.querySelector('i');
    shareBtn.onclick = function() {
      if (navigator.share) {
        navigator.share({
          title: 'Check out this post on SocialPay!',
          text: post.querySelector('.post-text').textContent,
          url: window.location.href
        }).then(() => {
          let count = parseInt(shareCount.textContent, 10) || 0;
          count += 1;
          shareCount.textContent = count;
          shareIcon.classList.add('fa-solid');
          setTimeout(() => shareIcon.classList.remove('fa-solid'), 500);
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Post link copied to clipboard!');
        let count = parseInt(shareCount.textContent, 10) || 0;
        count += 1;
        shareCount.textContent = count;
        shareIcon.classList.add('fa-solid');
        setTimeout(() => shareIcon.classList.remove('fa-solid'), 500);
      }
    };

    // More/Options
    const optionsBtn = post.querySelector('.post-options');
    const menu = optionsBtn.querySelector('.post-menu');
    optionsBtn.onclick = function(e) {
      e.stopPropagation();
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      document.addEventListener('click', function handler(ev) {
        if (!menu.contains(ev.target)) {
          menu.style.display = 'none';
          document.removeEventListener('click', handler);
        }
      });
    };
    // Delete post
    menu.querySelector('.delete-post').onclick = function() {
      const postId = post.getAttribute('data-id');
      let posts = JSON.parse(localStorage.getItem('socialpay_posts') || '[]');
      posts = posts.filter(p => p.id != postId);
      localStorage.setItem('socialpay_posts', JSON.stringify(posts));
      renderFeed();
    };
    // Edit post
    menu.querySelector('.edit-post').onclick = function() {
      const postId = post.getAttribute('data-id');
      let posts = JSON.parse(localStorage.getItem('socialpay_posts') || '[]');
      const postObj = posts.find(p => p.id == postId);
      const newText = prompt("Edit your post:", postObj.text);
      if (newText !== null) {
        postObj.text = newText;
        localStorage.setItem('socialpay_posts', JSON.stringify(posts));
        renderFeed();
      }
    };
  });
}

function attachInlineComments() {
  document.querySelectorAll('.post').forEach(post => {
    const postId = post.getAttribute('data-id');
    const commentBtn = post.querySelector('.comment');
    const commentsSection = post.querySelector('.comments-section');
    // Toggle comments section
    commentBtn.onclick = function(e) {
      e.stopPropagation();
      const isOpen = commentsSection.style.display === 'block';
      // Close all others
      document.querySelectorAll('.comments-section').forEach(sec => sec.style.display = 'none');
      commentsSection.style.display = isOpen ? 'none' : 'block';
    };
    // Close comments when clicking outside
    document.addEventListener('click', function handler(ev) {
      if (!post.contains(ev.target)) {
        commentsSection.style.display = 'none';
      }
    });

    // Add comment
    const commentInput = commentsSection.querySelector('.add-comment .comment-input');
    const commentSubmit = commentsSection.querySelector('.add-comment .comment-submit');
    commentSubmit.onclick = function() {
      const text = commentInput.value.trim();
      if (!text) return;
      let comments = JSON.parse(localStorage.getItem(`comments_${postId}`) || '[]');
      comments.push({ user: "User", text, likes: 0, liked: false, replies: [] });
      localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));
      renderFeed();
      // Re-open the comments section after re-render
      setTimeout(() => {
        const thisPost = document.querySelector(`.post[data-id="${postId}"]`);
        if (thisPost) thisPost.querySelector('.comments-section').style.display = 'block';
      }, 0);
    };

    // Like comment
    commentsSection.querySelectorAll('.comment-like').forEach((likeBtn, idx) => {
      likeBtn.onclick = function() {
        let comments = JSON.parse(localStorage.getItem(`comments_${postId}`) || '[]');
        if (!comments[idx].liked) {
          comments[idx].likes = (comments[idx].likes || 0) + 1;
          comments[idx].liked = true;
        } else {
          comments[idx].likes = Math.max(0, (comments[idx].likes || 1) - 1);
          comments[idx].liked = false;
        }
        localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));
        renderFeed();
        setTimeout(() => {
          const thisPost = document.querySelector(`.post[data-id="${postId}"]`);
          if (thisPost) thisPost.querySelector('.comments-section').style.display = 'block';
        }, 0);
      };
    });

    // Reply to comment
    commentsSection.querySelectorAll('.reply-btn').forEach((replyBtn, idx) => {
      replyBtn.onclick = function() {
        const commentItem = replyBtn.closest('.comment-item');
        const replyBox = commentItem.querySelector('.reply-box');
        replyBox.style.display = replyBox.style.display === 'block' ? 'none' : 'block';
      };
    });
    commentsSection.querySelectorAll('.reply-submit').forEach((replySubmit, idx) => {
      replySubmit.onclick = function() {
        const commentItem = replySubmit.closest('.comment-item');
        const replyInput = commentItem.querySelector('.reply-input');
        const replyText = replyInput.value.trim();
        if (!replyText) return;
        let comments = JSON.parse(localStorage.getItem(`comments_${postId}`) || '[]');
        comments[idx].replies = comments[idx].replies || [];
        comments[idx].replies.push({ user: "User", text: replyText, likes: 0, liked: false });
        localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));
        renderFeed();
        setTimeout(() => {
          const thisPost = document.querySelector(`.post[data-id="${postId}"]`);
          if (thisPost) thisPost.querySelector('.comments-section').style.display = 'block';
        }, 0);
      };
    });

    // Like reply
    commentsSection.querySelectorAll('.reply-like').forEach((likeBtn, idx) => {
      likeBtn.onclick = function() {
        const replyItem = likeBtn.closest('.reply-item');
        const commentItem = likeBtn.closest('.comment-item');
        const ridx = parseInt(replyItem.getAttribute('data-ridx'));
        const cidx = parseInt(commentItem.getAttribute('data-cidx'));
        let comments = JSON.parse(localStorage.getItem(`comments_${postId}`) || '[]');
        let reply = comments[cidx].replies[ridx];
        if (!reply.liked) {
          reply.likes = (reply.likes || 0) + 1;
          reply.liked = true;
        } else {
          reply.likes = Math.max(0, (reply.likes || 1) - 1);
          reply.liked = false;
        }
        localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));
        renderFeed();
        setTimeout(() => {
          const thisPost = document.querySelector(`.post[data-id="${postId}"]`);
          if (thisPost) thisPost.querySelector('.comments-section').style.display = 'block';
        }, 0);
      };
    });
  });
}

function attachMediaLightbox() {
  document.querySelectorAll('.media-grid').forEach(grid => {
    const postDiv = grid.closest('.post');
    const postId = postDiv.getAttribute('data-id');
    const posts = JSON.parse(localStorage.getItem('socialpay_posts') || '[]');
    const post = posts.find(p => p.id == postId);
    const media = post.media || [];
    grid.querySelectorAll('.media-thumb').forEach((thumb, idx) => {
      thumb.onclick = function() {
        openLightbox(media, idx);
      };
    });
  });
}

function openLightbox(mediaArr, startIdx) {
  const lightbox = document.getElementById('mediaLightbox');
  const closeBtn = document.getElementById('closeLightbox');
  const content = document.getElementById('lightboxContent');
  const prevBtn = document.getElementById('prevMedia');
  const nextBtn = document.getElementById('nextMedia');
  let idx = startIdx;

  function showMedia(i) {
    const m = mediaArr[i];
    content.innerHTML = m.type === 'image'
      ? `<img src="${m.data}" alt="media">`
      : `<video src="${m.data}" controls autoplay style="background:#222"></video>`;
  }
  showMedia(idx);
  lightbox.style.display = 'flex';

  prevBtn.onclick = function() {
    idx = (idx - 1 + mediaArr.length) % mediaArr.length;
    showMedia(idx);
  };
  nextBtn.onclick = function() {
    idx = (idx + 1) % mediaArr.length;
    showMedia(idx);
  };
  closeBtn.onclick = function() {
    lightbox.style.display = 'none';
    content.innerHTML = '';
  };
  lightbox.onclick = function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      content.innerHTML = '';
    }
  };
}

window.addEventListener('DOMContentLoaded', renderFeed);