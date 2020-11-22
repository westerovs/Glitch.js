'use-strict'
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

class WaveGlitch {
    constructor(src, posX = 0, posY = 0, opacity = 1) {
        // аттрибуты
        this.src   = src
        this.posX  = posX
        this.posY  = posY

        this.canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d')
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.ctx.globalAlpha = opacity;

        // настройки
        this.AMPLITUDE     = 1
        this.offsetX       = 2
        this.imgSliceWidth = 2
        this.speed         = 0
        this.imageSlice    = 100  // кол-во кусочков на которое обрезается img

        this.fishOrigin = new Image();
        this.fishOrigin.src = this.src

        this.imgHeingt  = 124 // можно вынести в атрибуты класса

        this.requestAnim = null
    }

    startAnimate = () => {
        this.speed += 0.10;

        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

        for (let i = 0; i <= this.imageSlice; i++) {
            this.ctx.drawImage(
                this.fishOrigin,

                this.offsetX * i - this.posX,
                (Math.sin(this.speed - (i / 4) ) * this.AMPLITUDE),
                this.imgSliceWidth,
                this.imgHeingt,

                this.offsetX * i,
                this.posY,
                this.imgSliceWidth,
                this.imgHeingt
            )
        }
    
        this.requestAnim = requestAnimationFrame(this.startAnimate);
    }

    init = () => {
        this.fishOrigin.addEventListener('load', this.startAnimate)
    }

    destroy = () => {
        cancelAnimationFrame(this.requestAnim)
    }
}

const waveGlitch = new WaveGlitch('img/fish-origin.png', 10, 10, 1)
waveGlitch.init()
// waveGlitch.destroy()
