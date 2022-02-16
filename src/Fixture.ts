import { Board, Point, PolygonAttributes, SegmentAttributes } from 'jsxgraph';
import { fnXY } from './math/fnXY';
import { XY } from './math/XY';

export const pxunit = 1 / 40

export class Fixture {
    /**
     * 
     * @param board 
     * @param pivot 
     * @param attitude 
     */
    constructor(board: Board, pivot: Point, attitude: number) {
        // The problem with this implementation is that it is not dynamic.
        // I think I want all widgets to have control points.
        const a = 2 / 5
        const coords = [
            [0, 0],
            [-a / 2, -a],
            [+a / 2, -a],
            [- 0.8 * a, - a],
            [+ 0.8 * a, - a],
            [0, - 1.9 * a] // label
        ]
        const p = []
        for (const c of coords) { p.push(board.create('point', c, { visible: false })) }
        const t1 = board.create('transform', [attitude], { type: 'rotate' })
        t1.applyOnce(p)
        const t2 = board.create('transform', XY(pivot), { type: 'translate' })
        t2.applyOnce(p)

        board.create('point', fnXY(pivot), { withLabel: false, fillColor: 'white', strokeColor: 'black', size: 2, strokeWidth: 1.5 })

        // const lineAtts: LineAttributes = {strokeWidth:2,strokeColor:"black",layer:8}
        // const atts: PolygonAttributes = {name:'',fillColor:"white",opacity:1,layer:7,borders:lineAtts,vertices}
        board.create('polygon', [p[0], p[1], p[2]], {
            name: '',
            fillColor: "white", opacity: 1, layer: 7,
            borders: { strokeWidth: 2, strokeColor: 'black', lineCap: 'round', layer: 8 }, vertices: { fixed: true, size: 0 }
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