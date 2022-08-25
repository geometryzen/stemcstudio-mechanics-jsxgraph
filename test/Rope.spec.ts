import { assert } from 'chai';
import { Board } from 'jsxgraph';
import { Rope } from '../src';
import { MockBoard } from "./mocks/MockBoard";
import { MockPoint } from './mocks/MockPoint';

describe("Rope", function () {
    describe("constructor", function () {
        // const board = JSXGraph.initBoard('board');
        const board = new MockBoard() as unknown as Board
        const C1 = board.create('point', [-2, 0])
        const C2 = board.create('point', [3, 2])
        const r1 = 2
        const r2 = 1
        const rope = new Rope(board, C1, r1, C2, r2);
        it("rope.board", function () {
            assert.strictEqual(rope.board, board);
        })
        it("rope.point", function () {
            assert.isDefined(rope.C1);
            assert.instanceOf(rope.C1, MockPoint);
        })
    })
})