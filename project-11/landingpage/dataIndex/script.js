const collapseP = document.querySelectorAll('.collapse-p');
const collapse = document.querySelectorAll('.collapse');
const cElement = document.querySelectorAll('.c-element');

cElement.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('s-element');
    })
})