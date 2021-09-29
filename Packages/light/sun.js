class Sun {
    constructor(x, y, z) {
        var light = new THREE.SpotLight(0xFFFFFF);
        light.position.set(x, y, z);
        this.light = light;
        this.classType = 'light';
    }

    getLight() {
        return this.light;
    }
}