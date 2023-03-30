import { Board, Circle, CircleAttributes, Point } from 'jsxgraph';
import { fnXY } from './math/fnXY';

export class Wheel {
    readonly circle: Circle;
    constructor(board: Board, center: Point, radius: number) {
        const atts: CircleAttributes = {
            opacity: 1,
            fillColor: 'lightgray',
            hasInnerPoints: true,
            strokeWidth: 2,
            strokeColor: "black",
            withLabel: false
        } /*as unknown as CircleAttributes*/
        this.circle = board.create("circle", [fnXY(center), radius], atts)
    }
}