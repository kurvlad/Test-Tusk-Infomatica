const data = [
    { date: '21 июня', time: '18:00', place: 'Стадион1', left: 'Зенит', right: 'Спартак' },
    { date: '22 июня', time: '19:00', place: 'Стадион2', left: 'Зенит2', right: 'Спартак' },
    { date: '23 июня', time: '20:00', place: 'Стадион3', left: 'Зенит3', right: 'Спартак' },
    { date: '24 июня', time: '21:00', place: 'Стадион4', left: 'Зенит4', right: 'Спартак' },
    { date: '25 июня', time: '22:00', place: 'Стадион5', left: 'Зенит5', right: 'Спартак' },
]

function addFromData() {
    const slideInfo = document.querySelectorAll('.slide');
    let i = 0;
    slideInfo.forEach((element) => {
        function nameDataItem(varName) {
            element.querySelector(`.item-${varName}`).textContent = data[i][varName];
        }
        nameDataItem('left');
        nameDataItem('right');
        nameDataItem('place');
        nameDataItem('date');
        nameDataItem('time');
        i++;
    })
}
addFromData()

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