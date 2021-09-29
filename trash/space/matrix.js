class Matrix {
    //matrix 배열 접근하는데 location 사용 금지.
    constructor(sizeX, sizeY, sizeZ) {
        if(sizeX < 0 || sizeY < 0 || sizeZ < 0) return;

        var matrix = new Array(sizeX);
        for(var x_ = 0; x_ < sizeX; x_++) {
            matrix[x_] = new Array(sizeY);
            for(var y_ = 0; y_ < sizeY; y_++) {
                matrix[x_][y_] = new Array(sizeZ);
                for(var z_ = 0; z_ < sizeZ; z_++) {
                    matrix[x_][y_][z_] = new Object();
                }
            }
        }

        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.sizeZ = sizeZ;
        this.matrix = matrix;
    }
    checkIndexsRange(x, y, z) {  //parameter -> by index
        if(x > this.sizeX || y > this.sizeY || z > this.sizeZ) {
           console.error('해당 matrix 범주를 넘어갔습니다.'); 
           return false;
        }

        return true;
    }
    putData(data, x, y, z, success) {  //parameter -> by index
        if(!this.checkIndexsRange(x, y, z)) return;
        this.matrix[x][y][z] = data;
        
        success();
    }

    pushSameDataAtAll(data) {
        for(var x_ = 0; x_ < this.sizeX; x_++) {
            for(var y_ = 0; y_ < this.sizeY; y_++) {
                for(var z_ = 0; z_ < this.sizeZ; z_++) {
                    matrix[x_][y_][z_].push
                }
            }
        }
    }

    getData(x, y, z) {  //parameter -> by index
        if(!this.checkIndexsRange(x, y, z)) return;

        return this.matrix[x, y, z];
    }

    getTranslateArray() {
        var array = [];
        
        var size = this.sizeX * this.sizeY * this.sizeZ;
        array.size = size;

        for(var x = 0; x < this.sizeX; x++) {
            for(var y = 0; y < this.sizeY; y++) {
                for(var z = 0; z < this.sizeZ; z++) {
                    array[x * this.sizeY * this.sizeZ +  y * this.sizeZ + z] = this.matrix[x][y][z];
                }
            }
        }
        
        return array;
    }
}