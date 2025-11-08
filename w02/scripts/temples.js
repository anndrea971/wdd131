// Function to handle the Hamburger Menu toggle
function toggleMenu() {
    const nav = document.getElementById('navigation');
    const menuButton = document.getElementById('menu');
    const iconSpan = menuButton.querySelector('.icon');

    // Toggle the 'open' class on the navigation element
    nav.classList.toggle('open');

    // Check the current state of the navigation
    const isOpen = nav.classList.contains('open');
    
    // Update the aria-expanded attribute for accessibility
    menuButton.setAttribute('aria-expanded', isOpen);

    // Change the icon: 'X' when open, '☰' when closed
    iconSpan.textContent = isOpen ? 'X' : '☰';
}

// Function to set dynamic dates
function setDynamicDates() {
    // 1. Set the Current Year for the Copyright
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Set the Last Modified Date
    const lastModifiedSpan = document.getElementById('lastmodified');
    if (lastModifiedSpan) {
        // Use the built-in document.lastModified property
        lastModifiedSpan.textContent = document.lastModified;
    }
}

// Event listener to run the functions once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Attach the toggleMenu function to the hamburger button click
    const menuButton = document.getElementById('menu');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
    
    // Execute the function to set footer dates
    setDynamicDates();
});