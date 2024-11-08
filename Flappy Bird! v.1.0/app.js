import * as head from './head.js'
import * as head2 from './head2.js'
import * as upperPoles from './Upper_poles/UpperPoles.js'
import * as upperPoles2 from './Upper_poles/UpperPoles2.js'
import * as upperPoles3 from './Upper_poles/UpperPoles3.js'
import * as bottomPoles from './Bottom_poles/Bottompoles.js'
import * as bottomPoles2 from './Bottom_poles/Bottompoles2.js'
import * as bottomPoles3 from './Bottom_poles/Bottompoles3.js'
const Head = new head.head(document.getElementById('head'));
const Head2 = new head2.head2(document.getElementById('head2'));
const Poles = new bottomPoles.bottomPoles(document.getElementById('poles-bottom'));
const Poles2 = new bottomPoles2.bottomPoles2(document.getElementById('poles-bottom2'));
const Poles3 = new bottomPoles3.bottomPoles3(document.getElementById('poles-bottom3'));
const Polesup = new upperPoles.upperPoles(document.getElementById('poles-top'));
const Polesup2 = new upperPoles2.UpperPoles2(document.getElementById('poles-top2'));
const Polesup3 = new upperPoles3.upperPoles3(document.getElementById('poles-top3'));
const score = document.getElementById('score');
const scorebox = document.getElementById('score-box');
const bestscorebox = document.getElementById('best-score-box');
const totaljumps = document.getElementById('total-jumps-box')
let settings = document.getElementById('setting-logo');
let playbutton = document.getElementById('play-button');
let scrollbtnSlowmo = document.getElementById('scroll-bar-circle')
let scrollbtnAcceleration = document.getElementById('scroll-bar-circle2')
let pause = 'pause'
console.log(Poles, Polesup)
let GameboardInertia = 9
let SETTING = false
let inertiaSetting = 0
let inertiaStopsetting = 0
let move = 3
let move2 = 3
let move3 = 3
let poley = 0
let poley2 = 0
let poley3 = 0
let backgroundScrollspeed = 0
let background1 = backgroundScrollspeed
let background2 = backgroundScrollspeed
let background3 = backgroundScrollspeed
let background4 = backgroundScrollspeed
let background5 = backgroundScrollspeed
let background6 = backgroundScrollspeed
let background7 = backgroundScrollspeed
let costumeX = 500
let costumeWait = 0
let jumpheight
let gravity
let birdspeed = 1
let totalJumps = 0
//control acceleration
let acceleration = true
//control slowmotion
let slowmotion = false



