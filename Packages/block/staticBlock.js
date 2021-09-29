class StaticBlock {
    constructor(x, y, z, blockId) {


        this.blockType = blockTypes[blockId];
        //console.log(this.blockType);
        this.location = new Location(x, y, z);
        this.mesh = this.createMesh();
    }

    createMesh() {
        const mesh_material = new THREE.MeshPhongMaterial({ color:this.blockType.color});
        const mesh = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), mesh_material, 0);
        mesh.position.set(this.location.x, this.location.y, this.location.z);
        
        return mesh;
    }

    getMesh() {
        return this.mesh;
    }

    setLocation(x, y, z) {
        this.mesh.postion.set(x, y, z);
        this.location.set(x, y, z);
    }

    getLocation() {
        return this.location;
    }
}