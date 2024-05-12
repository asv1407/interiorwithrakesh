document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.querySelector('.sidebar');
    var menuIcon = document.querySelector('.menu-icon');
    
    menuIcon.addEventListener('click', function() {
        var sidebarStyle = getComputedStyle(sidebar); // Get the computed style
        var sidebarLeft = sidebarStyle.getPropertyValue('left'); // Get the 'left' property value

        if (sidebarLeft === '-250px') {
            sidebar.style.left = '0px'; // Open the sidebar
            menuIcon.classList.add('expanded'); // Add a class for the expanded state
        } else {
            sidebar.style.left = '-250px'; // Close the sidebar
            menuIcon.classList.remove('expanded'); // Remove the expanded class
        }
    });
});
