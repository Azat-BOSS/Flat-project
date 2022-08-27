 const flatArray = [
  {
    image: './images/mainImages/firstFlat.jpg',
    text: '1. Жилой комплекс небывалого масштаба с развитой инфраструктурой'
  },
  {
    image: './images/mainImages/secondFlat.jpeg',
    text: '2. Жилой комплекс небывалого масштаба с развитой инфраструктурой'
  },
  {
    image: './images/mainImages/thirdFlat.jpeg',
    text: '3. Жилой комплекс небывалого масштаба с развитой инфраструктурой'
  },
  {
    image: './images/mainImages/fourthFlat.jpeg',
    text: '4. Жилой комплекс небывалого масштаба с развитой инфраструктурой'
  },
  {
    image: './images/mainImages/fifthFlat.jpeg',
    text: '5. Жилой комплекс небывалого масштаба с развитой инфраструктурой'
  },
  {
    image: './images/mainImages/sixthFlat.jpeg',
    text: '6. Жилой комплекс небывалого масштаба с развитой инфраструктурой'
  },
  {
    image: './images/mainImages/seventhFlat.jpeg',
    text: '7. Жилой комплекс небывалого масштаба с развитой инфраструктурой'
  },
  {
    image: './images/mainImages/eigthFlat.jpeg',
    text: '8. Жилой комплекс небывалого масштаба с развитой инфраструктурой'
  },
  {
    image: './images/mainImages/ninthFlat.jpeg',
    text: '9. Жилой комплекс небывалого масштаба с развитой инфраструктурой'
  },
]


const flat = document.querySelector('.flat');
const flatImage = document.querySelector('.flat__main-image');
const flatTitle = flat.querySelector('.flat__title');
const flatText = flat.querySelector('.flat__text');
const introLinks = document.querySelectorAll('.intro__link')


const changeInfo = (i) => {
  flatImage.src = flatArray[i].image;
  flatTitle.textContent = introLinks[i].textContent;
  flatText.textContent = flatArray[i].text
 }

const allChange = (i) => {
  introLinks[i].onmouseover = () => { 
    flat.classList.add('flat_active');
    changeInfo(i)
   }
   introLinks[i].onmouseout = () => {
    flat.classList.remove('flat_active');
   }
 }

allChange(0)
allChange(1)
allChange(2)
allChange(3)
allChange(4)
allChange(5)
allChange(6)
allChange(7)
allChange(8)
allChange(9)

export {flat, flatImage, flatTitle, flatText, introLinks, changeInfo, allChange, flatArray}  