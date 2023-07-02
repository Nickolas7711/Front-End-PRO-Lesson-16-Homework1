const input = document.getElementById('myInput');
const sidebar = document.getElementById('sidebar');

input.addEventListener('mouseenter', () => {
  sidebar.style.display = 'block';
});

input.addEventListener('mouseleave', () => {
  sidebar.style.display = 'none';
});