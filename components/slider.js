const arrayCitation = ['Борщ без сметаны, как нигер без бананы', 
'Пернул в ладожку, дал понюхать кошке', 
'Нельзя покакать не пописав, но пописать, не покакав, можно',
 'Айфон для понтов, ксяоми для пацанов']


const btnBack = document.querySelector('.intro__btn-back');
const btnForward = document.querySelector('.intro__btn-forward');
const sliderLine = document.querySelector('.slider-line');
const introTitle = document.querySelector('.intro__title');
introTitle.textContent = arrayCitation[0]
let sliderImages = sliderLine.querySelector('.slider-line__video').offsetWidth;

let sliceWidth = 0;
let index = 1

window.addEventListener('resize', () => {
  let sliderImages = sliderLine.querySelector('.slider-line__video')
})

const sliderAction = (sliceNum) => {
  sliceWidth = sliceNum
  sliderLine.style.transform = `translateX(-${sliceWidth * sliderImages}px)`
}

btnForward.addEventListener('click', () => {
  sliceWidth ++ 
  sliderLine.style.transform = `translateX(-${sliceWidth * sliderImages}px)`
  if(sliceWidth >= 4) {
    sliderAction(0)
  }

  introTitle.textContent = arrayCitation[index];
  index++;
  if(index == arrayCitation.length) {
    index = 0;
  }
})


btnBack.addEventListener('click', () => {
  sliceWidth --
  sliderLine.style.transform = `translateX(-${sliceWidth * sliderImages}px)`
  if(sliceWidth < 0) {
    sliderAction(3)
  }
})








export {btnBack, btnForward, sliderLine, sliderImages, sliderAction, sliceWidth, introTitle, arrayCitation, index}
