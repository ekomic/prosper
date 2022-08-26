const navLinks = document.querySelectorAll(".nav-items");

// window.addEventListener("scroll", addActive);
// This is to add Active class

if (navLinks.length) {
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((link) => {
          link.classList.remove('active');
          console.log(link);
      });
      
      link.classList.add('active');
      console.log(link);

    });
  });
}
