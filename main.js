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
    this.img.onload = () => {
      this.draw()
      startScreen()
    }
  }
  draw() {
    this.x--
    if (this.x < -this.width) this.x = 0
    context.drawImage(this.img, this.x, this.y, this.width, this.height)
    context.drawImage(this.img, this.x + this.width, this.y, this.width, this.height)
  }
}

//instancias
const background = new Background()

//funciones principales
function update() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  startScreen()
  //pressStartOrder()
  background.draw()
}

setInterval(update, 1000 / 60)

//funciones auxiliares
function startScreen() {
  const startLogo = new Image()
  startLogo.src = images.flappyLogo
  startLogo.onload = () => {
    context.drawImage(startLogo, 90, 100, 300, 100)
    pressStartOrder()
  }
  // context.drawImage(startLogo, 90, 100, 300, 100)
  // context.fillStyle = 'white'
  // context.font = '25px Tahoma'
  // context.fillText('Press Enter to Start', 130, 300)
}

function pressStartOrder() {
  context.fillStyle = 'white'
  context.font = '25px Tahoma'
  context.fillText('Press Enter to Start', 130, 300)
}

//listeners
