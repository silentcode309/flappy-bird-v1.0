export class head2 {
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

    update(gravity) {
        if (this.jump != null) {
            this.gravity = gravity
            this.y = this.y + this.jump
            this.jump = this.jump + this.gravity
            const rect = this.rect()


            if (rect.bottom >= window.innerHeight) {
                this.jump = null
                this.y = 0
            }

            //  if (rect.top <= 0) {

            //     this.y = 93
            //       this.jump = 0
            //   }




        }



    }


}

