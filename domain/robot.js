module.exports = class Robot {
    constructor(x, y, orientation, top, right) {
        this.x = parseInt(x, 10);
        this.y = parseInt(y, 10);
        this.orientation = orientation;
        this.top = top;
        this.right = right;
        this.lost = false;
    }

    setOrientation(newOrientation) {
        this.orientation = newOrientation;
    }

    move() {
        if(this.x > this.right || this.y > this.top){
            this.lost = 'LOST';
            return;
        }
        switch (this.orientation) {
            case 'N':
                this.y = this.y + 1;
                break;
            case 'S':
                this.y = this.y - 1;
                break;
            case 'E':
                this.x = this.x + 1;
                break;
            case 'W':
                this.x = this.x - 1;
                break;
        }
    }

    toString() {
        return `${this.x} ${this.y} ${this.orientation} ${(this.lost || '')}`.trim();
    }
}