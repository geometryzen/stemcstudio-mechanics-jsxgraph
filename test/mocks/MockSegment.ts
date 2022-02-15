import { Board, Point, Segment } from 'jsxgraph';

export class MockSegment implements Segment {
    constructor(public readonly board: Board, public readonly elType: string, public readonly parents: unknown[]) {
    }
    hasPoint(x: number, y: number, start?: number): boolean {
        throw new Error('Method not implemented.');
    }
    setAttribute(attributes: JXG.SegmentAttributes): this {
        throw new Error('Method not implemented.');
    }
    point1: Point;
    point2: Point;
    getAngle(): number {
        throw new Error('Method not implemented.');
    }
    L(): number {
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
