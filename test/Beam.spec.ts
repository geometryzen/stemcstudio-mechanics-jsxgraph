import { assert } from 'chai';
import { Beam } from '../src';
import { MockBoard, MockPoint } from "./jsxgraph-mock"

describe("Beam", function () {
    describe("constructor", function () {
        // const board = JSXGraph.initBoard('board');
        const board = new MockBoard()
        const beam = new Beam(board);
        it("beam.board", function () {
            assert.strictEqual(beam.board, board);
        })
        it("beam.point", function () {
            assert.isDefined(beam.point);
            assert.instanceOf(beam.point, MockPoint);
            assert.strictEqual(beam.point.board, board);
            assert.strictEqual(beam.point.elType, "point");
            assert.isArray(beam.point.parents);
            const parents = beam.point.parents
            if (Array.isArray(parents)) {
                assert.strictEqual(parents.length, 2);
                assert.strictEqual(parents[0], 0);
                assert.strictEqual(parents[1], 0);
            }
        })
    })
})