import { Board, Point } from 'jsxgraph';

export class Bar {
    constructor(board: Board, begin: Point, end: Point) {
        board.create("segment", [begin, end], { strokeColor: "black", strokeWidth: 4, withLabel: false })
    }
}