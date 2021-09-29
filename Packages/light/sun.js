class Sun {
    constructor() {
        var light = new THREE.SpotLight(0xFFFFFF);
        light.position.set(20, 100, 50);
        this.sun = light;
    }

    get() {
        if(this.sun) return this.sun;
    }
}