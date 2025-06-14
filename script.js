// JavaScript for toggling profile menu
document.getElementById('profileMenu').addEventListener('click', function(e) {
    // Prevent click from bubbling up (so clicking inside dropdown doesn't close it)
    e.stopPropagation();
    const dropdownIcon = document.getElementById('profileDropdownIcon');
    dropdownIcon.classList.toggle('fa-chevron-up');
    dropdownIcon.classList.toggle('fa-chevron-down');
    this.classList.toggle('active');
    // Hide dropdown if clicking outside
    document.addEventListener('click', function handler(event) {
        if (!document.getElementById('profileMenu').contains(event.target)) {
            document.getElementById('profileMenu').classList.remove('active');
            dropdownIcon.classList.add('fa-chevron-down');
            dropdownIcon.classList.remove('fa-chevron-up');
            document.removeEventListener('click', handler);
        }
    });
});

// JavaScript for sidebar navigation
document.querySelectorAll('.sidebar ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.sidebar ul li').forEach(li => li.classList.remove('active'));
        this.classList.add('active');
    });
});

// JavaScript for bottom navigation
document.querySelectorAll('.bottom-nav a').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.bottom-nav a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// JavaScript for creating a post
document.querySelector('.create-post').addEventListener('click', function() {
    // Logic for creating a post
    alert('Create Post functionality is not implemented yet.');
});

// JavaScript for liking a post (button click or double-tap on image/video)
document.querySelectorAll('.post').forEach(post => {
    const likeBtn = post.querySelector('.like');
    const likeCount = likeBtn.querySelector('.like-count');
    const postMedia = post.querySelector('img, video');
    const heartIcon = likeBtn.querySelector('.fa-heart');

    // Helper to update like UI
    function toggleLike() {
        const liked = likeBtn.classList.toggle('liked');
        let count = parseInt(likeCount.textContent, 10);
        if (liked) {
            count += 1;
            heartIcon.classList.add('fa-solid', 'fa-heart', 'liked-heart');
            heartIcon.classList.remove('fa-regular');
            heartIcon.style.color = 'red';
        } else {
            count = Math.max(0, count - 1);
            heartIcon.classList.remove('fa-solid', 'liked-heart');
            heartIcon.classList.add('fa-regular');
            heartIcon.style.color = '';
        }
        likeCount.textContent = count;
    }

    // Like button click
    likeBtn.addEventListener('click', toggleLike);

    // Double-tap on image/video
    if (postMedia) {
        let lastTap = 0;
        postMedia.addEventListener('touchend', function(e) {
            const now = new Date().getTime();
            if (now - lastTap < 300) {
                toggleLike();
                e.preventDefault();
            }
            lastTap = now;
        });

        // For desktop: double-click
        postMedia.addEventListener('dblclick', function(e) {
            toggleLike();
            e.preventDefault();
        });
    }

    // Share button logic
    const shareBtn = post.querySelector('.share');
    const shareCount = shareBtn.querySelector('.share-count');
    const shareIcon = shareBtn.querySelector('i');
    shareBtn.addEventListener('click', function() {
        let count = parseInt(shareCount.textContent, 10) || 0;
        count += 1;
        shareCount.textContent = count;
        shareIcon.classList.add('fa-solid');
        setTimeout(() => shareIcon.classList.remove('fa-solid'), 500); // Visual feedback
    });

    // Dollar donate button logic
    const dollarBtn = post.querySelector('.dollar');
    const dollarCount = dollarBtn.querySelector('.dollar-count');
    const dollarIcon = dollarBtn.querySelector('i');
    dollarBtn.addEventListener('click', function() {
        let count = parseInt(dollarCount.textContent, 10) || 0;
        count += 1;
        dollarCount.textContent = count;
        dollarIcon.classList.add('fa-solid');
        setTimeout(() => dollarIcon.classList.remove('fa-solid'), 500); // Visual feedback
    });

    // Comment button logic
    const commentBtn = post.querySelector('.comment');
    const commentBox = post.querySelector('.comment-box');
    const commentCount = commentBtn.querySelector('.comment-count');
    const commentInput = post.querySelector('.comment-input');
    const commentSubmit = post.querySelector('.comment-submit');

    commentBtn.addEventListener('click', function() {
        if (commentBox) {
            commentBox.style.display = commentBox.style.display === 'none' ? 'block' : 'none';
            if (commentBox.style.display === 'block') {
                commentInput.focus();
            }
        }
    });

    if (commentSubmit) {
        commentSubmit.addEventListener('click', function() {
            if (commentInput.value.trim() !== '') {
                let count = parseInt(commentCount.textContent, 10) || 0;
                count += 1;
                commentCount.textContent = count;
                commentInput.value = '';
                commentBox.style.display = 'none';
            }
        });
    }
});