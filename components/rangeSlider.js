const rangeSldier = document.querySelector('#range-slider')
const rangeSliderSecond = document.querySelector('#range-slider__second')

if(rangeSldier) {
  noUiSlider.create(rangeSldier, {
    start: [32, 186],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 250
    }
});

const inputMin = document.querySelector('#min');
const inputMax = document.querySelector('#max');
const inputsMinMax = [inputMin, inputMax]
rangeSldier.noUiSlider.on('update', function (values, handle) {
  inputsMinMax[handle].value = Math.floor(values[handle])
})
}

if(rangeSliderSecond) {
  noUiSlider.create(rangeSliderSecond, {
    start: [1.5, 17.5],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 25
    }
});

const inputMinimum = document.querySelector('#minimum');
const inputMaximum = document.querySelector('#maximum');
const inputsMinimMaxim = [inputMinimum, inputMaximum]
rangeSliderSecond.noUiSlider.on('update', function (values, handle) {
  inputsMinimMaxim[handle].value = Math.floor(values[handle])
})
}