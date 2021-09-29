class Box {
    constructor(material) {
        this.material = material
    }

    generate(sizeX, sizeY, sizeZ, install) {
        const matrix = new Matrix(sizeX, sizeY, sizeZ);
        const array = matrix.getTranslateArray();

        array.forEach(element => {
            const location = element.location;
            
            console.log(location);
            install(location);
        });
    }
}