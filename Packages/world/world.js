class World {
    // matrix => block
    constructor(sizeX, sizeY, sizeZ) {
        Physijs.scripts.worker = '../libs/physijs_worker.js';
        Physijs.scripts.ammo = '../libs/ammo.js';

        var scene = new Physijs.Scene;
        scene.setGravity(new THREE.Vector3(0, -50, 0));


        this.matrix = new Matrix(sizeX, sizeY, sizeZ);
        this.scene = scene;
    }

    getScene() {
        if (this.scene) return this.scene;
    }

    addStaticBlock(staticBlock) {
        const index = staticBlock.getLocation();
        this.matrix.putData(index.x, index.y, index.z, (e) => {
            e = {
                block: staticBlock
            }
            this.scene.add(staticBlock.getMesh());
        });
        console.log(this.getBlock(index.x, index.y, index.z));
    }

    getBlock(x, y, z) {
        return this.matrix.getData(x, y, z);
    }

    addLight(light) {
        this.scene.add(light);
    }
}