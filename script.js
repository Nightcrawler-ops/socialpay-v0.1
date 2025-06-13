document.addEventListener("DOMContentLoaded", function () {
    // Log when the script is ready
    console.log("SocialPay is ready.");

    // Get references to search bar elements
    const searchBar = document.getElementById("searchBar");
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");

    // Collapse search bar by default on mobile
    function collapseSearch() {
        if (window.innerWidth <= 1024) {
            // Collapse the search bar and remove focus from input on mobile
            searchBar.classList.add("collapsed");
            searchInput.blur();
        } else {
            // Expand the search bar on desktop
            searchBar.classList.remove("collapsed");
        }
    }
    collapseSearch();
    // Re-evaluate on window resize
    window.addEventListener("resize", collapseSearch);

    // Expand search bar when search icon is clicked (on mobile)
    searchIcon.addEventListener("click", function (e) {
        if (searchBar.classList.contains("collapsed")) {
            searchBar.classList.remove("collapsed");
            searchInput.focus();
            // Prevent event from bubbling up
            e.stopPropagation();
        }
    });

    // Collapse search bar when clicking outside of it (on mobile)
    document.addEventListener("click", function (e) {
        if (
            window.innerWidth <= 1024 &&
            !searchBar.contains(e.target)
        ) {
            searchBar.classList.add("collapsed");
        }
    });

    // Profile dropdown toggle
    const profileMenu = document.getElementById("profileMenu");
    const profileDropdownIcon = document.getElementById("profileDropdownIcon");

    if (profileDropdownIcon && profileMenu) {
        // Toggle profile dropdown menu on icon click
        profileDropdownIcon.addEventListener("click", function (e) {
            e.stopPropagation();
            profileMenu.classList.toggle("open");
        });
        // Close profile dropdown when clicking outside of it
        document.addEventListener("click", function (e) {
            if (!profileMenu.contains(e.target)) {
                profileMenu.classList.remove("open");
            }
        });
    }
});
