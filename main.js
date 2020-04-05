const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

//variables auxiliares

let interval

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

class Flappy {
  constructor() {
    this.x = 200
    this.y = 200
    this.width = 50
    this.height = 50
    this.flappy = new Image()
    this.flappy.src = images.flappy
  }

  draw() {
    this.y += 2
    //background.draw()
    context.drawImage(this.flappy, this.x, this.y, this.width, this.height)
  }

  fly() {
    this.y -= 35
  }
}

//instancias
const background = new Background()
const flappy = new Flappy()

//funciones principales
function update() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  //startScreen()
  //pressStartOrder()
  background.draw()
  flappy.draw()
}

function startGame() {
  if (interval) return
  interval = setInterval(update, 1000 / 60)
}

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
document.addEventListener('keydown', (e) => {
  keycode = e.keyCode

  console.log(keycode)
  switch (keycode) {
    case 13:
      return startGame()
    case 32:
      return flappy.fly()
  }
})
