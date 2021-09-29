class World {
    constructor() {
        this.scene = new Scene();
        this.space = new Space();

    }

    getScene() {
        return this.scene.getScene();
    }

    addStaticBlock(block) {
        this.space.putBlockData(block, ()=> {
            this.scene.addObject(block.getMesh());
        });
    }

    addLight(light) {
        if(light.classType != 'light') {
            console.error('알맞은 클래스 타입이 아닙니다. -> ');
            console.log(light.classType)
            return;
        }

        this.scene.addObject(light.getLight());
    }
}