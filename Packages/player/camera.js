class Camera {
    constructor() {
        var camera = new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.set(50, 30, 50);
        camera.lookAt(new THREE.Vector3(10, 0, 10));

        this.camera = camera;
    }

    getObject() {
        return this.camera;
    }
}