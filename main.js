// TOGGLE BURGER ICON
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    
    // Toggle the height for collapsing/expanding
    if (navMenu.style.maxHeight === '0px' || navMenu.style.maxHeight === '') {
        navMenu.style.maxHeight = navMenu.scrollHeight + 'px';
    } else {
        navMenu.style.maxHeight = '0px';
    }
}
