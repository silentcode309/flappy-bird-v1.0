

export class upperPoles {
    constructor(poleElem) {
        this.poleElem = poleElem
        this.up = 0
        this.go = 1
        this.speedy = 0.2
        this.length = 18
        this.nearness = 5


    }
    get x() {
        return parseFloat(getComputedStyle(this.poleElem).getPropertyValue('--x'))
    }
    set x(value) {
        this.poleElem.style.setProperty("--x", value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.poleElem).getPropertyValue('--poleY'))
    }
    set y(value) {
        this.poleElem.style.setProperty("--poleY", value)
    }

    rect() {

        return this.poleElem.getBoundingClientRect()
    }

    update(start, pause, poley, move, polespeed) {
        if (start != "gameover" && pause != 'pause') {
            if (this.x < 260) {
                this.x = this.x + polespeed
            } else {
                this.x = -25


            }
        }
        //this is the opposite up and down motions
        if (move === 1) {
            if (this.up < this.length && this.go == 1) {
                this.y = poley + this.up - this.nearness
                this.up = this.up + this.speedy
            } else {
                this.up = this.up - this.speedy
                this.y = poley + this.up - this.nearness
                this.go = 2
                if (this.up < 1) {
                    this.go = 1
                }
            }
        }
        //this is the up and down motions
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

