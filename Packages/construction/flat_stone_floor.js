class flat_stone_floor {
    constructor() {

    }

    generate() {
        new Block(-1, 0, -1, 'stone');
        new Block(0, 0, -1, 'stone');
        new Block(1, 0, -1, 'stone');

        new Block(-1, 0, 0, 'stone');
        new Block(0, 0, 0, 'stone');
        new Block(1, 0, 0, 'stone');

        new Block(-1, 0, -2, 'stone');
        new Block(0, 0, -2, 'stone');
        new Block(1, 0, -2, 'stone');

    }
}

