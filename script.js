        document.addEventListener("DOMContentLoaded", function() {
            const profileIcon = document.querySelector(".profile-icon");
            const profileDropdown = document.getElementById("profileDropdown");

            profileIcon.addEventListener("click", function() {
                profileDropdown.classList.toggle("show");
            });

            document.addEventListener("click", function(event) {
                if (!profileIcon.contains(event.target) && !profileDropdown.contains(event.target)) {
                    profileDropdown.classList.remove("show");
                }
            });
        });