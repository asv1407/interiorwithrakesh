document.addEventListener('DOMContentLoaded', function() {
    function toggleSidebar() {
        var sidebar = document.querySelector('.sidebar');
        var menuIcon = document.querySelector('.menu-icon');
        var sidebarStyle = getComputedStyle(sidebar);
        var sidebarLeft = sidebarStyle.getPropertyValue('left');

        if (sidebarLeft === '-250px') {
            sidebar.style.left = '0px';
            menuIcon.classList.add('expanded');
        } else {
            sidebar.style.left = '-250px';
            menuIcon.classList.remove('expanded');
        }
    }

    // Other JavaScript code as needed
});
