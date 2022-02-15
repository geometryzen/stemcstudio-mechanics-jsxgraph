import { Board, Point } from 'jsxgraph';

export class MockPoint implements Point {
    constructor(public readonly board: Board, public readonly elType: string, public readonly parents: unknown[]) {
    }
    X(): number {
        throw new Error('Method not implemented.');
    }
    Y(): number {
        throw new Error('Method not implemented.');
    }
    Dist(point: Point): number {
        throw new Error('Method not implemented.');
    }
    isOn(element: JXG.GeometryElement, tolerance?: number): boolean {
        throw new Error('Method not implemented.');
    }
    setAttribute(attributes: JXG.PointAttributes): this {
        throw new Error('Method not implemented.');
    }
    ref: [x: number, y: number] | (() => [x: number, y: number]);
    scale: [x: number, y: number] | (() => [x: number, y: number]);
    dp: [x: number, y: number] | (() => [x: number, y: number]);
    coords: JXG.Coords;
    moveAlong(path: JXG.PointSpecification[], time: number, options?: JXG.MoveAlongOptions): this {
        throw new Error('Method not implemented.');
    }
    moveTo(where: JXG.PointSpecification, time?: number, options?: JXG.MoveToOptions): this {
        throw new Error('Method not implemented.');
    }
    startAnimation(direction: number, stepCount: number): void {
        throw new Error('Method not implemented.');
    }
    stopAnimation(): void {
        throw new Error('Method not implemented.');
    }
    visit(where: JXG.PointSpecification[], time?: number, options?: JXG.VisitOptions): this {
        throw new Error('Method not implemented.');
    }
    hasLabel: boolean;
    highlighted: boolean;
    id: string;
    label?: JXG.Text;
    name: string;
    needsUpdate: boolean;
    notExistingParents: unknown;
    numTraces: number;
    quadraticform: unknown[];
    rendNode: HTMLElement;
    stdform: [C: number, A: number, B: number];
    subs: unknown;
    symbolic: unknown;
    traces: unknown;
    transformations: unknown[];
    type: number;
    visProp: { [name: string]: unknown; };
    visPropCalc: { [name: string]: unknown; };
    addChild(obj: JXG.GeometryElement): void {
        throw new Error('Method not implemented.');
    }
    addParents(parents: unknown[]): this {
        throw new Error('Method not implemented.');
    }
    addRotation(angle: number): void {
        throw new Error('Method not implemented.');
    }
    getName(): string {
        throw new Error('Method not implemented.');
    }
    hide(): void {
        throw new Error('Method not implemented.');
    }
    hideElement(): void {
        throw new Error('Method not implemented.');
    }
    on(event: string, handler: (e: Event) => void, context?: unknown): void {
        throw new Error('Method not implemented.');
    }
    setDash(dash: number): void {
        throw new Error('Method not implemented.');
    }
    setDisplayRendNode(value: boolean): this {
        throw new Error('Method not implemented.');
    }
    setLabel(label: string): void {
        throw new Error('Method not implemented.');
    }
    setLabelText(text: string): string {
        throw new Error('Method not implemented.');
    }
    setName(name: string): string {
        throw new Error('Method not implemented.');
    }
    setParents(parents: (string | JXG.GeometryElement)[]): this {
        throw new Error('Method not implemented.');
    }
    setPosition(method: number, coords: number[]): this {
        throw new Error('Method not implemented.');
    }
    setPositionDirectly(method: number, coords: number[]): this {
        throw new Error('Method not implemented.');
    }
    show(): void {
        throw new Error('Method not implemented.');
    }
    showElement(): void {
        throw new Error('Method not implemented.');
    }
    snapToPoints(): this {
        throw new Error('Method not implemented.');
    }
    update(): this {
        throw new Error('Method not implemented.');
    }
}
