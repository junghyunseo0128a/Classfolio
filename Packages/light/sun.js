class Sun {
    constructor() {
        var light = new THREE.SpotLight(0xFFFFFF);
        light.position.set(20, 100, 50);
        this.sun = light;
    }

    getSun() {
        if(this.sun) return this.sun;
    }
}