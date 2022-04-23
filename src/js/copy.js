class WaveGlitch {
  constructor(params) {
    this.params = params;

    this.container = this.params.container;
    this.id = this.params.id;
    this.posX = this.params.posX;
    this.posY = this.params.posY;
    this.requestAnim = null;

    this.canvas = null;
    this.ctx = null;
    this.image = null;
    this.width = this.params.width;
    this.height = this.params.height;

    // cut image
    this.imgSlice = this.width / 2;  // кол-во кусочков на которое обрезается img
    this.imgSliceWidth = 2;  // ширина кусочка

    // control animation
    this.waveAmplitude = params.waveAmplitude;
    this.intensity = params.intensity;
    this.speedPlus = params.speed;
    this.speed = 0;
  }

  startAnimate = () => {
    this.speed += this.speedPlus * 2;
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i <= this.imgSlice; i++) {
      this.ctx.drawImage(
        this.image,

        i * this.imgSliceWidth - this.posX,
        Math.sin(this.speed - (i / this.waveAmplitude)) * this.intensity,
        this.imgSliceWidth,
        this.height,

        i * this.imgSliceWidth,
        this.posY,
        this.imgSliceWidth,
        this.height,
      );
    }

    this.requestAnim = requestAnimationFrame(this.startAnimate);
  };

  createImage = () => {
    this.image = new Image();
    this.image.src = this.params.src;
  };

  createCanvas = (container = this.container) => {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.id = this.id;
    this.canvas.classList.add('canvas');
    this.canvas.setAttribute('width', `${this.width}`);
    this.canvas.setAttribute('height', `${this.height}`);

    container.append(this.canvas);
  };

  init = async () => {
    this.createCanvas();
    this.createImage();
    this.image.addEventListener('load', this.startAnimate);
  };

  stopAnimation = () => {
    // stop animation
    cancelAnimationFrame(this.requestAnim);
  };
}

const waveGlitch = new WaveGlitch({
  container: document.querySelector('.wrapper'),
  id: '#canvas',
  src: 'src/img/fish.png',
  width: 500,
  height: 313,
  // ↓ необязательные параметры ↓
  posX: 0,
  posY: 0,
  waveAmplitude: 10,
  intensity: 10,
  speed: 0.02, // значение от 0.1 до 1 (0.01, 0.001 и тд)
});

waveGlitch.init();
