window.onload = () => {
  document.getElementById('nav-toggle').onclick = () => {
    const menuEl = document.querySelector('.main-navigation .onepress-menu');
    if(menuEl.classList.contains('.mobile-menu-open')){
        menuEl.classList.remove('.mobile-menu-open');
        menuEl.style.height = '0px';
        menuEl.classList.add('.mobile-menu-close');
    } else {
      menuEl.classList.add('.mobile-menu-open');
      menuEl.style.height = '100%';
      menuEl.classList.remove('.mobile-menu-close');
    }
  }
}