import { Board, Point, Segment } from 'jsxgraph';

export interface Bar {
    readonly begin: Point;
    readonly end: Point;
    readonly segment: Segment;
}

export interface BarAttributes {
    strokeWidth?: number;
}

function strokeWidth(attributes: BarAttributes | undefined) {
    if (attributes && typeof attributes.strokeWidth === 'number') {
        return attributes.strokeWidth;
    }
    else {
        return 4;
    }
}

class BarImp implements Bar {
    readonly begin: Point;
    readonly end: Point;
    readonly segment: Segment;
    $strokeWidth: number;
    constructor(board: Board, begin: Point, end: Point, attributes?: BarAttributes) {
        this.begin = begin;
        this.end = end;
        this.$strokeWidth = strokeWidth(attributes);
        this.segment = board.create("segment", [begin, end], { strokeColor: "black", strokeWidth: this.$strokeWidth, withLabel: false })
    }
}

export function createBar(board: Board, begin: Point, end: Point, attributes?: BarAttributes): Bar {
    return new BarImp(board, begin, end, attributes);
}