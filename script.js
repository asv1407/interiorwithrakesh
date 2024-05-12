function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var menuLine = document.querySelector('.menu-line');

    var sidebarStyle = getComputedStyle(sidebar);
    var sidebarLeft = sidebarStyle.getPropertyValue('left');

    if (sidebarLeft === '-250px') {
        sidebar.style.left = '0px'; // Open the sidebar
        menuLine.classList.add('rotate-line'); // Add class to rotate line
    } else {
        sidebar.style.left = '-250px'; // Close the sidebar
        menuLine.classList.remove('rotate-line'); // Remove class to rotate line back
    }
}
