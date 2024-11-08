

export class bottomPoles2 {
    constructor(poleElem) {
        this.poleElem = poleElem
        this.up = 0
        this.go = 1
        this.speedy = 0.2
        this.length = 18
        this.nearness = 5
        this.point = 0





    }
    get x2() {
        return parseFloat(getComputedStyle(this.poleElem).getPropertyValue('--x2'))
    }
    set x2(value) {
        this.poleElem.style.setProperty("--x2", value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.poleElem).getPropertyValue('--poleY2'))
    }
    set y(value) {
        this.poleElem.style.setProperty("--poleY2", value)
    }

    rect() {

        return this.poleElem.getBoundingClientRect()
    }

    update(start, pause, poley, move, polespeed) {
        if (start != "gameover" && pause != 'pause') {
            if (this.x2 < 260) {
                this.x2 = this.x2 + polespeed
            } else {
                this.x2 = -25
                this.point = 0

            }
        }
        //this is the opposite up and down motions
        if (move === 1) {
            if (this.up > this.length - this.length - this.length && this.go == 1) {
                this.y = poley + this.up + this.nearness
                this.up = this.up - this.speedy
            } else {
                this.up = this.up + this.speedy
                this.y = poley + this.up + this.nearness
                this.go = 2
                if (this.up > -1) {
                    this.go = 1
                }
            }
        }

        //this is the  up and down motions
        if (move === 2) {
            if (this.up < this.length && this.go == 1) {
                this.y = poley + this.up
                this.up = this.up + this.speedy
            } else {
                this.up = this.up - this.speedy
                this.y = poley + this.up
                this.go = 2
                if (this.up < 1) {
                    this.go = 1
                }
            }
        }

        if (move === 3) {
            this.y = poley
        }
    }
}
