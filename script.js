document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          navLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');

          const target = document.querySelector(this.getAttribute('href'));
          window.scrollTo({
              top: target.offsetTop - document.querySelector('nav').offsetHeight,
              behavior: 'smooth'
          });
      });
  });

  window.addEventListener('scroll', function () {
      let current = '';

      sections.forEach(section => {
          const sectionTop = section.offsetTop - document.querySelector('nav').offsetHeight;
          if (pageYOffset >= sectionTop - 10) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current)) {
              link.classList.add('active');
          }
      });
  });
});
