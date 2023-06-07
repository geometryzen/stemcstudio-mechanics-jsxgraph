import { Board } from 'jsxgraph';
import { minus } from './math/minus';
import { polar } from './math/polar';

export interface DistributedLoad {
    readonly phi: number;
}

class DistributedLoadImpl implements DistributedLoad {
    readonly phi: number;
    constructor(board: Board, begin: [x: number, y: number], end: [x: number, y: number], beginValue: number, endValue: number, phi: number) {
        this.phi = phi;
        const a = 2 / 5
        const [width, alpha] = polar(minus(end, begin))
        const s = [Math.sin(alpha + phi), Math.sin(alpha)]
        const c = [Math.cos(alpha + phi), Math.cos(alpha)]
        const n = beginValue
        const m = endValue - beginValue

        const p: [number, number][] = []
        for (let i = 0; i <= (width / a); i++) {
            p.push(
                [0, m * ((i) * width / Math.floor(width / a)) + n])
            p.push([0, 0])
            for (let j = 0; j <= 1; j++) {
                p[2 * i + j] = [
                    p[2 * i + j][0] * c[j] - p[2 * i + j][1] * s[j] + begin[0] + c[1] * (i * width / Math.floor(width / a)),
                    p[2 * i + j][0] * s[j] + p[2 * i + j][1] * c[j] + begin[1] + s[1] * (i * width / Math.floor(width / a))]
            }
            board.create('arrow', [p[2 * i], p[2 * i + 1]],
                { lastArrow: { size: 5 }, strokewidth: 1, fixed: true, frozen: true } as JXG.ArrowAttributes)
        }
        board.create('polygon',
            [p[0], p[1], p[p.length - 1], p[p.length - 2]],
            {
                fillColor: '#0000ff44', strokeColor: 'blue', fixed: true, hasInnerPoints: true,
                vertices: { visible: false }, borders: { fixed: true }
            })
        /*
    this.label.push(board.create('point', this.p[0],
        {
            name: toTEX(this.name1), size: 0, fixed: true,
            label: { autoPosition: true, offset: [-10, 10], color: 'blue' }
        }))
    this.label.push(board.create('point', this.p[this.p.length - 2],
        {
            name: toTEX(this.name2), size: 0, fixed: true,
            label: { autoPosition: true, offset: [5, 10], color: 'blue' }
        }))
        */
    }
}

export function distributedLoad(board: Board, begin: [x: number, y: number], end: [x: number, y: number], beginValue: number, endValue: number, phi: number) {
    return new DistributedLoadImpl(board, begin, end, beginValue, endValue, phi)
}