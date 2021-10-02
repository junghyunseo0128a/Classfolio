class Camera {
    constructor(x, y, z) {
        var camera = new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.set(x, y, z);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        this.camera = camera;
    }

    getObject() {
        return this.camera;
    }
}