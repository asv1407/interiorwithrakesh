function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const sidebarWidth = sidebar.offsetWidth;

  if (sidebar.style.left === '0px') {
    sidebar.style.left = `-${sidebarWidth}px`;
  } else {
    sidebar.style.left = '0px';
  }
}
