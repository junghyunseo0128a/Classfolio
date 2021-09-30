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

    getTexture(path) {
        //new THREE.ImageUtils.loadTexture(this.type.texture.default)
        //const loader = new THREE.ImageUtils;
        /*
            const textures = [
            loader.loadTexture(this.type.texture.top),
            loader.loadTexture(this.type.texture.bottom),
            loader.loadTexture(this.type.texture.default),
            loader.loadTexture(this.type.texture.default),
            loader.loadTexture(this.type.texture.default),
            loader.loadTexture(this.type.texture.default),
        ];
        */

        return new THREE.ImageUtils.loadTexture(this.type.texture.top);
    }

    createMesh() {
        const geom = new THREE.BoxGeometry(this.type.size, this.type.size, this.type.size);

        const material = new THREE.MeshBasicMaterial({ map: this.getTexture() });

        const mesh = new Physijs.Mesh(geom, material, 0);
        this.mesh = mesh;
    }

    getMesh() {
        return this.mesh;
    }
}