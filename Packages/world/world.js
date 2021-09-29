class World {
    constructor() {
        this.scene = new Scene();
        this.space = new Space();

    }

    getScene() {
        return this.scene.getObject();
    }

    addStaticBlock(location, block) {
        putData(location, block, ()=> {
            this.scene.add(block.getMesh());
        });
    }
}