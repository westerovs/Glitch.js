class WaveGlitch {
    constructor(id, src, posX = 0, posY = 0, width, height) {
        // параметры
        this.id   = id
        this.src  = src
        this.posX = posX
        this.posY = posY

        this.canvas          = document.getElementById(id);
        this.ctx             = this.canvas.getContext('2d')
        this.canvasWidth     = this.canvas.width;
        this.canvasHeight    = this.canvas.height;

        // image
        this.image      = new Image();
        this.image.src  = this.src
        this.imgWidth   = width
        this.imgHeight  = height

        // управление
        this.imgSlice      = this.imgWidth / 2  // кол-во кусочков на которое обрезается img
        this.imgSliceWidth = 2                  // ширина кусочка
        this.waveAmplitude = 10
        this.intensity     = 2
        this.speed         = 0

        this.requestAnim = null
    }

    startAnimate = () => {
        this.speed += 0.10;

        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)


        for (let i = 0; i <= this.imgSlice; i++) {
            this.ctx.drawImage(
                this.image,

                i * this.imgSliceWidth - this.posX,
                Math.sin(this.speed - (i / this.waveAmplitude)) * this.intensity,
                this.imgSliceWidth,
                this.imgHeight,

                i * this.imgSliceWidth,
                this.posY,
                this.imgSliceWidth,
                this.imgHeight
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

const waveGlitch = new WaveGlitch('canvas', 'img/fish.png', 0, 50, 400, 259)
waveGlitch.init()