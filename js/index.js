/*
    img	Определяет используемое изображение, видео или элемент <canvas>
    sx	Необязательный параметр. Координата X начальной точки обрезки
    sy	Необязательный параметр. Координата Y начальной точки обрезки
    swidth	Необязательный параметр. Ширина обрезанного изображения
    sheight	Необязательный параметр. Высота обрезанного изображения
    x	Координата X на холсте, куда будет помещено изображение
    y	Координата Y на холсте, куда будет помещено изображение
    width	Необязательный параметр. Применяемая ширина изображения (можно растянуть или сжать изображение)
    height	Необязательный параметр. Применяемая высота изображения (можно растянуть или сжать изображение)
*/

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const fish = new Image();
fish.src = 'fish.png'

const amplitude = 4;
let currentAnimationTime = 0;


function runAnimate() {
    currentAnimationTime += 0.30;
    let verticalSync = 0

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    //             img  sx                      sy                            swidth     sheight    x   y  width    height
    ctx.drawImage(fish, 0, (Math.sin(currentAnimationTime - 0) * amplitude), 10, canvasHeight, 0, 0, 10, canvasHeight)
    ctx.drawImage(fish, 10, (Math.sin(currentAnimationTime - 1) * amplitude), 10, canvasHeight, 10, 0, 10, canvasHeight)
    ctx.drawImage(fish, 20, (Math.sin(currentAnimationTime - 2) * amplitude), 10, canvasHeight, 20, 0, 10, canvasHeight)
    ctx.drawImage(fish, 30, (Math.sin(currentAnimationTime - 3) * amplitude), 10, canvasHeight, 30, 0, 10, canvasHeight)
    ctx.drawImage(fish, 40, (Math.sin(currentAnimationTime - 4) * amplitude), 10, canvasHeight, 40, 0, 10, canvasHeight)
    ctx.drawImage(fish, 50, (Math.sin(currentAnimationTime - 5) * amplitude), 10, canvasHeight, 50, 0, 10, canvasHeight)
    ctx.drawImage(fish, 60, (Math.sin(currentAnimationTime - 6) * amplitude), 10, canvasHeight, 60, 0, 10, canvasHeight)
    ctx.drawImage(fish, 70, (Math.sin(currentAnimationTime - 7) * amplitude), 10, canvasHeight, 70, 0, 10, canvasHeight)
    ctx.drawImage(fish, 80, (Math.sin(currentAnimationTime - 8) * amplitude), 10, canvasHeight, 80, 0, 10, canvasHeight)
    ctx.drawImage(fish, 90, (Math.sin(currentAnimationTime - 9) * amplitude), 10, canvasHeight, 90, 0, 10, canvasHeight)
    ctx.drawImage(fish, 100, (Math.sin(currentAnimationTime - 10) * amplitude), 10, canvasHeight, 100, 0, 10, canvasHeight)
    ctx.drawImage(fish, 110, (Math.sin(currentAnimationTime - 11) * amplitude), 10, canvasHeight, 110, 0, 10, canvasHeight)
    ctx.drawImage(fish, 120, (Math.sin(currentAnimationTime - 12) * amplitude), 10, canvasHeight, 120, 0, 10, canvasHeight)
    ctx.drawImage(fish, 130, (Math.sin(currentAnimationTime - 13) * amplitude), 10, canvasHeight, 130, 0, 10, canvasHeight)
    ctx.drawImage(fish, 140, (Math.sin(currentAnimationTime - 14) * amplitude), 10, canvasHeight, 140, 0, 10, canvasHeight)
    ctx.drawImage(fish, 150, (Math.sin(currentAnimationTime - 15) * amplitude), 10, canvasHeight, 150, 0, 10, canvasHeight)
    ctx.drawImage(fish, 160, (Math.sin(currentAnimationTime - 16) * amplitude), 10, canvasHeight, 160, 0, 10, canvasHeight)
    ctx.drawImage(fish, 170, (Math.sin(currentAnimationTime - 17) * amplitude), 10, canvasHeight, 170, 0, 10, canvasHeight)
    ctx.drawImage(fish, 180, (Math.sin(currentAnimationTime - 18) * amplitude), 10, canvasHeight, 180, 0, 10, canvasHeight)
    ctx.drawImage(fish, 190, (Math.sin(currentAnimationTime - 19) * amplitude), 10, canvasHeight, 190, 0, 10, canvasHeight)

    // for (let i = 1; i <= 3; i++) {

    // }
    requestAnimationFrame(runAnimate);
}

// запуск
fish.addEventListener('load', runAnimate)




// ======================================================================
// ============================= CSS ====================================
// ======================================================================



// функция y = sin(x), для любого значения x, возвращает значения, находящиеся в диапазоне от -1 до 1.
// В результате, значения, которые мы назначаем cy, будут находиться в диапазоне от centreY - 1 до centreY + 1
// Операция умножения функции на константу называют масштабированием.

// на CSS
function fishInCss() {
    const fish__items = document.querySelectorAll('.fish__item');
    const amplitude = 1;
    let currentAnimationTime = 0;

    function runAnimate() {
        currentAnimationTime += 0.090;
        let verticalSync = 0
        let offset = 0;
        let backgroundPositionX = 0

        fish__items.forEach(item => {
            item.style.left = `${offset}px`;
            item.style.backgroundPositionX = `${backgroundPositionX}px`

            item.style.top = `${(Math.sin(currentAnimationTime - verticalSync) * amplitude)}px`;
            verticalSync--
            offset += 50
            backgroundPositionX -= 50
        })

        requestAnimationFrame(runAnimate);
    }

    runAnimate();
}
fishInCss()