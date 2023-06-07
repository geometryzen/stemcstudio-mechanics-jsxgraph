import { Board, Point } from 'jsxgraph';

export interface Beam {
    readonly pointA: Point;
    readonly pointB: Point;
}

export interface BeamAttributes {
    radius: number;
}

class BeamImp {
    readonly pointA: Point;
    readonly pointB: Point;
    $radius: number;
    /**
     * 
     * @param board 
     * @param posA 
     * @param posB 
     * @param attributes
     */
    constructor(public readonly board: Board, posA: [x: number, y: number] | Point, posB: [x: number, y: number] | Point, attributes: BeamAttributes) {
        if (Array.isArray(posA)) {
            this.pointA = board.create("point", posA, { size: 0, withLabel: false });
        }
        else {
            this.pointA = board.create("point", [function () { return posA.X() }, function () { return posA.Y() }], { size: 0, withLabel: false });
        }
        if (Array.isArray(posB)) {
            this.pointB = board.create("point", posB, { size: 0, withLabel: false });
        }
        else {
            this.pointB = board.create("point", [function () { return posB.X() }, function () { return posB.Y() }], { size: 0, withLabel: false });
        }
        this.$radius = attributes.radius;
        /**
         * Uses similar triangles to compute the points on the corners of the beam.
         */
        const compute_x_y_dx_dy_c = () => {
            const x = this.pointA.X();
            const y = this.pointA.Y();
            const dx = this.pointB.X() - x;
            const dy = this.pointB.Y() - y;
            const l = Math.sqrt(dx ** 2 + dy ** 2);
            const c = this.$radius / l;
            return { x, y, dx, dy, c }
        }
        const cornerPoint1 = board.create("point",
            [
                () => {
                    const { x, dy, c } = compute_x_y_dx_dy_c()
                    return x + c * dy
                },
                () => {
                    const { y, dx, c } = compute_x_y_dx_dy_c()
                    return y - c * dx
                }
            ], { visible: false }
        )
        const cornerPoint2 = board.create("point",
            [
                () => {
                    const { x, dx, dy, c } = compute_x_y_dx_dy_c()
                    return x + dx + c * dy
                },
                () => {
                    const { y, dx, dy, c } = compute_x_y_dx_dy_c()
                    return y + dy - c * dx
                }
            ], { visible: false }
        )
        const cornerPoint3 = board.create("point",
            [
                () => {
                    const { x, dx, dy, c } = compute_x_y_dx_dy_c()
                    return x + dx - c * dy
                },
                () => {
                    const { y, dx, dy, c } = compute_x_y_dx_dy_c()
                    return y + dy + c * dx
                }
            ], { visible: false }
        )
        const cornerPoint4 = board.create("point",
            [
                () => {
                    const { x, dy, c } = compute_x_y_dx_dy_c()
                    return x - c * dy
                },
                () => {
                    const { y, dx, c } = compute_x_y_dx_dy_c()
                    return y + c * dx
                }
            ], { visible: false }
        )
        board.create('segment', [cornerPoint1, cornerPoint2], { strokeColor: 'black', strokeWidth: 2 });
        board.create('segment', [cornerPoint2, cornerPoint3], { strokeColor: 'black', strokeWidth: 2 });
        board.create('segment', [cornerPoint3, cornerPoint4], { strokeColor: 'black', strokeWidth: 2 });
        board.create('segment', [cornerPoint4, cornerPoint1], { strokeColor: 'black', strokeWidth: 2 });
        board.create('polygon', [cornerPoint1, cornerPoint2, cornerPoint3, cornerPoint4], {
            fillOpacity: 1,
            fillColor: 'lightgray'
        })
        /*
        const gradientAngle = () => {
            // SVG considers the gradient angle to run clockwise, so we must flip the sign.
            return (Math.PI / 2) - Math.atan2(this.pointB.Y() - this.pointA.Y(), this.pointB.X() - this.pointA.X())
        }
        */
        /*
        board.create('polygon', [point1, point2, point3, point4], {
            fillOpacity: 1,
            fillColor: 'lightgray',
            gradient: 'linear',
            gradientSecondColor: 'black',
            gradientAngle,
            // gradientAngle: function () { return a.Value() },
            // gradientStartOffset: function () { return b.Value() },
            // gradientEndOffset: function () { return c.Value() },
            hasInnerPoints: true
        })
        */
    }
}

export function createBeam(board: Board, posA: Point, posB: Point, attributes: BeamAttributes) {
    return new BeamImp(board, posA, posB, attributes);
}
