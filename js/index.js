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

const AMPLITUDE = 1;

let offsetX = 2;
let imgSliceWidth = 2;
let currentAnimationTime = 0;

const fish = new Image();
fish.src = 'fish.png'

function runAnimate() {
    currentAnimationTime += 0.30;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    for (let i = 0; i <= 100; i++) {
        ctx.drawImage(
            fish,
            offsetX * i,
            (Math.sin(currentAnimationTime - (i / 4) ) * AMPLITUDE),
            imgSliceWidth,
            canvasHeight,
            offsetX * i,
            0,
            imgSliceWidth,
            canvasHeight
        )
    }

    requestAnimationFrame(runAnimate);
}

// запуск
fish.addEventListener('load', runAnimate)
