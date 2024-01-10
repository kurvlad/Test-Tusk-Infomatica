const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function goToSlide(index) {
    currentIndex = index;
    const translateValue = -index * 25 + 50;
    slider.style.transform = `translateX(${translateValue}%)`;

}

function handleWheel(event) {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    const newIndex = (currentIndex + delta);
    let slideArray = document.querySelectorAll('.slide');
    if (newIndex >= 0 && newIndex < slides.length) {
        goToSlide(newIndex);
        slideArray.forEach(element => {
            element.classList.remove('item-active');
        })
        slideArray[newIndex].classList.add('item-active');
    }

}


function handleClick(event) {
    const slide = event.target.closest('.slide');
    let slideArray = document.querySelectorAll('.slide');
    if (slide) {
        const index = Array.from(slides).indexOf(slide);

        slideArray.forEach(element => {
            element.classList.remove('item-active');
        })
        slideArray[index].classList.add('item-active');


        if (index !== -1) {
            goToSlide(index);
        }
    }
}

slider.addEventListener('wheel', handleWheel);
slider.addEventListener('click', handleClick);


//

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    let heighHero = (window.outerHeight - 55);
    hero.style.height = `${heighHero}px`;
})

document.addEventListener('resize', () => {
    const hero = document.querySelector('.hero');
    let heighHero = (window.outerHeight - 55);
    hero.style.height = `${heighHero}px`;
})