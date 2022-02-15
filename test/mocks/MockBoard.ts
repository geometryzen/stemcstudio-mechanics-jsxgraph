import { Board, BoardAttributes } from 'jsxgraph';
import { MockPoint } from './MockPoint';
import { MockSegment } from './MockSegment';

export class MockBoard implements Board {
    addEvent(event: string, handler: (evt: PointerEvent) => void, context?: {}): {} {
        throw new Error('Method not implemented.');
    }
    animationObjects: unknown;
    attr: BoardAttributes;
    BOARD_MODE_DRAG: number;
    BOARD_MODE_MOVE_ORIGIN: number;
    BOARD_MODE_NONE: number;
    BOARD_MODE_ZOOM: number;
    BOARD_QUALITY_HIGH: number;
    BOARD_QUALITY_LOW: number;
    canvasHeight: number;
    canvasWidth: number;
    container: string;
    containerObj: HTMLDivElement;
    cPos: unknown[];
    currentCBDef: string;
    defaultAxes: Partial<JXG.DefaultAxes>;
    dependentBoards: Board[];
    dimension: number;
    downObjects: unknown;
    drag_dx: number;
    drag_dy: number;
    drag_position: [number, number];
    elementsByName: { [name: string]: JXG.GeometryElement; };
    geonextCompatibilityMode: boolean;
    grids: unknown[];
    groups: { [id: string]: JXG.Group; };
    hasGrid?: boolean;
    hasMouseHandlers: boolean;
    hasMouseUp: boolean;
    hasPointerHandlers: boolean;
    hasPointerUp: boolean;
    hasTouchEnd: boolean;
    hasTouchHandlers: boolean;
    highlightedObjects: { [name: string]: unknown; };
    infobox: JXG.Text;
    inUpdate: boolean;
    isSelecting: boolean;
    isSuspendedRedraw: boolean;
    keepaspectratio: boolean;
    mode: number;
    mouse: unknown;
    needsFullUpdate: boolean;
    numObjects: number;
    objects: { [id: string]: unknown; };
    objectsList: unknown[];
    off: Function;
    origin: { usrCoords: [number, number, number]; scrCoords: [number, number, number]; };
    positionAccessLast: number;
    reducedUpdate: boolean;
    removeEvent: Function;
    jc: JXG.JessieCode;
    options: JXG.JXGSettings;
    renderer: { dumpToCanvas(elementId: string): void; dumpToDataURI(): string; };
    selectingBox: [[number, number], [number, number]];
    selectingMode: boolean;
    touches: unknown[];
    touchMoveLast: number;
    takeSizeFromFile: boolean;
    unitX: number;
    unitY: number;
    updateQuality: number;
    zoomX: number;
    zoomY: number;
    addAnimation(element: JXG.GeometryElement): Board {
        throw new Error('Method not implemented.');
    }
    addChild(board: Board): Board {
        throw new Error('Method not implemented.');
    }
    addConditions(str: string): unknown {
        throw new Error('Method not implemented.');
    }
    addEventHandlers(): unknown {
        throw new Error('Method not implemented.');
    }
    addFullscreenEventHandlers(): unknown {
        throw new Error('Method not implemented.');
    }
    addGrid(): unknown {
        throw new Error('Method not implemented.');
    }
    addHook(hook: () => void, m?: 'mouseup' | 'mousedown' | 'update', context?: unknown): number {
        throw new Error('Method not implemented.');
    }
    addMouseEventHandlers(): unknown {
        throw new Error('Method not implemented.');
    }
    addPointerEventHandlers(): unknown {
        throw new Error('Method not implemented.');
    }
    addTouchEventHandlers(appleGestures: boolean): unknown {
        throw new Error('Method not implemented.');
    }
    animate(): this {
        throw new Error('Method not implemented.');
    }
    applyZoom(): this {
        throw new Error('Method not implemented.');
    }
    calculateSnapSizes(): this {
        throw new Error('Method not implemented.');
    }
    clearTraces(): this {
        throw new Error('Method not implemented.');
    }
    clickDownArrow(): this {
        throw new Error('Method not implemented.');
    }
    clickLeftArrow(): this {
        throw new Error('Method not implemented.');
    }
    clickRightArrow(): this {
        throw new Error('Method not implemented.');
    }
    clickUpArrow(): this {
        throw new Error('Method not implemented.');
    }
    create(elementType: 'angle', parents: unknown[], attributes?: JXG.AngleAttributes): JXG.Angle;
    create(elementType: 'arc', parents: unknown[], attributes?: JXG.ArcAttributes): JXG.Arc;
    create(elementType: 'arrow', parents: unknown[], attributes?: JXG.ArrowAttributes): JXG.Arrow;
    create(elementType: 'axis', parents: unknown[], attributes?: JXG.AxisAttributes): JXG.Axis;
    create(elementType: 'bisector', parents: unknown[], attributes?: JXG.BisectorAttributes): JXG.Bisector;
    create(elementType: 'button', parents: unknown[], attributes?: JXG.ButtonAttributes): JXG.Button;
    create(elementType: 'cardinalspline', parents: unknown[], attributes?: JXG.CardinalsplineAttributes): JXG.Cardinalspline;
    create(elementType: 'chart', parents: unknown[], attributes?: JXG.ChartAttributes): JXG.Chart;
    create(elementType: 'checkbox', parents: unknown[], attributes?: JXG.CheckboxAttributes): JXG.Checkbox;
    create(elementType: 'circle', parents: unknown[], attributes?: JXG.CircleAttributes): JXG.Circle;
    create(elementType: 'circumcircle', parents: unknown[], attributes?: JXG.CircumcircleAttributes): JXG.Circumcircle;
    create(elementType: 'circumcirclearc', parents: unknown[], attributes?: JXG.CircumcircleArcAttributes): JXG.CircumcircleArc;
    create(elementType: 'circumcirclesector', parents: unknown[], attributes?: JXG.CircumcircleSectorAttributes): JXG.CircumcircleSector;
    create(elementType: 'comb', parents: unknown[], attributes?: JXG.CombAttributes): JXG.Comb;
    create(elementType: 'conic', parents: unknown[], attributes?: JXG.ConicAttributes): JXG.Conic;
    create(elementType: 'curve', parents: unknown[], attributes?: JXG.CurveAttributes): JXG.Curve;
    create(elementType: 'curvedifference', parents: unknown[], attributes?: JXG.CurveAttributes): JXG.Curve;
    create(elementType: 'curveintersection', parents: unknown[], attributes?: JXG.CurveAttributes): JXG.Curve;
    create(elementType: 'curveunion', parents: unknown[], attributes?: JXG.CurveAttributes): JXG.Curve;
    create(elementType: 'ellipse', parents: unknown[], attributes?: JXG.EllipseAttributes): JXG.Ellipse;
    create(elementType: 'functiongraph', parents: unknown[] | ((x: number) => number), attributes?: JXG.FunctiongraphAttributes): JXG.Functiongraph;
    create(elementType: 'glider', parents: unknown[], attributes?: JXG.GliderAttributes): JXG.Glider;
    create(elementType: 'grid', parents: unknown[], attributes?: JXG.GridAttributes): JXG.Grid;
    create(elementType: 'group', parents: unknown[], attributes?: JXG.GroupAttributes): JXG.Group;
    create(elementType: 'hatch', parents: unknown[], attributes?: JXG.HatchAttributes): JXG.Hatch;
    create(elementType: 'hyperbola', parents: unknown[], attributes?: {}): JXG.Hyperbola;
    create(elementType: 'image', parents: unknown[], attributes?: JXG.ImageAttributes): JXG.Image;
    create(elementType: 'input', parents: unknown[], attributes?: JXG.InputAttributes): JXG.Input;
    create(elementType: 'integral', parents: unknown[], attributes?: JXG.IntegralAttributes): JXG.Integral;
    create(elementType: 'intersection', parents: unknown[], attributes?: JXG.IntersectionAttributes): JXG.Intersection;
    create(elementType: 'line', parents: unknown[], attributes?: JXG.LineAttributes): JXG.Line;
    create(elementType: 'metapostspline', parents: unknown[], attributes?: JXG.MetapostsplineAttributes): JXG.Metapostspline;
    create(elementType: 'midpoint', parents: unknown[], attributes?: JXG.MidpointAttributes): JXG.Midpoint;
    create(elementType: 'minorArc', parents: unknown[], attributes?: JXG.MinorArcAttributes): JXG.MinorArc;
    create(elementType: 'mirrorelement', parents: unknown[], attributes?: JXG.MirrorelementAttributes): JXG.Mirrorelement;
    create(elementType: 'normal', parents: unknown[], attributes?: JXG.NormalAttributes): JXG.Normal;
    create(elementType: 'perpendicular', parents: unknown[], attributes?: JXG.PerpendicularAttributes): JXG.Perpendicular;
    create(elementType: 'plot', parents: unknown[], attributes?: JXG.CurveAttributes): JXG.Curve;
    create(elementType: 'point', parents: unknown[], attributes?: JXG.PointAttributes): JXG.Point;
    create(elementType: 'polygon', parents: unknown[], attributes?: JXG.PolygonAttributes): JXG.Polygon;
    create(elementType: 'polygonalchain', parents: unknown[], attributes?: JXG.PolygonAttributes): JXG.Polygon;
    create(elementType: 'regularpolygon', parents: unknown[], attributes?: JXG.PolygonAttributes): JXG.Polygon;
    create(elementType: 'reflection', parents: unknown[], attributes?: JXG.ReflectionAttributes): JXG.Reflection;
    create(elementType: 'riemannsum', parents: unknown[], attributes?: JXG.CurveAttributes): JXG.Riemannsum;
    create(elementType: 'sector', parents: unknown[], attributes?: JXG.SectorAttributes): JXG.Sector;
    create(elementType: 'semicircle', parents: unknown[], attributes?: JXG.SemicircleAttributes): JXG.Semicircle;
    create(elementType: 'segment', parents: unknown[], attributes?: JXG.SegmentAttributes): JXG.Segment;
    create(elementType: 'slider', parents: unknown[], attributes?: JXG.SliderAttributes): JXG.Slider;
    create(elementType: 'slopetriangle', parents: unknown[], attributes?: JXG.SlopetriangleAttributes): JXG.Slopetriangle;
    create(elementType: 'stepfunction', parents: unknown[], attributes?: JXG.StepfunctionAttributes): JXG.Stepfunction;
    create(elementType: 'tangent', parents: unknown[], attributes?: JXG.TangentAttributes): JXG.Tangent;
    create(elementType: 'tapemeasure', parents?: unknown[], attributes?: JXG.TapemeasureAttributes): JXG.Tapemeasure;
    create(elementType: 'text', parents: unknown[], attributes?: JXG.TextAttributes): JXG.Text;
    create(elementType: 'ticks', parents: unknown[], attributes?: JXG.TicksAttributes): JXG.Ticks;
    create(elementType: 'tracecurve', parents: unknown[], attributes?: JXG.TracecurveAttributes): JXG.Tracecurve;
    create(elementType: 'transform', parents: unknown[], attributes?: JXG.TransformationAttributes): JXG.Transformation;
    create(elementType: 'turtle', parents?: unknown[], attributes?: JXG.TurtleAttributes): JXG.Turtle;
    create(elementType: string, parents?: unknown[], attributes?: unknown): unknown {
        switch (elementType) {
            case 'point': {
                return new MockPoint(this, elementType, parents);
            }
            case 'segment': {
                return new MockSegment(this, elementType, parents);
            }
            default: {
                throw new Error(`create(${JSON.stringify(elementType)}) method is not implemented.`);
            }
        }
    }
    createRoulette(c1: JXG.Curve, c2: JXG.Curve, start_c1: number, stepsize: number, direction: number, time: number, pointlist: JXG.Point[]): unknown {
        throw new Error('Method not implemented.');
    }
    dehighlightAll(): this {
        throw new Error('Method not implemented.');
    }
    displayInfobox(value: boolean): this {
        throw new Error('Method not implemented.');
    }
    emulateColorBlindness(deficiency: 'protanopia' | 'deuteranopia' | 'tritanopia'): this {
        throw new Error('Method not implemented.');
    }
    finalizeAdding(obj: unknown): unknown {
        throw new Error('Method not implemented.');
    }
    fullscreenListener(evt: unknown): unknown {
        throw new Error('Method not implemented.');
    }
    fullUpdate(): this {
        throw new Error('Method not implemented.');
    }
    generateId(): string {
        throw new Error('Method not implemented.');
    }
    generateName(object: unknown): string {
        throw new Error('Method not implemented.');
    }
    gestureChangeListener(evt: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    gestureStartListener(evt: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    getAllObjectsUnderMouse(evt: unknown): unknown[] {
        throw new Error('Method not implemented.');
    }
    getAllUnderMouse(evt: unknown): unknown[] {
        throw new Error('Method not implemented.');
    }
    getBoundingBox(): [x1: number, y1: number, x2: number, y2: number] {
        throw new Error('Method not implemented.');
    }
    getCoordsTopLeftCorner(): [number, number] {
        throw new Error('Method not implemented.');
    }
    getMousePosition(e: unknown, i?: number): [number, number] {
        throw new Error('Method not implemented.');
    }
    getScrCoordsOfMouse(x: number, y: number): [number, number] {
        throw new Error('Method not implemented.');
    }
    getUseCoordsOfMouse(evt: unknown): [number, number] {
        throw new Error('Method not implemented.');
    }
    hasPoint(x: number, y: number): boolean {
        throw new Error('Method not implemented.');
    }
    highlightCustomInfobox(text: string, element?: JXG.GeometryElement): this {
        throw new Error('Method not implemented.');
    }
    highlightInfbox(x: number, y: number, element?: JXG.GeometryElement): this {
        throw new Error('Method not implemented.');
    }
    initInfobox(): this {
        throw new Error('Method not implemented.');
    }
    initMoveObject(x: number, y: number, event: unknown, type: 'mouse' | 'pen' | 'touch'): JXG.GeometryElement[] {
        throw new Error('Method not implemented.');
    }
    initMoveOrigin(x: number, y: number): unknown {
        throw new Error('Method not implemented.');
    }
    migratePoint(src: JXG.Point, dest: JXG.Point, copyName: boolean): this {
        throw new Error('Method not implemented.');
    }
    mouseDownListener(event: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    mouseMoveListener(event: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    mouseUpListener(event: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    mouseWheelListener(event: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    moveObject(x: number, y: number, o: unknown, event: unknown, type: 'mouse' | 'touch'): unknown {
        throw new Error('Method not implemented.');
    }
    moveOrigin(x: number, y: number, diff?: boolean): this {
        throw new Error('Method not implemented.');
    }
    on(event: string, handler: (evt: PointerEvent) => void, context?: {}): {} {
        throw new Error('Method not implemented.');
    }
    pointerDownListener(event: unknown, object: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    pointerMoveListener(event: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    pointerOutListener(event: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    pointerUpListener(event: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    prepareUpdate(): this {
        throw new Error('Method not implemented.');
    }
    removeAncestors(element: JXG.GeometryElement): this {
        throw new Error('Method not implemented.');
    }
    removeChild(board: Board): Board {
        throw new Error('Method not implemented.');
    }
    removeEventHandlers(): unknown {
        throw new Error('Method not implemented.');
    }
    removeFullscreenEventHandlers(): unknown {
        throw new Error('Method not implemented.');
    }
    removeGrids(): this {
        throw new Error('Method not implemented.');
    }
    removeHook(id: number | Function): this {
        throw new Error('Method not implemented.');
    }
    removeMouseEventHandlers(): unknown {
        throw new Error('Method not implemented.');
    }
    removeObject(object: string | JXG.GeometryElement | (string | JXG.GeometryElement)[], saveMethod?: boolean): this {
        throw new Error('Method not implemented.');
    }
    removePointerEventHandlers(): unknown {
        throw new Error('Method not implemented.');
    }
    removeTouchEventHandlers(): unknown {
        throw new Error('Method not implemented.');
    }
    resizeContainer(width: number, height: number, dontSetCssWidthAndHeight?: boolean, dontSetBoundingBox?: boolean): this {
        throw new Error('Method not implemented.');
    }
    select(id: unknown, onlyByIdOrName: boolean): JXG.GeometryElement | JXG.Composition {
        throw new Error('Method not implemented.');
    }
    setBoundingBox(bbox: [number, number, number, number], keepaspectratio?: boolean, setZoom?: string): this {
        throw new Error('Method not implemented.');
    }
    setId(object: unknown, type: number): string {
        throw new Error('Method not implemented.');
    }
    setZoom(fX: number, fY: number): Board {
        throw new Error('Method not implemented.');
    }
    showDependencies(): this {
        throw new Error('Method not implemented.');
    }
    showXML(): this {
        throw new Error('Method not implemented.');
    }
    startSelectionMode(): unknown {
        throw new Error('Method not implemented.');
    }
    stopAllAnimation(): Board {
        throw new Error('Method not implemented.');
    }
    stopSelectionMode(): [JXG.Coords, JXG.Coords] {
        throw new Error('Method not implemented.');
    }
    suspendUpdate(): Board {
        throw new Error('Method not implemented.');
    }
    toFullscreen(): this {
        throw new Error('Method not implemented.');
    }
    touchEndListener(event: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    touchMoveListener(event: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    touchStartListener(event: unknown): boolean {
        throw new Error('Method not implemented.');
    }
    twoFingerMove(p1: [number, number], p2: [number, number], o: unknown, event: unknown): unknown {
        throw new Error('Method not implemented.');
    }
    twoFingerTouchObject(np1c: JXG.Coords, np2c: JXG.Coords, o: unknown, drag: unknown, event: unknown): unknown {
        throw new Error('Method not implemented.');
    }
    unsuspendUpdate(): this {
        throw new Error('Method not implemented.');
    }
    update(drag?: JXG.GeometryElement): this {
        throw new Error('Method not implemented.');
    }
    updateConditions(): this {
        throw new Error('Method not implemented.');
    }
    updateCoords(): this {
        throw new Error('Method not implemented.');
    }
    updateCSSTransforms(): this {
        throw new Error('Method not implemented.');
    }
    updateElements(drag: JXG.GeometryElement): this {
        throw new Error('Method not implemented.');
    }
    updateHooks(m: unknown): this {
        throw new Error('Method not implemented.');
    }
    updateInfobox(element: JXG.GeometryElement): this {
        throw new Error('Method not implemented.');
    }
    updateRenderer(): this {
        throw new Error('Method not implemented.');
    }
    updateRendererCanvas(): this {
        throw new Error('Method not implemented.');
    }
    zoom100(): this {
        throw new Error('Method not implemented.');
    }
    zoomAllPoints(): this {
        throw new Error('Method not implemented.');
    }
    zoomElements(elements: unknown[]): this {
        throw new Error('Method not implemented.');
    }
    zoomIn(x?: number, y?: number): this {
        throw new Error('Method not implemented.');
    }
    zoomOut(x?: number, y?: number): this {
        throw new Error('Method not implemented.');
    }

}
