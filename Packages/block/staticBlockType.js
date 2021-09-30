staticBlockType = {
    0: {
        name: 'air',  //블럭 이름
        id: 0,  //블럭 id 값
        mesh: new Physijs.BoxMesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshPhongMaterial({
                color: 0x808080,  //색 hex값
                opacity: 0,  //0:투명 ~ 1:붙투명
                transparent: true, //투명 유무
            }),
            0)
    }, 1: {
        name: 'stone',  //블럭 이름
        id: 0,  //블럭 id 값
        direction: 'east',  //east west south north
        size: 1,  //블럭 사이즈
        texture: {
            top: '../Texture/1.15.2/blocks/stone.png',
            bottom: '../Texture/1.15.2/blocks/stone.png',
            front: '../Texture/1.15.2/blocks/stone.png',
            back: '../Texture/1.15.2/blocks/stone.png',
            left: '../Texture/1.15.2/blocks/stone.png',
            right: '../Texture/1.15.2/blocks/stone.png',
            default: '../Texture/1.15.2/blocks/stone.png',
        },
        location: {
            x: 0,  //기본
            y: 0,  //기본
            z: 0,  //기본
        }
    }, 2: {

    }, 43: {
        name: 'double_stone_slab',  //블럭이름
        id: 43,  //블럭 id 값
        direction: 'east',  //east west south north
        size: 1,  //블럭 사이즈
        texture: {
            top: '../Texture/1.15.2/blocks/stoneslab_top.png',
            bottom: '../Texture/1.15.2/blocks/stoneslab_top.png',
            front: '../Texture/1.15.2/blocks/stoneslab_side.png',
            back: '../Texture/1.15.2/blocks/stoneslab_side.png',
            left: '../Texture/1.15.2/blocks/stoneslab_side.png',
            right: '../Texture/1.15.2/blocks/stoneslab_side.png',
            default: '../Texture/1.15.2/blocks/stoneslab_top.png',
        },
        location: {
            x: 0,  //기본
            y: 0,  //기본
            z: 0,  //기본
        }
    }

}