"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
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
describe('test Matrix4x4 class', function () {
    // init 
    it("should init the matrix properly", function () {
        var mat = new lib_1.Matrix4x4();
        mat.init(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        expect(mat.data).toEqual([
            1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16
        ]);
    });
    // clone 
    it("should clone the matrix properly", function () {
        var mat = new lib_1.Matrix4x4();
        mat.init(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        expect(mat.data).toEqual(mat.clone().data);
    });
    // identity
    it("should be the identity matrix", function () {
        var mat = new lib_1.Matrix4x4();
        mat.identity();
        expect(mat.data).toEqual([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    });
    // invert
    it("should invert the matrix properly", function () {
        var mat = new lib_1.Matrix4x4();
        mat.identity().translate(100, 100, 100).appendMatrix(mat.clone().invert());
        expect(mat.data).toEqual([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    });
    // transpose
    it("should transpose the matrix properly", function () {
        var mat = new lib_1.Matrix4x4();
        mat.init(1, 2, 2, 2, 0, 1, 2, 2, 0, 0, 1, 2, 0, 0, 0, 1).transpose();
        expect(mat.data).toEqual([
            1, 0, 0, 0,
            2, 1, 0, 0,
            2, 2, 1, 0,
            2, 2, 2, 1
        ]);
    });
    // transformPoint3D
    it("should transform the point properly", function () {
        var mat = new lib_1.Matrix4x4();
        var point = new lib_1.Point3D(0, 0, 0);
        mat.translate(98, 99, 100).transformPoint3D(point);
        expect([point.x, point.y, point.z]).toEqual([98, 99, 100]);
    });
    // translate 
    it("should translate the point properly", function () {
        var mat = new lib_1.Matrix4x4();
        var point = new lib_1.Point3D(0, 0, 0);
        mat.translate(98, 99, 100).transformPoint3D(point);
        expect([point.x, point.y, point.z]).toEqual([98, 99, 100]);
    });
    // scale 
    it("should scale the point properly", function () {
        var mat = new lib_1.Matrix4x4();
        var point = new lib_1.Point3D(1, 1, 1);
        mat.scale(2, 2, 2);
        mat.transformPoint3D(point);
        expect([point.x, point.y, point.z]).toEqual([2, 2, 2]);
    });
    // rotateX 
    it("should rotate the point properly on the x axis", function () {
        var mat = new lib_1.Matrix4x4();
        var point = new lib_1.Point3D(0, 100, 0);
        mat.rotateX(90);
        mat.transformPoint3D(point);
        expect([point.x, point.y, point.z]).toEqual([0, 0, -100]);
    });
    // rotateY 
    it("should rotate the point properly on the y axis", function () {
        var mat = new lib_1.Matrix4x4();
        var point = new lib_1.Point3D(0, 0, -100);
        mat.rotateY(90);
        mat.transformPoint3D(point);
        expect([point.x, point.y, point.z]).toEqual([100, 0, 0]);
    });
    // rotateZ 
    it("should rotate the point properly on the z axis", function () {
        var mat = new lib_1.Matrix4x4();
        var point = new lib_1.Point3D(100, 0, 0);
        mat.rotateZ(90);
        mat.transformPoint3D(point);
        expect([point.x, point.y, point.z]).toEqual([0, -100, 0]);
    });
    // rotate
    it("should be a composition of rotations along x,y,z axises and rotate the point properly", function () {
        var mat = new lib_1.Matrix4x4();
        var point = null;
        mat.identity().rotateX(90).rotateY(90).rotateZ(90);
        expect(mat.data).toEqual(mat.clone().identity().rotate(90, 90, 90).data);
    });
    // multiplyBynumber
    it("should multiply the matrix by 2", function () {
        var mat = new lib_1.Matrix4x4();
        mat.multiplyBynumber(2).multiplyBynumber(0.5);
        expect(mat.data).toEqual(mat.clone().identity().data);
    });
    // appendTransform
    it("should transform the point around the pivot properly", function () {
        var mat = new lib_1.Matrix4x4();
        var point = mat.appendTransform(0, 0, 0, 2, 2, 2, 0, 0, 0, 100, 100, 100).transformPoint3D(new lib_1.Point3D(0, 0, 0));
        expect([point.x, point.y, point.z]).toEqual([-100, -100, -100]);
    });
    // appendTransform
    it("should be a combination of translate, pivot, scale, rotate, back pivot", function () {
        var mat1 = new lib_1.Matrix4x4();
        var mat2 = new lib_1.Matrix4x4();
        mat1.appendTransform(100, 100, 100, 2, 2, 2, 50, 67, 55, 20, 20, 20);
        mat2.translate(120, 120, 120).scale(2, 2, 2).rotate(50, 67, 55).translate(-20, -20, -20);
        expect(mat1.data).toEqual(mat2.data);
    });
    // prependMatrix
    it("should prepend the matrix properly", function () {
        var mat = new lib_1.Matrix4x4();
        expect(mat.clone().scale(2, 2, 2).prependMatrix(mat.clone().translate(100, 100, 100)).data).toEqual(mat.clone().identity().translate(100, 100, 100).scale(2, 2, 2).data);
    });
    // appendMatrix
    it("should appendMatrix the matrix properly", function () {
        var mat = new lib_1.Matrix4x4();
        expect(mat.clone().scale(2, 2, 2).appendMatrix(mat.clone().translate(100, 100, 100)).data).toEqual(mat.clone().identity().scale(2, 2, 2).translate(100, 100, 100).data);
    });
    // toMatrix2D
    it("should transform the Matrix4x4 into a Matrix2d version", function () {
        var mat = new lib_1.Matrix4x4();
        var mat2d = lib_1.Matrix4x4.toMatrix2D(mat.translate(100, 100, 0));
        expect([mat2d.tx, mat2d.ty]).toEqual([100, 100]);
    });
    // toMatrix4x4
    it("should transform the Matrix2D into a Matrix4x4 version", function () {
        var mat = new lib_1.Matrix4x4();
        var mat2D = new lib_1.Matrix2D();
        mat = lib_1.Matrix4x4.toMatrix4x4(mat2D.translate(100, 100));
        expect([mat.data[3], mat.data[7], mat.data[11]]).toEqual([100, 100, 0]);
    });
    // toString
    it("should turns the matrix into its string representation", function () {
        var mat = new lib_1.Matrix4x4();
        expect(typeof mat.toString()).toBe("string");
    });
    // determinant
    it("should calculate the determinant of the matrix", function () {
        var mat = new lib_1.Matrix4x4();
        var determinant = 0;
        mat.translate(100, 100, 100);
        determinant = mat.determinant();
        expect(mat.clone().appendMatrix(mat.clone().invert()).data).toEqual(mat.clone().identity().data);
        expect(mat.determinant()).not.toBe(0);
    });
    // frustum
    // perspective
    // ortho
    it("should apply a perspective projection and an orthographic projection to the matrix", function () {
        var mat = new lib_1.Matrix4x4();
        mat.frustum(-100, 100, -100, 100, 0, 100).perspective(90, 16 / 9, 0, 100);
        expect(mat.data).not.toEqual(mat.clone().identity().data);
        mat.identity();
        mat.frustum(-100, 100, -100, 100, 0, 100).ortho(-100, 100, -100, 100, 0, 100);
        expect(mat.data).not.toEqual(mat.clone().identity().data);
    });
});
