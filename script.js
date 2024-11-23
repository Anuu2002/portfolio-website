// Toggle Dark Mode
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('bg-gray-100');
  document.body.classList.toggle('text-gray-800');
  document.body.classList.toggle('bg-primary');
  document.body.classList.toggle('text-white');
});
