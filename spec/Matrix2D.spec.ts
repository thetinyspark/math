import { Point } from "../lib/Point";
import { Matrix2D } from "../lib";
import { FAST_COS, FAST_SIN } from "../lib/utils";

/*
* MIT License

* Copyright (c) 2019 The Tiny Spark

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.

* @author The Tiny Spark
*/

describe('test Matrix2D class', () => {

    it(
        "should translate the point properly",
        () => {
            let point: Point = new Point(0, 0);
            let mat: Matrix2D = new Matrix2D();

            mat.translate(100, 100);
            mat.transformPoint(point.x, point.y, point);

            expect(point.x).toBe(100);
            expect(point.y).toBe(100);
        }
    );


    it(
        "should scale the point properly",
        () => {
            let point: Point = new Point(100, 100);
            let mat: Matrix2D = new Matrix2D();

            mat.scale(2, 2);
            mat.transformPoint(point.x, point.y, point);

            expect(point.x).toBe(200);
            expect(point.y).toBe(200);
        }
    );

    it(
        "should rotate the point properly",
        () => {
            let point: Point = new Point(100, 0);
            let mat: Matrix2D = new Matrix2D();

            mat.rotate(90);
            mat.transformPoint(point.x, point.y, point);

            expect(point.x).toBe(0);
            expect(point.y).toBe(100);
        }
    );

    it(
        "should translate around pivot  properly",
        () => {
            let pivot: Point = new Point(100, 100);
            let point: Point = new Point(0, 0);
            let mat: Matrix2D = new Matrix2D();

            mat.appendTransform(100, 100, 1, 1, 0, 0, 0, pivot.x, pivot.y);
            mat.transformPoint(point.x, point.y, point);

            expect(point.x).toBe(100);
            expect(point.y).toBe(100);
        }
    );

    it(
        "should scale around pivot  properly",
        () => {
            let pivot: Point = new Point(100, 100);
            let point: Point = new Point(50, 50);
            let mat: Matrix2D = new Matrix2D();

            mat.appendTransform(0, 0, 2, 2, 0, 0, 0, pivot.x, pivot.y);
            mat.transformPoint(point.x, point.y, point);

            expect(point.x).toBe(0);
            expect(point.y).toBe(0);
        }
    );

    it(
        "should rotate around pivot properly",
        () => {
            let pivot: Point = new Point(100, 100);
            let point: Point = new Point(50, 50);
            let mat: Matrix2D = new Matrix2D();

            mat.appendTransform(0, 0, 1, 1, 90, 0, 0, pivot.x, pivot.y);
            mat.transformPoint(point.x, point.y, point);

            expect(point.x).toBe(150);
            expect(point.y).toBe(50);
        }
    );


    it(
        "should scale and  rotate around pivot properly",
        () => {
            let pivot: Point = new Point(100, 100);
            let point: Point = new Point(50, 50);
            let mat: Matrix2D = new Matrix2D();

            mat.appendTransform(0, 0, 2, 2, 90, 0, 0, pivot.x, pivot.y);
            mat.transformPoint(point.x, point.y, point);

            expect(point.x).toBe(200);
            expect(point.y).toBe(0);
        }
    );


    it(
        "should translate, scale and  rotate around pivot properly",
        () => {
            let pivot: Point = new Point(100, 100);
            let point: Point = new Point(50, 50);
            let mat: Matrix2D = new Matrix2D();

            mat.appendTransform(100, 100, 2, 2, 90, 0, 0, pivot.x, pivot.y);
            mat.transformPoint(point.x, point.y, point);

            expect(point.x).toBe(300);
            expect(point.y).toBe(100);
        }
    );

    it(
        "should be equal to the identity matrix",
        () => {
            let mat: Matrix2D = new Matrix2D();
            expect(mat.isIdentity()).toBeTruthy();

            mat.translate(100, 100);
            expect(mat.isIdentity()).toBeFalsy();
        }
    );

    it(
        "should be cloned properly",
        () => {
            let mat1: Matrix2D = new Matrix2D();
            let mat2: Matrix2D = mat1.clone();

            expect(mat1.a).toEqual(mat2.a);
            expect(mat1.b).toEqual(mat2.b);
            expect(mat1.c).toEqual(mat2.c);
            expect(mat1.d).toEqual(mat2.d);
            expect(mat1.tx).toEqual(mat2.tx);
            expect(mat1.ty).toEqual(mat2.ty);
        }
    );

    it(
        "should append transformation properly",
        () => {
            let mat: Matrix2D = new Matrix2D();
            let point: Point = new Point(0, 0);

            mat.identity().append(2, 0, 0, 2, 0, 0).append(1, 0, 0, 1, 100, 100).transformPoint(0, 0, point);
            expect(point.x).toEqual(200);
            expect(point.y).toEqual(200);

            mat.identity().append(1, 0, 0, 1, 100, 100).append(2, 0, 0, 2, 0, 0).transformPoint(0, 0, point);
            expect(point.x).toEqual(100);
            expect(point.y).toEqual(100);

            mat.identity().rotate(90).append(1, 0, 0, 1, 100, 100).append(2, 0, 0, 2, 0, 0).transformPoint(0, 0, point);
            expect(point.x).toEqual(-100);
            expect(point.y).toEqual(100);

            mat.identity().append(1, 0, 0, 1, 100, 100).rotate(90).append(2, 0, 0, 2, 0, 0).transformPoint(0, 0, point);
            expect(point.x).toEqual(100);
            expect(point.y).toEqual(100);
        }
    );

    it(
        "should prepend transformation properly",
        () => {
            let mat: Matrix2D = new Matrix2D();
            let point: Point = new Point(0, 0);

            mat.identity().append(2, 0, 0, 2, 0, 0).prepend(1, 0, 0, 1, 100, 100).transformPoint(0, 0, point);
            expect(point.x).toEqual(100);
            expect(point.y).toEqual(100);

            mat.identity().append(1, 0, 0, 1, 100, 100).prepend(2, 0, 0, 2, 0, 0).transformPoint(0, 0, point);
            expect(point.x).toEqual(200);
            expect(point.y).toEqual(200);
        }
    );

    it("appendTransform should be a combination of translate , pivot, scale, skew, rotate, translate back pivot",
        () => {

            let mat: Matrix2D = new Matrix2D();
            let mat2: Matrix2D = new Matrix2D();

            mat.identity().append(1, 0, 0, 1, 100, 100).append(1, 0, 0, 1, 150, 150).append(2, 0, 0, 2, 0, 0)
                .append(
                    FAST_COS[10],
                    FAST_SIN[10],
                    -FAST_SIN[15],
                    FAST_COS[15],
                    0,
                    0
                )
                .append(
                    FAST_COS[10],
                    FAST_SIN[10],
                    -FAST_SIN[10],
                    FAST_COS[10],
                    0,
                    0
                )
                .append(1, 0, 0, 1, -150, -150);
            mat2 = mat.clone();

            mat.identity().appendTransform(100, 100, 2, 2, 10, 15, 10, 150, 150);

            expect(mat.toJSON()).toEqual(mat2.toJSON());

        }
    );

    it(
        "should save and restore matrices properly",
        () => {
            let mat: Matrix2D = new Matrix2D();

            mat.save();
            mat.appendTransform(100, 100, 100, 100, 100, 100, 100, 100, 100);

            mat.save();
            mat.appendTransform(100, 100, 100, 100, 100, 100, 100, 100, 100);

            mat.save();
            mat.appendTransform(100, 100, 100, 100, 100, 100, 100, 100, 100);

            expect(mat.a).not.toEqual(1);

            mat.restore();
            expect(mat.a).not.toEqual(1);

            mat.restore();
            expect(mat.a).not.toEqual(1);

            mat.restore();
            expect(mat.a).toEqual(1);
        }
    );

    it(
        "should copy the matrix properly",
        () => {
            let mat1: Matrix2D = new Matrix2D();
            let mat2:Matrix2D = new Matrix2D();

            mat1.appendTransform(10,10,10,10,10,10,10,10,10);
            mat2.copy(mat1);

            expect(mat1.toJSON()).toEqual(mat2.toJSON());
        }
    );

    it(
        "should combine matrices properly",
        () => {

            let mat0:Matrix2D = new Matrix2D();
            let mat1:Matrix2D = new Matrix2D();
            let mat2:Matrix2D = new Matrix2D();
            let mat3:Matrix2D = new Matrix2D();

            mat1.translate(100,100);
            mat2.scale(2,2);
            mat3.rotate(90);
            
            mat0.translate(100,100).scale(2,2).rotate(90);
            mat1.combine([mat2,mat3]);

            expect(mat0.toJSON()).toEqual(mat1.toJSON());
        }
    );

});