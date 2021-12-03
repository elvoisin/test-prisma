function toggleMenu(value) {
  var navbar = document.getElementById("navbar");
  if (value) {
    console.log('fdfd');
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
}
