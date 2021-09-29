class Player {
    constructor() {
        this.camera = new Camera(20, 20, 20);
    }

    getCamera() {
        return this.camera.getObject();
    }
}