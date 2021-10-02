class CreateScene {
    constructor() {  //initial
        const c = document.getElementById("renderCanvas");  //canvas
        const e = new BABYLON.Engine(c, true);  //engine
        var s = new BABYLON.Scene(e);  //scene

        window.addEventListener('resize', () => e.resize());
        e.runRenderLoop(() => this.s.render());

        this.c = c;
        this.e = e;
        this.s = s;
    }

    run() {
        BABYLON.SceneLoader.
            ImportMeshAsync(
                "",
                "https://assets.babylonjs.com/meshes/",
                "box.babylon"
            );

        const camera =
            new BABYLON.ArcRotateCamera(
                "camera",
                -Math.PI / 2,
                Math.PI / 2.5,
                15,
                new BABYLON.Vector3(0, 0, 0)
            );
        camera.attachControl(this.c, true);
        const light =
            new BABYLON.HemisphericLight(
                "light",
                new BABYLON.Vector3(1, 1, 0)
            );
    }
}

var createScene = new CreateScene();
createScene.run();