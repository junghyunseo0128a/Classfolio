class Space {
    constructor() {
        this.matrix = [];
    }

    putBlockData(block, success) {
        const blockLocation = block.type.location;
        const index = [blockLocation.x, blockLocation.y, blockLocation.z];

        if(this.matrix[index]) {
            console.error('이미 해당 인덱스에 데이터가 존재합니다. -> ');
            console.log(index);
            return;
        } else if(block.classType != 'block') {
            console.error('잘못된 블럭데이터입니다. -> ');
            console.log(block.classType);
            return;
        }
        
        this.matrix[index] = block;
        success();
    }
}