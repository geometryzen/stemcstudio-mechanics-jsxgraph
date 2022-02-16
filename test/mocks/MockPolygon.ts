import { Board, Polygon } from 'jsxgraph';

export class MockPolygon implements Polygon {
    vertices: JXG.Point[];
    constructor(public readonly board: Board, public readonly elType: string, public readonly parents: unknown[]) {
    }
    addPoints(p: JXG.Point): this {
        throw new Error('Method not implemented.');
    }
    Area(): number {
        throw new Error('Method not implemented.');
    }
    boundingBox(): [minX: number, maxY: number, maxX: number, minY: number] {
        throw new Error('Method not implemented.');
    }
    findPoint(p: JXG.Point): number {
        throw new Error('Method not implemented.');
    }
    getTextAnchor(): unknown {
        throw new Error('Method not implemented.');
    }
    hasPoint(x: number, y: number): boolean {
        throw new Error('Method not implemented.');
    }
    hideElement(borderless?: boolean): void {
        throw new Error('Method not implemented.');
    }
    insertPoints(idx: number, p: JXG.Point): this {
        throw new Error('Method not implemented.');
    }
    intersect(polygon: Polygon): number[][] {
        throw new Error('Method not implemented.');
    }
    Perimeter(): number {
        throw new Error('Method not implemented.');
    }
    remove(): void {
        throw new Error('Method not implemented.');
    }
    removePoints(p: JXG.Point): this {
        throw new Error('Method not implemented.');
    }
    setAttribute(attributes: JXG.PolygonAttributes): this {
        throw new Error('Method not implemented.');
    }
    setPositionDirectly(method: number, coords: unknown[], oldcoords?: unknown[]): this {
        throw new Error('Method not implemented.');
    }
    showElement(borderless?: boolean): void {
        throw new Error('Method not implemented.');
    }
    updateRenderer(): void {
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
    show(): void {
        throw new Error('Method not implemented.');
    }
    snapToPoints(): this {
        throw new Error('Method not implemented.');
    }
    update(): this {
        throw new Error('Method not implemented.');
    }
}