import { assert } from 'chai';
import { Beam } from '../src';
import { MockBoard } from "./mocks/MockBoard";
import { MockPoint } from './mocks/MockPoint';

describe("Beam", function () {
    describe("constructor", function () {
        // const board = JSXGraph.initBoard('board');
        const board = new MockBoard()
        const beam = new Beam(board, [0, 0], [3, 0], 0.15);
        it("beam.board", function () {
            assert.strictEqual(beam.board, board);
        })
        it("beam.point", function () {
            assert.isDefined(beam.pointA);
            assert.instanceOf(beam.pointA, MockPoint);
            assert.strictEqual(beam.pointA.board, board);
            assert.strictEqual(beam.pointA.elType, "point");
            assert.isArray(beam.pointA.parents);
            const parents = beam.pointA.parents
            if (Array.isArray(parents)) {
                assert.strictEqual(parents.length, 2);
                assert.strictEqual(parents[0], 0);
                assert.strictEqual(parents[1], 0);
            }
        })
    })
})