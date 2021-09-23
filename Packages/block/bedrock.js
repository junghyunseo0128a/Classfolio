class Bedrock {
    constructor() {
        var box_material = new THREE.MeshPhongMaterial({ color:0xffffff});
        var box = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), box_material, 0);
        this.box = box;
    }

    getMesh() {
        if(this.box) return this.box;
    }

    setLocation(x, y, z) {
        this.box.position.set(x, y, z);
    }

}