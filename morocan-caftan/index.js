
/* Toggle menu visibility on small screens
document.querySelector('.menu-toggle').addEventListener('click', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
});
*/
// Toggle the menu and top bar visibility on mobile
const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
  
