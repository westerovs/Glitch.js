class WaveGlitch {
    constructor(id, src, posX = 0, posY = 0, opacity = 1) {
        // аттрибуты
        this.id   = id
        this.src  = src
        this.posX = posX
        this.posY = posY

        this.canvas          = document.getElementById(id);
        this.ctx             = this.canvas.getContext('2d')
        this.canvasWidth     = this.canvas.width;
        this.canvasHeight    = this.canvas.height;
        this.ctx.globalAlpha = opacity;

        // настройки
        this.imgSlice      = 100  // кол-во кусочков на которое обрезается img(примерно от половины ширины)
        this.imgSliceWidth = 2    // обрезаем два кусочка
        this.imgOffsetX    = 2    // двигаем два кусочка
        this.waveAmplitude = 1
        this.waveSpeed     = 0

        this.image      = new Image();
        this.image.src  = this.src
        this.imgHeingt  = 124 // можно вынести в атрибуты класса

        this.requestAnim = null
    }

    startAnimate = () => {
        this.waveSpeed += 0.10;

        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

        for (let i = 0; i <= this.imgSlice; i++) {
            this.ctx.drawImage(
                this.image,

                this.imgOffsetX * i - this.posX,
                (Math.sin(this.waveSpeed - (i / 4) ) * this.waveAmplitude),
                this.imgSliceWidth,
                this.imgHeingt,

                this.imgOffsetX * i,
                this.posY,
                this.imgSliceWidth,
                this.imgHeingt
            )
        }
    
        this.requestAnim = requestAnimationFrame(this.startAnimate);
    }

    init = () => {
        this.image.addEventListener('load', this.startAnimate)
    }

    destroy = () => {
        cancelAnimationFrame(this.requestAnim)
    }
}

const waveGlitch = new WaveGlitch('canvas', 'img/fish-origin.png', 10, 10, 1)
waveGlitch.init()