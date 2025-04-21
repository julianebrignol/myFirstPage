document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const header = document.querySelector('.ju-header');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    header.classList.toggle('open');

    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });
});