function update() {
    if (slowmotion === false) {
        //Change jump height of bird (normal jumpheight = 1.2)  
        jumpheight = 1.2
        //Change gravity of the bird (normal gravity = -0.09)
        gravity = -0.09
        //Change the speed of the bird (normal speed = 1)
        if (acceleration == false) { birdspeed = 1 }



    } else {
        //slowmotion bird movement
        jumpheight = 0.3
        gravity = -0.0099
        birdspeed = 0.6

    } Head.update([Poles.rect(), Poles2.rect(), Poles3.rect(), Polesup.rect(), Polesup2.rect(), Polesup3.rect()], gravity)
    Head2.update(gravity)
    Poles.update(Head.gameover, pause, poley, move, birdspeed)
    Poles2.update(Head.gameover, pause, poley2, move2, birdspeed)
    Poles3.update(Head.gameover, pause, poley3, move3, birdspeed)
    Polesup.update(Head.gameover, pause, poley, move, birdspeed)
    Polesup2.update(Head.gameover, pause, poley2, move2, birdspeed)
    Polesup3.update(Head.gameover, pause, poley3, move3, birdspeed)
    totaljumps.textContent = totalJumps
    if (Head.jump != null && acceleration === true) { birdspeed = birdspeed + 0.001 }


    if (Head.jump != null) {
        costumeWait++
    }
    if (Poles.x > 100 && Poles.point == 0) {
        score.textContent = parseInt(score.textContent) + 1
        Poles.point = 1
    }
    if (Poles2.x2 > 100 && Poles2.point == 0) {
        score.textContent = parseInt(score.textContent) + 1
        Poles2.point = 1
    }
    if (Poles3.x3 > 100 && Poles3.point == 0) {
        score.textContent = parseInt(score.textContent) + 1
        Poles3.point = 1
    }

    if (Poles.x < -20) {
        if (Math.floor(Math.random() * 2) + 1 == 2) {
            poley = Math.floor(Math.random() * 25) + 1

        } else {
            poley = Math.floor(Math.random() * -25) + 1
        }
        move = Math.floor(Math.random() * 3) + 1
        Poles.up = 0
        Polesup.up = 0

    }

    if (Poles2.x2 < -20) {
        if (Math.floor(Math.random() * 2) + 1 == 2) {
            poley2 = Math.floor(Math.random() * 25) + 1

        } else {
            poley2 = Math.floor(Math.random() * -25) + 1
        }
        move2 = Math.floor(Math.random() * 3) + 1
        Poles2.up = 0
        Polesup2.up = 0

    }

    if (Poles3.x3 < -20) {
        if (Math.floor(Math.random() * 2) + 1 == 2) {
            poley3 = Math.floor(Math.random() * 25) + 1

        } else {
            poley3 = Math.floor(Math.random() * -25) + 1
        }
        move3 = Math.floor(Math.random() * 3) + 1
        Poles3.up = 0
        Polesup3.up = 0

    }

    const backgroundx1 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--backgroundx1'))
    document.documentElement.style.setProperty('--backgroundx1', backgroundx1 + background1)

    const backgroundx2 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--backgroundx2'))
    document.documentElement.style.setProperty('--backgroundx2', backgroundx2 + background2)

    const backgroundx3 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--backgroundx3'))
    document.documentElement.style.setProperty('--backgroundx3', backgroundx3 + background3)

    const backgroundx4 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--backgroundx4'))
    document.documentElement.style.setProperty('--backgroundx4', backgroundx4 + background4)

    const backgroundx5 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--backgroundx5'))
    document.documentElement.style.setProperty('--backgroundx5', backgroundx5 + background5)

    const backgroundx6 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--backgroundx6'))
    document.documentElement.style.setProperty('--backgroundx6', backgroundx6 + background6)

    const backgroundx7 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--backgroundx7'))
    document.documentElement.style.setProperty('--backgroundx7', backgroundx7 + background7)


    if (slowmotion == false) {
        document.documentElement.style.setProperty('--scrollBarx', 24)
    } else {
        document.documentElement.style.setProperty('--scrollBarx', 16.2)
    }

    if (acceleration == false) {
        document.documentElement.style.setProperty('--scrollBarx2', 24)
    } else {
        document.documentElement.style.setProperty('--scrollBarx2', 16.2)
    }
    const settingx = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--settingx'))
    if (SETTING === true) {
        document.documentElement.style.setProperty('--settingx', settingx + inertiaSetting)
        if (inertiaSetting < 2 && inertiaStopsetting == 0) {
            inertiaSetting = inertiaSetting + 0.3
        } else {
            inertiaStopsetting = 1
            inertiaSetting = inertiaSetting * 0.9
        }
    } else {
        document.documentElement.style.setProperty('--settingx', -0.5)
        inertiaStopsetting = 0
    }
    const costumex = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--costumex'))


    const gameboard = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--gameboardy'))
    if (Head.gameover == 'gameover') {
        document.documentElement.style.setProperty('--gameboardy', gameboard + GameboardInertia)
        GameboardInertia = GameboardInertia * 0.9
        scorebox.textContent = score.textContent
        if (parseInt(scorebox.textContent) >= parseInt(bestscorebox.textContent)) {
            bestscorebox.textContent = scorebox.textContent

        }

    } else {


        GameboardInertia = 9
        document.documentElement.style.setProperty('--gameboardy', -80)

    }




    window.requestAnimationFrame(update)





    if (costumeWait == 5) {
        document.documentElement.style.setProperty('--costumex', costumex + costumeX)
        costumeWait = 0

        if (costumeX == 500) {
            costumeX = -500
        } else {
            costumeX = 500
        }
    }


    if (backgroundx1 < - 83) {
        background1 = 150
    } else {
        background1 = backgroundScrollspeed
    }

    if (backgroundx2 < - 83) {
        background2 = 150
    } else {
        background2 = backgroundScrollspeed
    }

    if (backgroundx3 < - 83) {
        background3 = 150
    } else {
        background3 = backgroundScrollspeed
    }

    if (backgroundx4 < - 83) {
        background4 = 150
    } else {
        background4 = backgroundScrollspeed
    }

    if (backgroundx5 < - 83) {
        background5 = 150
    } else {
        background5 = backgroundScrollspeed
    }

    if (backgroundx6 < -83) {
        background6 = 150
    } else {
        background6 = backgroundScrollspeed
    }

    if (backgroundx7 < -83) {
        background7 = 150
    } else {
        background7 = backgroundScrollspeed
    }
    if (Head.gameover != 'gameover' && Head.jump != null) {
        backgroundScrollspeed = -birdspeed * 0.15
    } else {
        backgroundScrollspeed = 0
    }
}



