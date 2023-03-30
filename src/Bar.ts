import { Board, Point, Segment } from 'jsxgraph';

export class Bar {
    readonly begin: Point;
    readonly end: Point;
    readonly segment: Segment;
    constructor(board: Board, begin: Point, end: Point) {
        this.begin = begin;
        this.end = end;
        this.segment = board.create("segment", [begin, end], { strokeColor: "black", strokeWidth: 4, withLabel: false })
    }
}