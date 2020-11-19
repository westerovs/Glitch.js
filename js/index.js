const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;


const fish = new Image();
fish.src = 'fish.png'
fish.addEventListener('load', runAnimate)

let currentAnimationTime = 0;
const centreY = 75;
const amplitude = 20;
let offset = 0;

function runAnimate() {
    currentAnimationTime += 0.090;
    let verticalSync = 0
    let backgroundPositionX = 0

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.drawImage(fish, 0, 0, 50, canvasHeight, 0, 0, 50, canvasHeight)
    ctx.drawImage(fish, 50, offset, 50, canvasHeight, 50, 0, 50, canvasHeight)

    offset += 0.1

    // console.log('test');
    requestAnimationFrame(runAnimate);

}


// функция y = sin(x), для любого значения x, возвращает значения, находящиеся в диапазоне от -1 до 1.
// В результате, значения, которые мы назначаем cy, будут находиться в диапазоне от centreY - 1 до centreY + 1
// Операция умножения функции на константу называют масштабированием.

// const circles = document.querySelectorAll('.circle');

// let currentAnimationTime = 0;
// const centreY = 75;
// const amplitude = 20;

// function runAnimate() {
//     currentAnimationTime += 0.090;
//     let verticalSync = 0
//     let offset = 0;
//     let backgroundPositionX = 0

//     circles.forEach(item => {
//         item.style.left = `${offset}px`;
//         item.style.backgroundPositionX = `${backgroundPositionX}px`

//         item.style.top = `${ Math.sin(currentAnimationTime - verticalSync) * amplitude }px`;
//         verticalSync--
//         offset += 50
//         backgroundPositionX -= 50
//     })

//     requestAnimationFrame(runAnimate);
// }

// runAnimate();
