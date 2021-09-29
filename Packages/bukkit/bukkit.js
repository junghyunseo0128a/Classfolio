class Bukkit {
    constructor() {
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        renderer.setClearColor(new THREE.Color(0x000000));
        document.getElementById('viewport').appendChild(renderer.domElement);

        this.renderer = renderer;
    }

    setRenderer(scene, camera) {
        this.scene = scene;
        this.camera = camera;
    }

    runRender = () => {
        requestAnimationFrame(this.runRender);
        this.renderer.render(this.scene, this.camera);   
    }

    setRenderFunc(func) {
        this.renderFunc = func;
    }

}