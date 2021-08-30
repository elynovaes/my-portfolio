const x = document.getElementById('close');
const y = document.getElementById('play')
const z = document.querySelector('.video')
const k = document.getElementById('play-video')

x.addEventListener ('click', () => {
  y.classList.add("playclose");
  z.classList.add("playclose");
})

k.addEventListener ('click', () => {
  y.classList.remove("playclose");
  z.classList.remove("playclose");
})


/* bars menu */
const bars = document.getElementById('bars');
const closemenu = document.getElementById('x-menu')
const sidebar = document.getElementById('nav')

bars.addEventListener('click', () => {
  sidebar.classList.add('nav-open')
})

closemenu.addEventListener('click', () => {
  sidebar.classList.remove('nav-open')
})

sidebar.addEventListener('click', () => {
    console.log("clicou no menu")
    sidebar.classList.remove('nav-open')
})

/* scrolling */
window.addEventListener('scroll', () => {
  const menu = document.querySelector('.menu')
  
  menu.classList.toggle('scroll-active', window.scrollY > 0);
})

const elements = document.querySelectorAll('[data-anima]');
const animationClass = 'animation';

function animationScroll(){
  let topPageinWindow = window.pageYOffset + window.innerHeight*0.75;
  elements.forEach(function(element){
    if(topPageinWindow > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

if(elements.length) {
  window.addEventListener('scroll', function(){
    animationScroll();
  })
}