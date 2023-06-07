import { Board, Circle, CircleAttributes, Point } from 'jsxgraph';
import { strokeWidth } from './defaults';
import { fnXY } from './math/fnXY';

export interface Wheel {
    readonly center: Point;
    readonly radius: number;
}

export interface WheelAttributes {
    strokeWidth: number;
}

class WheelImp implements Wheel {
    readonly center: Point;
    readonly radius: number;
    readonly circle: Circle;
    $strokeWidth: number;
    constructor(board: Board, center: Point, radius: number, attributes?: WheelAttributes) {
        this.center = center;
        this.radius = radius;
        this.$strokeWidth = strokeWidth(attributes);
        const atts: CircleAttributes = {
            opacity: 1,
            fillColor: 'lightgray',
            hasInnerPoints: true,
            strokeWidth: this.$strokeWidth,
            strokeColor: "black",
            withLabel: false
        } /*as unknown as CircleAttributes*/
        this.circle = board.create("circle", [fnXY(center), radius], atts)
    }
}

export function wheel(board: Board, center: Point, radius: number, attributes?: WheelAttributes): Wheel {
    return new WheelImp(board, center, radius, attributes)
}