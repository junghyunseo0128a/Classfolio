const block_type = {
    //static block
    'stone': {
        direction: 'east',  //east west south north
        size: 1,  //블럭 사이즈
        texture_path: 'Texture/block/stone.png',  //텍스쳐파일
        location: {
            x: 0,  //기본
            y: 0,  //기본
            z: 0,  //기본
        },
        mass: 0,  //질량 for 중력
        restitution: 0.5,  //상호작용, 원상회복 값
    }, 'double_stone_slab': {
        direction: 'east',  //east west south north
        size: 1,  //블럭 사이즈
        texture_path: 'Texture/block/smooth_stone.png',  //텍스쳐파일
        location: {
            x: 0,  //기본
            y: 0,  //기본
            z: 0,  //기본
        },
        mass: 0,  //질량 for 중력
        restitution: 0.5,  //상호작용, 원상회복 값
    }, 
    
    
    
    //dynamic block
    'bookshelf': {
        direction: 'east',  //east west south north
        size: {
            width: 2,
            height: 3,
            depth: 1,
        },  //블럭 사이즈
        texture_path: 'Texture/block/bookshelf.png',  //텍스쳐파일
        location: {
            x: 0,  //기본
            y: 0,  //기본
            z: 0,  //기본
        },
        mass: 1,  //질량 for 중력
        restitution: 0.5,  //상호작용, 원상회복 값
    }

}