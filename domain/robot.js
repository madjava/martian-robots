module.exports = class Robot {
    constructor(x, y, orientation) {
        this.x = x;
        this.y = y;
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
}