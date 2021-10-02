class Block {
    constructor(x, y, z, block_name) {
        this.type = block_type[block_name];

        if (!this.type) {
            console.error('블럭형식이 지정되지 않았습니다. -> ');
            console.log(block_name);
            return;
        }

        this.createMesh();
        this.setLocation(x, y, z);
        this.setPhysics();
        this.classType = 'block';
    }

    setLocation(x, y, z) {
        this.type.location.x = x;
        this.type.location.y = y;
        this.type.location.z = z;
        this.box.position.set(x, y, z);
    }

    getFaceUV() {
        return [
            new BABYLON.Vector4(2 / 4, 1 / 3, 3 / 4, 2 / 3),  //back
            new BABYLON.Vector4(0, 1 / 3, 1 / 4, 2 / 3),  //front
            new BABYLON.Vector4(1 / 4, 1 / 3, 2 / 4, 2 / 3),  //right
            new BABYLON.Vector4(3 / 4, 1 / 3, 4 / 4, 2 / 3),  //left
            new BABYLON.Vector4(1 / 4, 0, 2 / 4, 1 / 3),  //top
            new BABYLON.Vector4(1 / 4, 3 / 3, 1 / 4, 3 / 3),  //bottom
        ];
    }

    createMesh() {
        const box = BABYLON.MeshBuilder.CreateBox(
            'box',
            {
                width: this.type.size.width,
                height: this.type.size.height,
                depth: this.type.size.depth,
                faceUV: this.getFaceUV(),
                wrap: true,
            }
        );

        const box_material = new BABYLON.StandardMaterial('box_material');
        box_material.diffuseTexture = new BABYLON.Texture(this.type.texture_path);

        box.material = box_material;
        this.box = box;
    }

    setPhysics() {
        this.box.physicsImpostor = new BABYLON.PhysicsImpostor(
            this.box, BABYLON.PhysicsImpostor.SphereImpostor, {
            mass: this.type.mass,
            restitution: this.type.restitution
        }, this.s);
    }

    getBlockBox() {
        return this.box;
    }
}