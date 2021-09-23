class Player {
    player = {
        x: undefined,
        y: undefined,
        z: undefined,
        camera: undefined,
        body: undefined
    };

    constructor() {
        this.setCamera();
        this.setBody();
        this.setBodyPosition(0, 3, 0);
    }

    setCamera() {
        var camera = new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.set(30, 30, 30);
        camera.lookAt(new THREE.Vector3(10, 0, 10));
        this.player.camera = camera;
    }

    getCamera() { return this.player.camera; }

    setBody() {
        var body_material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        var body = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 2, 1), body_material, 0);
        console.log(body);
        this.player.body = body;
    }
    getBody() { return this.player.body; }

    setBodyPosition(x, y, z) {
        this.player.body.position.x = x;
        this.player.body.position.y = y;
        this.player.body.position.z = z;
    }

    getBodyPosition() {return this.player.body.position; }


    getCamera() {

    }

    getPlayer() {
        if (this.player) return this.player;
    }
}