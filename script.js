document.addEventListener("DOMContentLoaded", function () {
    console.log("SocialPay is ready.");

    const searchBar = document.getElementById("searchBar");
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");

    // Collapse search bar by default on mobile
    function collapseSearch() {
        if (window.innerWidth <= 1024) {
            searchBar.classList.add("collapsed");
            searchInput.blur();
        } else {
            searchBar.classList.remove("collapsed");
        }
    }
    collapseSearch();
    window.addEventListener("resize", collapseSearch);

    // Expand search bar on icon click
    searchIcon.addEventListener("click", function (e) {
        if (searchBar.classList.contains("collapsed")) {
            searchBar.classList.remove("collapsed");
            searchInput.focus();
            e.stopPropagation();
        }
    });

    // Collapse search bar when clicking outside
    document.addEventListener("click", function (e) {
        if (
            window.innerWidth <= 1024 &&
            !searchBar.contains(e.target)
        ) {
            searchBar.classList.add("collapsed");
        }
    });
});
