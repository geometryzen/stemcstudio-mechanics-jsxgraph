import { Board, Point, SegmentAttributes } from 'jsxgraph';
import { DEFAULT_STROKE_WIDTH } from './defaults';

export interface Rope {
    readonly centerA: Point;
    readonly centerB: Point;
}

export interface RopeAttributes {
    strokeWidth: number;
}

function strokeWidth(attributes: RopeAttributes | undefined) {
    if (attributes && typeof attributes.strokeWidth === 'number') {
        return attributes.strokeWidth;
    }
    else {
        return DEFAULT_STROKE_WIDTH;
    }
}

class RopeImp implements Rope {
    readonly centerA: Point;
    readonly centerB: Point;
    readonly tangentPoint1: Point;
    readonly tangentPoint2: Point;
    $strokeWidth: number;
    // TODO: Replace r1, r2 with control points?
    constructor(public readonly board: Board, public readonly C1: Point, r1: number, public readonly C2: Point, r2: number, attributes?: RopeAttributes) {
        this.$strokeWidth = strokeWidth(attributes);
        this.centerA = C1;
        this.centerB = C2;
        this.tangentPoint1 = board.create("point",
            [
                function () {
                    const c1x = C1.X()
                    return c1x - r1 * normalX(c1x, C1.Y(), r1, C2.X(), C2.Y(), r2)
                },
                function () {
                    const y = normalY(C1.X(), C1.Y(), r1, C2.X(), C2.Y(), r2)
                    return C1.Y() - r1 * y
                }
            ], { visible: false }
        )
        this.tangentPoint2 = board.create("point",
            [
                function () {
                    const x = normalX(C1.X(), C1.Y(), r1, C2.X(), C2.Y(), r2)
                    return C2.X() + r2 * x
                },
                function () {
                    const y = normalY(C1.X(), C1.Y(), r1, C2.X(), C2.Y(), r2)
                    return C2.Y() + r2 * y
                }
            ], { visible: false }
        )
        // board.create("circle", [C1, point1])
        // board.create("circle", [C2, point2])
        const atts: SegmentAttributes = { strokeWidth: 2, strokeColor: "black", lineCap: 'round' } as SegmentAttributes
        board.create("segment", [this.tangentPoint1, this.tangentPoint2], atts)
    }
}

export function rope(board: Board, centerA: Point, radiusA: number, centerB: Point, radiusB: number, attributes?: RopeAttributes): Rope {
    return new RopeImp(board, centerA, radiusA, centerB, radiusB, attributes);
}

/**
 * A geometric computation of the unique normal direction to the tangent line for two circles.
 * This geometric computation avoids the trigonometric functions that occur by going back and forth between
 * cartesian and polar coordinates.
 * The derivation considers only directions that occur naturally in the problem.
 * These are:
 * The direction of the tangent line.
 * The normal to the tangent line (normal we must calculate).
 * The direction of the line joining the centers (unitV = V / magnitude(V)).
 * The normal to the line joining the centers (unitS).
 * unitS is easily computed from unitV in cartesian coordinates.
 * We start with normal = alpha * unitV + beta * unitS.
 * We must have alpha * alpha + beta * beta = 1.
 * It appears that alpha and beta might be interpreted as sine and cosine.
 * Observe by similar triangles that there is an angle with tan(angle) = alpha/beta, where
 * sin(angle) = (r1 - r2) / magnitude(V)
 * Of course, having found the solution symbolically, it is implemented
 * using cartesian coordinates as the representation. The computation of the components of the normal has been
 * split into two functions based upon how it will be consumed by JSXGraph.
 * With sufficient simplication, the computation can require only a single sqrt() operation.
 * The final result provides another insight into the solution.
 * The radii are signed:
 * The radius is positive if the tangent point, seen from the center of the other circle,
 * has moved in a counter-clockwise direction from its own circle center.
 * @param c1x The x coordinate of circle 1 center.
 * @param c1y The y coordinate of circle 1 center.
 * @param r1 The signed radius of circle 1.
 * @param c2x The x coordinate of circle 2 center.
 * @param c2y The y coordinate of circle 2 center.
 * @param r2 The signed radius of circle 2.
 */
function normalX(c1x: number, c1y: number, r1: number, c2x: number, c2y: number, r2: number): number {
    const Vx = c2x - c1x
    const Vy = c2y - c1y
    const vv = Vx * Vx + Vy * Vy
    const s = r1 + r2
    const ss = s * s
    return -(Math.sqrt(vv - ss) * Vy + s * Vx) / vv
}

function normalY(c1x: number, c1y: number, r1: number, c2x: number, c2y: number, r2: number): number {
    const Vx = c2x - c1x
    const Vy = c2y - c1y
    const vv = Vx * Vx + Vy * Vy
    const s = r1 + r2
    const ss = s * s
    return (Math.sqrt(vv - ss) * Vx - s * Vy) / vv
}
