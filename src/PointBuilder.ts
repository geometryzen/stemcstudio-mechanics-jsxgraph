import { Board, Point, PointAttributes } from "jsxgraph";
import { DEFAULT_POINT_FILL_COLOR, DEFAULT_POINT_SIZE, DEFAULT_STROKE_COLOR, DEFAULT_STROKE_WIDTH } from "./defaults";

export class PointBuilder {
    readonly attributes: PointAttributes = {}
    constructor() {
        this.attributes.fillColor = DEFAULT_POINT_FILL_COLOR
        this.attributes.strokeColor = DEFAULT_STROKE_COLOR
        this.attributes.size = DEFAULT_POINT_SIZE;
        this.attributes.strokeWidth = DEFAULT_STROKE_WIDTH
        this.attributes.fixed = false
        this.attributes.highlight = false
        this.attributes.showInfobox = false
        this.attributes.visible = true
        this.attributes.withLabel = false
    }
    setFillColor(fillColor: string): this {
        this.attributes.fillColor = fillColor
        return this
    }
    setFixed(fixed: boolean): this {
        this.attributes.fixed = fixed
        return this
    }
    setStrokeColor(strokeColor: string): this {
        this.attributes.strokeColor = strokeColor
        return this
    }
    setStrokeWidth(strokeWidth: number): this {
        this.attributes.strokeWidth = strokeWidth
        return this
    }
    setVisible(visible: boolean): this {
        this.attributes.visible = visible
        return this
    }
    setWithLabel(withLabel: boolean): this {
        this.attributes.withLabel = withLabel
        return this
    }
    build(board: Board, coords: [x: number | (() => number), y: number | (() => number)]): Point {
        return board.create("point", coords, this.attributes)
    }
}
