/**
 * @file sideBarMobile.js
 * This script handles the mobile menu toggle functionality.
 */
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    // Function to close the menu
    const closeMenu = () => {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Function to open the menu
    const openMenu = () => {
        mobileMenu.classList.remove('hidden');
        menuIconOpen.classList.add('hidden');
        menuIconClose.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    if (menuBtn && mobileMenu && menuIconOpen && menuIconClose) {
        menuBtn.addEventListener('click', () => {
            // Check if the menu is currently hidden
            const isMenuHidden = mobileMenu.classList.contains('hidden');
            
            if (isMenuHidden) {
                openMenu();
            } else {
                closeMenu();
            }
        });

        // Close mobile menu when a navigation link is clicked
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close mobile menu when clicking on the overlay background
        mobileMenu.addEventListener('click', (event) => {
            // If the clicked element is the overlay itself (the parent)
            if (event.target === mobileMenu) {
                closeMenu();
            }
        });
    }
});
