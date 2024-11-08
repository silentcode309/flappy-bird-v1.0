export class head {
    constructor(headElem) {
        this.headElem = headElem
        this.jump
        this.gravity = 0
        this.reset()



    }
    get y() {
        return parseFloat(getComputedStyle(this.headElem).getPropertyValue('--y'))
    }

    set y(value) {
        this.headElem.style.setProperty("--y", value)
    }
    reset() {
        this.y = 50
    }

    rect() {

        return this.headElem.getBoundingClientRect()
    }

    update(paddleRects, gravity) {
        if (this.jump != null) {
            this.gravity = gravity
            this.y = this.y + this.jump
            this.jump = this.jump + this.gravity
            const rect = this.rect()

            if (rect.bottom >= window.innerHeight) {
                this.jump = null
                this.y = 0
                this.gameover = 'gameover'



            }



            if (paddleRects.some(r => isCollision(r, rect))) {
                this.gameover = 'gameover'


            }
        }



    }




    //  if (rect.top <= 0) {

    //     this.y = 93
    //       this.jump = 0
    //   }








}

function isCollision(rect1, rect2) {
    return (
        rect1.left <= rect2.right &&
        rect1.right >= rect2.left &&
        rect1.top <= rect2.bottom &&
        rect1.bottom >= rect2.top
    )
}