// Define the openPopup and closePopup functions
function openPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Call openPopup after 30 seconds
setTimeout(openPopup, 10000);

// Toggle sidebar function
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const sidebarWidth = sidebar.offsetWidth;

  if (sidebar.style.left === '0px' || sidebar.style.left === '') {
    sidebar.style.left = `-${sidebarWidth}px`;
  } else {
    sidebar.style.left = '0px';
  }
}

// Form submission handling
const form = document.getElementById('quotationForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const number = formData.get('number');
  const email = formData.get('email');
  const requirements = formData.get('requirements');

  // Check if requirements exceed 200 characters
  if (requirements.length > 200) {
    alert('Requirements should not exceed 200 characters.');
    return; // Stop form submission if requirements are too long
  }

  console.log({
    name: name,
    number: number,
    email: email,
    requirements: requirements
  });

  closePopup();
  // Additional logic for form submission (e.g., sending data to server) can be added here
});
