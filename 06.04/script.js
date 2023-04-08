const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionContent = header.nextElementSibling;
    accordionContent.classList.toggle('active');

    if (accordionContent.classList.contains('active')) {
      accordionContent.style.display = 'block';
    } else {
      accordionContent.style.display = 'none';
    }
  });
});
