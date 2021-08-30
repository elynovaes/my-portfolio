/* Animation scroll */

const boxs = document.querySelectorAll('.box')
const animationClass = 'animation';

function animationScroll() {
  let topPageinWindow = window.pageYOffset + window.innerHeight;
  boxs.forEach(function(box){

    if(topPageinWindow) {
      box.classList.add(animationClass);
    }
  })
}

if(boxs.length) {
   animationScroll();
}

/* Animation sections */
const sections = document.querySelectorAll('.sct')
const animationSection = 'sectionAnimation';

function animationScrollSection() {
  let topPageinWindow = window.pageYOffset + window.innerHeight*0.75;
  sections.forEach(function(section){

    if(topPageinWindow > section.offsetTop) {
      section.classList.add(animationSection);
    } else {
      section.classList.remove(animationSection);
    }
  })
}

if(sections.length) {
  window.addEventListener('scroll', () => {
    animationScrollSection();
    console.log(sections)
  })
}

console.log(sections)