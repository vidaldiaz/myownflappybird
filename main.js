const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

//variables auxiliares

const images = {
  flappyBackground: './images/flappy-bg.png',
  flappyLogo: './images/flappy-logo.png',
  flappyPipeBot: './images/flappy-pipe-bot.png',
  flappyPipeTop: './images/flappy-pipe-top.png',
  flappy: './images/flappy.png',
}

//clases
class Background {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = images.flappyBackground
  }
  draw() {
    context.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}

//instancias
const background = new Background()

//funciones principales
function update() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  background.draw()
}

setInterval(update, 1000 / 60)
//funciones auxiliares

//listeners
