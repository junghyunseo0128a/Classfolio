class CreateScene {
    constructor() {  //initial
        const cv = document.getElementById("renderCanvas");  //canvas
        const eg = new BABYLON.Engine(cv, true);  //engine
        var s = new BABYLON.Scene(eg);  //scene

        window.addEventListener('resize', () => eg.resize());
        eg.runRenderLoop(() => this.s.render());

        this.cv = cv;
        this.eg = eg;
        this.s = s;
    }

    run() {
        BABYLON.SceneLoader.
            ImportMeshAsync(
                "",
                "https://assets.babylonjs.com/meshes/",
                "box.babylon"
            );

        const cmr =
            new BABYLON.ArcRotateCamera(
                "camera",
                -Math.PI / 2,
                Math.PI / 2.5,
                15,
                new BABYLON.Vector3(0, 0, 0)
            );  //camera
        cmr.attachControl(this.cv, true);
        const light =
            new BABYLON.HemisphericLight(
                "light",
                new BABYLON.Vector3(1, 1, 0)
            );

        this.cmr = cmr;
    }
}

var createScene = new CreateScene();
createScene.run();