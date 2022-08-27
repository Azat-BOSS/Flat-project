const footer = document.querySelector('.footer');
const footerContainer = footer.querySelector('.footer__container');
const footerAreaBtn = footerContainer.querySelectorAll('.footer__room-btn');

footer.addEventListener('mouseover', () => {
  footer.classList.add('footer_active');
  footerContainer.classList.add('footer__container_active');
})

footerContainer.addEventListener('mouseout', () => {
  footer.classList.remove('footer_active');
  footerContainer.classList.remove('footer__container_active');
})

footerAreaBtn.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('footer__room-btn_active')
  })
})

export {footer, footerContainer, footerAreaBtn };
