module.exports = class Robot {
    constructor(x, y, orientation) {
        this.x = parseInt(x, 10);
        this.y = parseInt(y, 10);
        this.orientation = orientation;
        this.lost = false;
    }

    setOrientation(newOrientation) {
        this.orientation = newOrientation;
    }

    move() {
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