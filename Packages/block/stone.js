class Stone extends StaticBlock {
    constructor(x, y, z) {
        const material = new THREE.MeshPhongMaterial({ color:0x808080});
        super(x, y, z, material);
    }
}