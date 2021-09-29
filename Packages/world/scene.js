class Scene {
    constructor() {
        Physijs.scripts.worker = '../libs/physijs_worker.js';
        Physijs.scripts.ammo = '../libs/ammo.js';

        var scene = new Physijs.Scene;
        scene.setGravity(new THREE.Vector3(0, -50, 0));

        this.scene = scene;
    }

    addObject(object) {
        this.scene.add(object);
    }

    getScene() {
        return this.scene;
    }
}