export const DEFAULT_POINT_SIZE = 2;
export const DEFAULT_POINT_FILL_COLOR = "white";
export const DEFAULT_STROKE_COLOR = "black";
export const DEFAULT_STROKE_WIDTH = 2;

export function strokeWidth(attributes: { strokeWidth?: number } | undefined) {
    if (attributes && typeof attributes.strokeWidth === 'number') {
        return attributes.strokeWidth;
    }
    else {
        return DEFAULT_STROKE_WIDTH;
    }
}