window.requestAnimationFrame(update)

document.addEventListener("keydown", JUMP)
document.addEventListener("mousedown", JUMPMOUSE)

function reset() {
    Head.y = 50
    Head2.y = 50
    Poles.x = 0
    Poles2.x2 = -100
    Poles3.x3 = -200
    Polesup.x = 0
    Polesup2.x2 = -100
    Polesup3.x3 = -200
    score.textContent = 0
    Poles.point = 0
    Poles2.point = 0
    Poles3.point = 0
    Head.jump = null
    Head2.jump = null
    pause = 'pause'
    totalJumps = 0
    if (acceleration === true) { birdspeed = 1 }

}

function JUMPMOUSE() {
    if (Head.gameover != 'gameover') {
        Head.jump = jumpheight
        Head2.jump = jumpheight
        pause = 'unpause'
    }
}
function JUMP(e) {
    if (Head.gameover != 'gameover') {
        if (e.keyCode == 32 || e.keyCode == 38 || e.keyCode == 87) {
            Head.jump = jumpheight
            Head2.jump = jumpheight
            pause = 'unpause'
            totalJumps++

        }
    }

}
function GameStart() {
    reset()
    Head.gameover = 'game'
}

function Activesettings() {
    if (SETTING == false) {
        SETTING = true
    } else {
        SETTING = false
    }
    Head.jump = null
    Head2.jump = null
    pause = 'pause'
}

function slowMo() {
    if (slowmotion == false) {
        slowmotion = true
    } else {
        slowmotion = false
    }
    Head.jump = null
    Head2.jump = null
    pause = 'pause'
}

function Accelerate() {
    if (acceleration == false) {
        acceleration = true
    } else {
        acceleration = false
    }

    Head.jump = null
    Head2.jump = null
    pause = 'pause'
}
function Enter(e) {
    if (e.keyCode === 13) {
        if (Head.gameover == 'gameover') {
            GameStart()
        }
    }
}
document.addEventListener('keydown', Enter)

playbutton.addEventListener('click', GameStart)
settings.addEventListener('click', Activesettings)
scrollbtnSlowmo.addEventListener('click', slowMo)
scrollbtnAcceleration.addEventListener('click', Accelerate)


//This is for flappy dunk css later...

/*.rim {
    width: 70px;
    height: 10px;
    border-radius: 50 %;
    color: red;
    border: 5px solid;
    bottom: 50vh;
    position: absolute;

}*/