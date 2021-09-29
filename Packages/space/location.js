class Location {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    reset(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    getX() {
        return this.x; 
    }

    getY() {
        return this.y;
    }

    getZ() {
        return this.z;
    }
}