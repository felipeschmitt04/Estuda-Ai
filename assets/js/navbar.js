document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector("#nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }

    function setupDropdown(buttonId, boxId) {
        const button = document.querySelector(buttonId);
        const box = document.querySelector(boxId);
        
        if (button && box) {
            button.addEventListener("click", function (event) {
                event.stopPropagation();
                box.classList.toggle("show-box");
            });

            document.addEventListener("click", function (event) {
                if (!box.contains(event.target) && !button.contains(event.target)) {
                    box.classList.remove("show-box");
                }
            });
        }
    }

    setupDropdown("#notification-icon", "#notification-box");
    setupDropdown("#message-icon", "#message-box");
    setupDropdown("#profile-icon", "#profile-box");
});


const profileIcon = document.getElementById('profile-icon');
const userModal = document.getElementById('user-modal');
const closeModal = document.getElementById('close-modal');

profileIcon.addEventListener('click', () => {
    userModal.classList.add('show');
});

closeModal.addEventListener('click', () => {
    userModal.classList.remove('show');
});

window.addEventListener('click', (event) => {
    if (event.target === userModal) {
        userModal.classList.remove('show');
    }
});

const logoButton = document.getElementById('logo-button');
logoButton.addEventListener('click', () => {
    window.location.href = '#';
});

