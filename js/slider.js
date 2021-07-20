const controlBtns = document.querySelectorAll('.control-btn');
const sliderElements = document.querySelectorAll('.slider-item');

for (let i = 0; i < controlBtns.length; i++) {
  controlBtns[i].addEventListener("click", function () {
    controlBtns[i].classList.add("control-btn-current");
    sliderElements[i].classList.add("slide-current");
    for (let count = 0; i < controlBtns.length; count++) {
      if (controlBtns[count] != controlBtns[i]) {
        controlBtns[count].classList.remove("control-btn-current")
        sliderElements[count].classList.remove("slide-current");
      }
    }
  })
}