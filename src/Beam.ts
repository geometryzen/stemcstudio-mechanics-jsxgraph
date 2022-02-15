import { Board, Point } from 'jsxgraph';

export class Beam {
    readonly point: Point;
    constructor(public readonly board: Board) {
        this.point = board.create("point", [0, 0]);
    }
}
