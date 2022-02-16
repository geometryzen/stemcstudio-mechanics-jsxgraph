import { Board, CircleAttributes, Point } from 'jsxgraph';
import { fnXY } from './math/fnXY';

export class Wheel {
    constructor(board: Board, center: Point, radius: number) {
        const atts: CircleAttributes = {
            opacity: true,
            fillcolor: 'lightgray',
            hasInnerPoints: true,
            strokeWidth: 2,
            strokeColor: "black"
        } as unknown as CircleAttributes
        board.create("circle", [fnXY(center), radius], atts)
    }
}