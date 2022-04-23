class WaveGlitch {
  constructor({
      id,
      src,
      waveAmplitude = 10,
      intensity = 10,
      speed = 0.002,
    }) {
    this.id            = id
    this.src           = src
    this.waveAmplitude = waveAmplitude
    this.intensity     = intensity
    this.speed         = speed
    
    this.requestAnim = null
    this.ctx    = null
    this.image  = null
  
    this.width  = window.innerWidth
    this.height = window.innerHeight
    this.centerWindowX = null
    this.centerWindowY = null
    
    this.init()
  }
  
  init = () => {
    this.#createCanvas()
    this.#createImage()
    
    this.image.addEventListener('load', () => {
      this.centerWindowX = (window.innerWidth / 2) - this.image.width / 2
      this.centerWindowY = (window.innerHeight / 2) - this.image.height / 2
      this.#createAnimation()
    })
  }

  #createCanvas = () => {
    const canvas = document.createElement('canvas')
    this.ctx     = canvas.getContext('2d')
    
    canvas.id = this.id
    canvas.classList.add('canvas')
    canvas.setAttribute('width', `${ this.width }`)
    canvas.setAttribute('height', `${ this.height }`)
    
    document.body.append(canvas)
  }
  
  #createImage = () => {
    this.image = new Image()
    this.image.src = this.src
  }
  
  #createAnimation = () => {
    const imgSlice = this.width / 2  // кол-во кусочков на которое обрезается img
    const imgSliceWidth = 2  // ширина кусочка
    
    this.speed += 0.02
    this.ctx.clearRect(0, 0, this.width, this.height)
  
    for (let i = 0; i <= imgSlice; i++) {
      this.ctx.drawImage(
        this.image,
  
        -this.centerWindowX + (i * imgSliceWidth),
        -this.centerWindowY - (Math.sin(this.speed - (i / this.waveAmplitude)) * this.intensity),
        imgSliceWidth,
        this.height,

        i * imgSliceWidth,
        0,
        imgSliceWidth,
        this.height,
      )
    }
    
    this.requestAnim = requestAnimationFrame(this.#createAnimation)
  }
}

new WaveGlitch({
  id       : 'canvas',
  src      : 'src/img/fish.png',
  speed    : 0.02, // значение от 0.1 до 1 (0.01, 0.001 и тд)
})

