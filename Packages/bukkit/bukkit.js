class Bukkit {
    constructor() {
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        renderer.setClearColor(new THREE.Color(0x000000));
        document.getElementById('viewport').appendChild(renderer.domElement);

        this.renderer = renderer;
    }

    setRenderer(world, player) {
        this.world = world;
        this.player = player;
    }

    runRender = () => {
        if(this.renderFunc) this.renderFunc();

        requestAnimationFrame(this.runRender);
        this.renderer.render(this.world, this.player.camera);   
    }

    setRenderFunc(func) {
        this.renderFunc = func;
    }

}