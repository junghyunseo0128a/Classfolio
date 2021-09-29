class Block {
    constructor(x, y, z, blockId) {
        this.type = staticBlockType[blockId];

        if (!this.type) {
            console.error('블럭형식이 지정되지 않았습니다. -> ');
            console.log(blockId);
            return;
        }

        this.createMesh();
        this.setLocation(x, y, z);
        this.classType = 'block';
    }

    setLocation(x, y, z) {
        this.type.location.x = x;
        this.type.location.y = y;
        this.type.location.z = z;
        this.mesh.position.set(x, y, z);
    }

    getTexture() {
        return new THREE.ImageUtils.loadTexture(this.type.texture.default);
    }

    createMesh() {
        const geom = new THREE.BoxGeometry(this.type.size, this.type.size, this.type.size);
        const material = Physijs.createMaterial(
            new THREE.MeshPhongMaterial({ map: this.getTexture() })
        )
        const mesh = new Physijs.BoxMesh(geom, material, 0);
        this.mesh = mesh;
    }

    getMesh() {
        return this.mesh;
    }
}