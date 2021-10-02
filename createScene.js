class CreateScene {
    constructor() {  //initial
        const cv = document.getElementById("renderCanvas");  //canvas
        const eg = new BABYLON.Engine(cv, true);  //engine
        var s = new BABYLON.Scene(eg);  //scene

        window.addEventListener('resize', () => eg.resize());
        eg.runRenderLoop(() => this.s.render());
        
        var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
        var physicsPlugin = new BABYLON.CannonJSPlugin();
        s.enablePhysics(gravityVector, physicsPlugin);

        this.cv = cv;
        this.eg = eg;
        this.s = s;
    }

    run() {
        /*
        BABYLON.SceneLoader.
            ImportMeshAsync(
                "",
                "https://assets.babylonjs.com/meshes/",
                "box.babylon"
            );
            */

        const camera =
            new BABYLON.ArcRotateCamera(
                "camera",
                -Math.PI / 2,
                Math.PI / 2.5,
                15,
                new BABYLON.Vector3(0, 0, 0)
            );  //camera
        camera.attachControl(this.cv, true);
        camera.setTarget(BABYLON.Vector3.Zero());
        const light =
            new BABYLON.HemisphericLight(
                "light",
                new BABYLON.Vector3(1, 1, 0)
            );

        this.cmr = camera;
    }
}

var createScene = new CreateScene();
createScene.run();

new flat_stone_floor().generate();

new Block(0, 3, 0, 'bookshelf');