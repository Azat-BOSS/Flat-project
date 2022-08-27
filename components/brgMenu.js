const body = document.querySelector('.body')
const brgMenu = body.querySelector('.header__brg-menu');
const sidebar = document.querySelector('.sidebar');
const popupBarBrg = sidebar.querySelector('.sidebar__brg-menu')
const page = body.querySelector('.page')
const openPopup = (popup, noScroll, blur) => {  
  popup.classList.add('sidebar_active');
  noScroll.classList.add('modal');
  blur.classList.add('blur')
}

const closePopup = (popup, noScroll, blur) => {
  popup.classList.remove('sidebar_active')
  noScroll.classList.remove('modal');
  noScroll.classList.remove('blur');
  blur.classList.remove('blur');
}

brgMenu.addEventListener('click', () => {
  openPopup(sidebar, body, page)
})

popupBarBrg.addEventListener('click', (evt) => {
  closePopup(sidebar, body, page)
})


document.addEventListener('keydown', (evt) => {
  if(evt.key === "Escape") {
    closePopup(sidebar, body, page)
  }
})

export {brgMenu, sidebar, body, popupBarBrg, openPopup, closePopup, page}
