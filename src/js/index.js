class WaveGlitch {
    constructor(
        id,
        src,
        width,
        height,
        posX = 0,
        posY = 0,
        waveAmplitude = 10,
        intensity = 2,
        speed = 0.10,
    ) {
        this.src  = src
        this.posX = posX
        this.posY = posY
        this.requestAnim = null

        // get image
        this.image     = new Image()
        this.image.src = this.src
        this.imgWidth  = width
        this.imgHeight = height

        // get canvas
        this.canvas       = document.querySelector(`${ id }`)
        this.ctx          = this.canvas.getContext('2d')
        this.canvasWidth  = this.imgWidth
        this.canvasHeight = this.imgHeight
        this.canvas.setAttribute('width', this.canvasWidth)   // width  === ширине img
        this.canvas.setAttribute('height', this.canvasHeight) // height === ширине img

        // cut image
        this.imgSlice      = this.imgWidth / 2  // кол-во кусочков на которое обрезается img
        this.imgSliceWidth = 2                  // ширина кусочка

        // control animation
        this.waveAmplitude = waveAmplitude
        this.intensity     = intensity
        this.speed         = 0
        this.speedPlus     = speed
    }

    startAnimate = () => {
        this.speed += this.speedPlus
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
                this.imgHeight,
            )
        }

        this.requestAnim = requestAnimationFrame(this.startAnimate)
    }

    init = () => {
        this.image.addEventListener('load', this.startAnimate)
    }

    destroy = () => {
        // stop animation
        cancelAnimationFrame(this.requestAnim)
    }
}

const waveGlitch = new WaveGlitch(
    '#canvas',         // id элемента, или селектор
    'src/img/fish.png',   // путь до картинки(от HTML)
    500,
    313,

    // ↓ необязательные параметры ↓
    0,
    0,
    10,
    10,
    0.01, // значение от 0.1 до 1 (0.01, 0.001 и тд)
)

waveGlitch.init() // вызвать анимацию
// waveGlitch.destroy() // остановить анимацию
// для канваса width и height установятся автоматически !
