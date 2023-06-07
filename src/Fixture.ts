import { Board, Point, PolygonAttributes, SegmentAttributes } from 'jsxgraph';
import { DEFAULT_POINT_SIZE, strokeWidth } from './defaults';
import { fnXY } from './math/fnXY';

export interface Fixture {
    readonly pivot: Point;
}

export interface FixtureAttributes {
    strokeWidth: number;
}

class FixtureImpl implements Fixture {
    readonly pivot: Point;
    $strokeWidth: number;
    /**
     * 
     * @param board 
     * @param pivot 
     */
    constructor(board: Board, pivot: Point, attributes?: FixtureAttributes) {
        this.pivot = pivot;
        this.$strokeWidth = strokeWidth(attributes);
        const a = 2 / 5
        const coords: [() => number, () => number][] = [
            [0, 0],
            [-a / 2, -a],
            [+a / 2, -a],
            [- 0.8 * a, - a],
            [+ 0.8 * a, - a],
            [0, - 1.9 * a] // label
        ].map((c) => { return [() => c[0] + pivot.X(), () => c[1] + pivot.Y()] })
        const p: Point[] = []
        for (const c of coords) { p.push(board.create('point', c, { fixed: false, visible: false })) }

        board.create('point', fnXY(pivot), { withLabel: false, fillColor: 'white', strokeColor: 'black', size: DEFAULT_POINT_SIZE, strokeWidth: this.$strokeWidth })

        board.create('polygon', [p[0], p[1], p[2]], {
            name: '',
            fillColor: "white",
            opacity: 1,
            layer: 7,
            borders: { strokeWidth: this.$strokeWidth, strokeColor: 'black', lineCap: 'round', layer: 8 },
            vertices: { fixed: true, size: 0 },
            fixed: true,
            frozen: true
        } as PolygonAttributes)

        board.create('segment', [p[3], p[4]], { strokeWidth: this.$strokeWidth, strokeColor: 'black', lineCap: 'round' } as SegmentAttributes)
        board.create("comb", [p[4], p[3]], {
            fixed: true,
            width: 0.1,      // Default is 0.4
            frequency: 0.1,  // Default is 0.2 (spacing)
            angle: 45 * Math.PI / 180,
            layer: 8,
            // This does not appear to have any effect...
            strokeWidth: this.$strokeWidth
        })

        /*
        // dependent objects
        // pivot 
        // label
        this.label = board.create('point', XY(p[5]), {
            name: toTEX(data[1]),
            ...centeredLabelStyle
        })
        */
    }
}

export function fixture(board: Board, pivot: Point, attributes?: FixtureAttributes): Fixture {
    return new FixtureImpl(board, pivot, attributes)
}