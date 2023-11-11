(() => {
  window.addEventListener('scroll', function () {
    var button = document.getElementById('scroll-up');
    if (button) {
      button.style.visibility =
        window.scrollY > window.innerHeight ? 'visible' : 'hidden';
    }
  });

  document.querySelector('#scroll-up').addEventListener('click', scrollToTop);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
})();