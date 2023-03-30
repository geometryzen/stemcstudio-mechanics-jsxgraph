// Copyright 2021-2022 David Geo Holmes.  All Rights Reserved.
import { Geometric2 } from 'davinci-newton'
import { Angle, AngleAttributes, Board, COORDS_BY_USER, GeometryElement, Point } from 'jsxgraph'

function setPosition<T extends GeometryElement>(element: T, position: { x: number; y: number }): T {
    return element.setPosition(COORDS_BY_USER, [position.x, position.y])
}

const x = new Geometric2()

export class JsxAngle {
    private readonly angle: Angle
    private readonly $center = Geometric2.vector(0, 0)
    private readonly $rotor = Geometric2.rotorFromDirections(Geometric2.e1, Geometric2.e2)
    public readonly radiusPoint: Point
    public readonly centerPoint: Point
    public readonly rotatePoint: Point
    private readonly $base = Geometric2.vector(1, 0)
    private $visible = true
    constructor(private readonly board: Board, attributes?: Partial<AngleAttributes>) {
        this.radiusPoint = board.create('point', [1, 0], { visible: false })
        this.centerPoint = board.create('point', [0, 0], { visible: false })
        this.rotatePoint = board.create('point', [0, 1], { visible: false })
        this.angle = board.create('angle', [this.radiusPoint, this.centerPoint, this.rotatePoint], attributes)
    }
    get base(): Geometric2 {
        return this.$base
    }
    set base(base: Geometric2) {
        this.$base.copyVector(base).direction()
    }
    get center(): Geometric2 {
        return this.$center
    }
    set center(pos: Geometric2) {
        this.$center.copyVector(pos)
    }
    get rotor(): Geometric2 {
        return this.$rotor
    }
    set rotor(value: Geometric2) {
        this.$rotor.copySpinor(value)
    }
    removeFromBoard(): void {
        this.board.suspendUpdate()
        try {
            this.board.removeObject(this.angle, false)
            this.board.removeObject(this.rotatePoint, false)
            this.board.removeObject(this.centerPoint, false)
            this.board.removeObject(this.radiusPoint, false)
        } finally {
            this.board.unsuspendUpdate()
        }
    }
    update(): void {
        if (this.$visible) {
            x.copyVector(this.$center)
            setPosition(this.centerPoint, x)
            x.copyVector(this.$base).addVector(this.$center)
            setPosition(this.radiusPoint, x)
            x.copyVector(this.$base).rotate(this.$rotor).addVector(this.$center)
            // angle.radiusPoint and angle.anglePoint (from Sector) are undefined.
            setPosition(this.rotatePoint, x)
        }
    }
    get visible() {
        return this.$visible
    }
    set visible(visible: boolean) {
        if (visible !== this.$visible) {
            this.angle.setAttribute({ visible })
            this.$visible = visible
        }
    }
}
