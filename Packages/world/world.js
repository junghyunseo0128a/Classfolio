class World {
    constructor() {
        Physijs.scripts.worker = '../libs/physijs_worker.js';
        Physijs.scripts.ammo = '../libs/ammo.js';

        var scene = new Physijs.Scene;
        scene.setGravity(new THREE.Vector3(0, -50, 0));

        this.world = scene;
    }

    getWorld() {
        if (this.world) return this.world;
    }

    addObject(object) {
        this.world.add(object);
    }
    
}