function toggleMenu() {
    const nav = document.getElementById('navigation');
    const menuButton = document.getElementById('menu');
    const iconSpan = menuButton.querySelector('.icon');

    
    nav.classList.toggle('open');

    
    const isOpen = nav.classList.contains('open');
    
    
    menuButton.setAttribute('aria-expanded', isOpen);

    
    iconSpan.textContent = isOpen ? 'X' : '☰';
}


function setDynamicDates() {
    
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    
    const lastModifiedSpan = document.getElementById('lastmodified');
    if (lastModifiedSpan) {
        
        lastModifiedSpan.textContent = document.lastModified;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    const menuButton = document.getElementById('menu');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
    
    
    setDynamicDates();
});