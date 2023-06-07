import { Board, Point, PolygonAttributes, SegmentAttributes } from 'jsxgraph';
import { fnXY } from './math/fnXY';

export const pxunit = 1 / 40

export interface Fixture {
    readonly pivot: Point;
}

class FixtureImpl implements Fixture {
    readonly pivot: Point;
    /**
     * 
     * @param board 
     * @param pivot 
     */
    constructor(board: Board, pivot: Point) {
        this.pivot = pivot;
        // The problem with this implementation is that it is not dynamic.
        // I think I want all widgets to have control points.
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

        board.create('point', fnXY(pivot), { withLabel: false, fillColor: 'white', strokeColor: 'black', size: 2, strokeWidth: 1.5 })

        board.create('polygon', [p[0], p[1], p[2]], {
            name: '',
            fillColor: "white", opacity: 1, layer: 7,
            borders: { strokeWidth: 2, strokeColor: 'black', lineCap: 'round', layer: 8 },
            vertices: { fixed: true, size: 0 },
            fixed: true,
            frozen: true
        } as PolygonAttributes)

        board.create('segment', [p[3], p[4]], { strokeWidth: 2, strokeColor: 'black', lineCap: 'round' } as SegmentAttributes)
        board.create("comb", [p[4], p[3]], { fixed: true, width: 4 * pxunit, frequency: 4 * pxunit, angle: 45 * Math.PI / 180, layer: 8 })

        /*
        // dependent objects
        // pivot 
        // label
        this.label = board.create('point', XY(p[5]), {
            name: toTEX(data[1]),
            ...centeredLabelStyle
        })
        // body
        this.t = board.create('polygon', [p[0], p[1], p[2]], {
            name: '', fillColor: "white", opacity: 1, layer: 7,
            borders: { ...normalStyle, layer: 8 }, vertices: { fixed: true, size: 0 }
        })
        // baseline with hatch
        this.bl = board.create('segment', [p[3], p[4]], { name: '', ...normalStyle })
        this.c = board.create("comb", [p[4], p[3]], hatchStyle(pxunit))
        */
    }
}

export function fixture(board: Board, pivot: Point): Fixture {
    return new FixtureImpl(board, pivot)
}