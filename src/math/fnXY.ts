export function fnXY(p: JXG.Point): [x: () => number, y: () => number] {
    return [
        function () { return p.X() },
        function () { return p.Y() }
    ]
}
