class Space {
    constructor() {
        this.matrix = [];
    }

    putBlockData(x, y, z, block, success) {
        const index = [x, y, z];

        if(this.matrix[index]) {
            console.error('이미 해당 인덱스에 데이터가 존재합니다. -> ' + index);
            return;
        } else if(block instanceof Block) {
            console.error('잘못된 블럭데이터입니다. -> ' + block);
            return;
        }
        
        this.matrix[index] = block;
        success();
    }
}