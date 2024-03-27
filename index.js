const images = [...document.querySelectorAll('img')];
const imagesLength = images.length;

const leftButton = document.querySelector('.left-arrow');
const rightButton = document.querySelector('.right-arrow');

makeDots(imagesLength);

const bottomDots = [...document.querySelectorAll('.dot')];

let pos = 0;
let intervalId = setInterval(intervalFunction, 5000);


images[pos].classList.add('visible');
bottomDots[pos].classList.add('active');

leftButton.addEventListener('click', () => {
    let newPos = pos;
    if (isAtBeginning(newPos)) {
        newPos = imagesLength;
    }
    cycle(newPos - 1);
});

rightButton.addEventListener('click', () => {
    let newPos = pos;
    if (isAtEnd(newPos)) {
        newPos = -1;
    }
    cycle(newPos + 1);
});

function intervalFunction() {
    let newPos = pos;
    if (isAtEnd(newPos)) {
        newPos = -1;
    }
    cycle(newPos + 1);
};

function isAtEnd(num) {
    if (num == imagesLength - 1) {
        return true;
    }
    return false;
}

function isAtBeginning(num) {
    if (num == 0) {
        return true;
    }
    return false;
}

function cycle(newPos) {
    images[pos].classList.remove('visible');
    bottomDots[pos].classList.remove('active')
    images[newPos].classList.add('visible');
    bottomDots[newPos].classList.add('active')
    pos = newPos;
    clearInterval(intervalId);
    intervalId = setInterval(intervalFunction, 5000);
}

function makeDots(numImages) {
    const dots = document.querySelector('.dots');
    for (let i = 0; i < numImages; i++) {
        let newDot = document.createElement('button');
        newDot.classList.add('dot');
        newDot.textContent = "o"
        newDot.addEventListener('click', () => cycle(i))
        dots.appendChild(newDot);
    }
}