"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix2D_1 = require("./Matrix2D");
var utils_1 = require("./utils");
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
/**
* @class Matrix4x4
* @description A Basic implementation of a Matrix4x4
* @memberOf
* @constructor
**/
var Matrix4x4 = /** @class */ (function () {
    function Matrix4x4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        if (a === void 0) { a = 1; }
        if (b === void 0) { b = 0; }
        if (c === void 0) { c = 0; }
        if (d === void 0) { d = 0; }
        if (e === void 0) { e = 0; }
        if (f === void 0) { f = 1; }
        if (g === void 0) { g = 0; }
        if (h === void 0) { h = 0; }
        if (i === void 0) { i = 0; }
        if (j === void 0) { j = 0; }
        if (k === void 0) { k = 1; }
        if (l === void 0) { l = 0; }
        if (m === void 0) { m = 0; }
        if (n === void 0) { n = 0; }
        if (o === void 0) { o = 0; }
        if (p === void 0) { p = 1; }
        /**
         * @memberOf Matrix4x4
         * @member {number[]} data
         * @description a 16 number elements Array that contains the matrix data [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p]
         * @readonly
         **/
        this.data = null;
        this.init(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p);
    }
    /**
    * @method init
    * @description initialize the matrix properties
    * @memberOf Matrix4x4
    * @param {number} a
    * @param {number} b
    * @param {number} c
    * @param {number} d
    * @param {number} e
    * @param {number} f
    * @param {number} g
    * @param {number} h
    * @param {number} i
    * @param {number} j
    * @param {number} k
    * @param {number} l
    * @param {number} m
    * @param {number} n
    * @param {number} o
    * @param {number} p
    **/
    Matrix4x4.prototype.init = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        this.data = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p];
        return this;
    };
    ;
    /**
    * @method clone
    * @memberOf Matrix4x4
    * @description return a clone of the matrix
    * @returns {Matrix4x4}
    **/
    Matrix4x4.prototype.clone = function () {
        var matrix = new Matrix4x4();
        var i = 16;
        while (--i > -1) {
            matrix.data[i] = this.data[i];
        }
        return matrix;
    };
    ;
    /**
    * @method translate
    * @memberOf Matrix4x4
    * @description translate the matrix by tx, ty, and tz
    * @param {number} tx
    * @param {number} ty
    * @param {number} tz
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    Matrix4x4.prototype.translate = function (tx, ty, tz) {
        TRANSLATE_MATRIX.data[3] = tx;
        TRANSLATE_MATRIX.data[7] = ty;
        TRANSLATE_MATRIX.data[11] = tz;
        this.appendMatrix(TRANSLATE_MATRIX);
        return this;
    };
    ;
    /**
    * @method scale
    * @memberOf Matrix4x4
    * @description scale the matrix by sx, sy, and sz
    * @param {number} sx
    * @param {number} sy
    * @param {number} sz
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    Matrix4x4.prototype.scale = function (sx, sy, sz) {
        SCALE_MATRIX.data[0] = sx;
        SCALE_MATRIX.data[5] = sy;
        SCALE_MATRIX.data[10] = sz;
        this.appendMatrix(SCALE_MATRIX);
        return this;
    };
    ;
    /**
    * @method rotate
    * @memberOf Matrix4x4
    * @description rotate the matrix by rx, ry, and rz
    * @param {number} rx
    * @param {number} ry
    * @param {number} rz
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    Matrix4x4.prototype.rotate = function (rx, ry, rz) {
        var c = utils_1.FAST_COS[rx];
        var s = utils_1.FAST_SIN[rx];
        ROTATION_X_MATRIX.data[5] = c;
        ROTATION_X_MATRIX.data[6] = -s;
        ROTATION_X_MATRIX.data[9] = s;
        ROTATION_X_MATRIX.data[10] = c;
        this.appendMatrix(ROTATION_X_MATRIX);
        c = utils_1.FAST_COS[ry];
        s = utils_1.FAST_SIN[ry];
        ROTATION_Y_MATRIX.data[0] = c;
        ROTATION_Y_MATRIX.data[2] = -s;
        ROTATION_Y_MATRIX.data[8] = s;
        ROTATION_Y_MATRIX.data[10] = c;
        this.appendMatrix(ROTATION_Y_MATRIX);
        c = utils_1.FAST_COS[rz];
        s = utils_1.FAST_SIN[rz];
        ROTATION_Z_MATRIX.data[0] = c;
        ROTATION_Z_MATRIX.data[1] = -s;
        ROTATION_Z_MATRIX.data[4] = s;
        ROTATION_Z_MATRIX.data[5] = c;
        this.appendMatrix(ROTATION_Z_MATRIX);
        return this;
    };
    ;
    /**
    * @method rotateX
    * @memberOf Matrix4x4
    * @description rotate the matrix by p_rotation degrees on the x axis
    * @param {number} p_rotation
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    Matrix4x4.prototype.rotateX = function (p_rotation) {
        var c = utils_1.FAST_COS[p_rotation];
        var s = utils_1.FAST_SIN[p_rotation];
        ROTATION_X_MATRIX.data[5] = c;
        ROTATION_X_MATRIX.data[6] = -s;
        ROTATION_X_MATRIX.data[9] = s;
        ROTATION_X_MATRIX.data[10] = c;
        this.appendMatrix(ROTATION_X_MATRIX);
        return this;
    };
    ;
    /**
    * @method rotateY
    * @memberOf Matrix4x4
    * @description rotate the matrix by p_rotation degrees on the y axis
    * @param {number} p_rotation
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    Matrix4x4.prototype.rotateY = function (p_rotation) {
        var c = utils_1.FAST_COS[p_rotation];
        var s = utils_1.FAST_SIN[p_rotation];
        ROTATION_Y_MATRIX.data[0] = c;
        ROTATION_Y_MATRIX.data[2] = -s;
        ROTATION_Y_MATRIX.data[8] = s;
        ROTATION_Y_MATRIX.data[10] = c;
        this.appendMatrix(ROTATION_Y_MATRIX);
        return this;
    };
    ;
    /**
    * @method rotateZ
    * @memberOf Matrix4x4
    * @description rotate the matrix by p_rotation degrees on the z axis
    * @param {number} p_rotation
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    Matrix4x4.prototype.rotateZ = function (p_rotation) {
        var c = utils_1.FAST_COS[p_rotation];
        var s = utils_1.FAST_SIN[p_rotation];
        ROTATION_Z_MATRIX.data[0] = c;
        ROTATION_Z_MATRIX.data[1] = -s;
        ROTATION_Z_MATRIX.data[4] = s;
        ROTATION_Z_MATRIX.data[5] = c;
        this.appendMatrix(ROTATION_Z_MATRIX);
        return this;
    };
    ;
    /**
    * @method multiplyBynumber
    * @memberOf Matrix4x4
    * @description multiply the current matrix by p_number
    * @param {number} value
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    Matrix4x4.prototype.multiplyBynumber = function (value) {
        var data1 = this.data;
        data1[0] *= value;
        data1[1] *= value;
        data1[2] *= value;
        data1[3] *= value;
        data1[4] *= value;
        data1[5] *= value;
        data1[6] *= value;
        data1[7] *= value;
        data1[8] *= value;
        data1[9] *= value;
        data1[10] *= value;
        data1[11] *= value;
        data1[12] *= value;
        data1[13] *= value;
        data1[14] *= value;
        data1[15] *= value;
        return this;
    };
    ;
    /**
    * @method appendTransform
    * @memberOf Matrix4x4
    * @description append transformation on the current matrix around the point defined by pivotX, pivotY and pivotZ
    * @param {number} p_number
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {number} scaleX
    * @param {number} scaleY
    * @param {number} scaleZ
    * @param {number} rotationX
    * @param {number} rotationY
    * @param {number} rotationZ
    * @param {number} pivotX
    * @param {number} pivotY
    * @param {number} pivotZ
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    Matrix4x4.prototype.appendTransform = function (x, y, z, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ, pivotX, pivotY, pivotZ) {
        return this.translate(x + pivotX, y + pivotY, z + pivotZ)
            .scale(scaleX, scaleY, scaleZ)
            .rotate(rotationX, rotationY, rotationZ)
            .translate(-pivotX, -pivotY, -pivotZ);
    };
    ;
    /**
     * Prepends the specified matrix with this matrix.
     * @method prependMatrix
     * @memberOf Matrix4x4
     * @param {Matrix4x4} matrix
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    Matrix4x4.prototype.prependMatrix = function (mat) {
        var data1 = this.data;
        var data2 = mat.data;
        var a00 = data2[0], a01 = data2[1], a02 = data2[2], a03 = data2[3];
        var a10 = data2[4], a11 = data2[5], a12 = data2[6], a13 = data2[7];
        var a20 = data2[8], a21 = data2[9], a22 = data2[10], a23 = data2[11];
        var a30 = data2[12], a31 = data2[13], a32 = data2[14], a33 = data2[15];
        var b00 = data1[0], b01 = data1[1], b02 = data1[2], b03 = data1[3];
        var b10 = data1[4], b11 = data1[5], b12 = data1[6], b13 = data1[7];
        var b20 = data1[8], b21 = data1[9], b22 = data1[10], b23 = data1[11];
        var b30 = data1[12], b31 = data1[13], b32 = data1[14], b33 = data1[15];
        data1[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
        data1[1] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
        data1[2] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
        data1[3] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;
        data1[4] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
        data1[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
        data1[6] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
        data1[7] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;
        data1[8] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
        data1[9] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
        data1[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
        data1[11] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;
        data1[12] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
        data1[13] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
        data1[14] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
        data1[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;
        return this;
    };
    ;
    /**
     * Appends the specified matrix with this matrix.
     * @method appendMatrix
     * @memberOf Matrix4x4
     * @param {Matrix4x4} matrix
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    Matrix4x4.prototype.appendMatrix = function (mat) {
        var data1 = this.data;
        var data2 = mat.data;
        var a00 = data1[0], a01 = data1[1], a02 = data1[2], a03 = data1[3];
        var a10 = data1[4], a11 = data1[5], a12 = data1[6], a13 = data1[7];
        var a20 = data1[8], a21 = data1[9], a22 = data1[10], a23 = data1[11];
        var a30 = data1[12], a31 = data1[13], a32 = data1[14], a33 = data1[15];
        var b00 = data2[0], b01 = data2[1], b02 = data2[2], b03 = data2[3];
        var b10 = data2[4], b11 = data2[5], b12 = data2[6], b13 = data2[7];
        var b20 = data2[8], b21 = data2[9], b22 = data2[10], b23 = data2[11];
        var b30 = data2[12], b31 = data2[13], b32 = data2[14], b33 = data2[15];
        data1[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
        data1[1] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
        data1[2] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
        data1[3] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;
        data1[4] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
        data1[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
        data1[6] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
        data1[7] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;
        data1[8] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
        data1[9] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
        data1[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
        data1[11] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;
        data1[12] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
        data1[13] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
        data1[14] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
        data1[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;
        return this;
    };
    ;
    /**
     * get the matrix determinant
     * @method appendMatrix
     * @memberOf Matrix4x4
     * @return {number} the matrix determinant
     **/
    Matrix4x4.prototype.determinant = function () {
        var data = this.data;
        // Cache the matrix values (makes for huge speed increases!)
        var a00 = data[0], a01 = data[1], a02 = data[2], a03 = data[3];
        var a10 = data[4], a11 = data[5], a12 = data[6], a13 = data[7];
        var a20 = data[8], a21 = data[9], a22 = data[10], a23 = data[11];
        var a30 = data[12], a31 = data[13], a32 = data[14], a33 = data[15];
        return (a30 * a21 * a12 * a03 - a20 * a31 * a12 * a03 - a30 * a11 * a22 * a03 + a10 * a31 * a22 * a03 +
            a20 * a11 * a32 * a03 - a10 * a21 * a32 * a03 - a30 * a21 * a02 * a13 + a20 * a31 * a02 * a13 +
            a30 * a01 * a22 * a13 - a00 * a31 * a22 * a13 - a20 * a01 * a32 * a13 + a00 * a21 * a32 * a13 +
            a30 * a11 * a02 * a23 - a10 * a31 * a02 * a23 - a30 * a01 * a12 * a23 + a00 * a31 * a12 * a23 +
            a10 * a01 * a32 * a23 - a00 * a11 * a32 * a23 - a20 * a11 * a02 * a33 + a10 * a21 * a02 * a33 +
            a20 * a01 * a12 * a33 - a00 * a21 * a12 * a33 - a10 * a01 * a22 * a33 + a00 * a11 * a22 * a33);
    };
    ;
    /**
     * Sets the properties of the matrix to those of an identity matrix (one that applies a null transformation).
     * @method identity
     * @memberOf Matrix4x4
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    Matrix4x4.prototype.identity = function () {
        this.init(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
    };
    ;
    /**
     * Inverts the matrix, causing it to perform the opposite transformation.
     * @method invert
     * @memberOf Matrix4x4
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    Matrix4x4.prototype.invert = function () {
        var data = this.data;
        // Cache the matrix values (makes for huge speed increases!)
        var a00 = data[0], a01 = data[1], a02 = data[2], a03 = data[3];
        var a10 = data[4], a11 = data[5], a12 = data[6], a13 = data[7];
        var a20 = data[8], a21 = data[9], a22 = data[10], a23 = data[11];
        var a30 = data[12], a31 = data[13], a32 = data[14], a33 = data[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;
        // Calculate the determinant (inlined to avoid double-caching)
        var d = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        var id = 1 / d;
        data[0] = (a11 * b11 - a12 * b10 + a13 * b09) * id;
        data[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * id;
        data[2] = (a31 * b05 - a32 * b04 + a33 * b03) * id;
        data[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * id;
        data[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * id;
        data[5] = (a00 * b11 - a02 * b08 + a03 * b07) * id;
        data[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * id;
        data[7] = (a20 * b05 - a22 * b02 + a23 * b01) * id;
        data[8] = (a10 * b10 - a11 * b08 + a13 * b06) * id;
        data[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * id;
        data[10] = (a30 * b04 - a31 * b02 + a33 * b00) * id;
        data[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * id;
        data[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * id;
        data[13] = (a00 * b09 - a01 * b07 + a02 * b06) * id;
        data[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * id;
        data[15] = (a20 * b03 - a21 * b01 + a22 * b00) * id;
        return this;
    };
    ;
    /**
     * Transposes the matrix
     * @method transpose
     * @memberOf Matrix4x4
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    Matrix4x4.prototype.transpose = function () {
        // Cache the matrix values (makes for huge speed increases!)
        var data = this.data;
        var a00 = data[0], a01 = data[1], a02 = data[2], a03 = data[3];
        var a10 = data[4], a11 = data[5], a12 = data[6], a13 = data[7];
        var a20 = data[8], a21 = data[9], a22 = data[10], a23 = data[11];
        var a30 = data[12], a31 = data[13], a32 = data[14], a33 = data[15];
        data[0] = a00;
        data[1] = a10;
        data[2] = a20;
        data[3] = a30;
        data[4] = a01;
        data[5] = a11;
        data[6] = a21;
        data[7] = a31;
        data[8] = a02;
        data[9] = a12;
        data[10] = a22;
        data[11] = a32;
        data[12] = a03;
        data[13] = a13;
        data[14] = a23;
        data[15] = a33;
        return this;
    };
    ;
    /**
     * Sets the matrix frustum
     * @method frustum
     * @memberOf Matrix4x4
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    Matrix4x4.prototype.frustum = function (left, right, bottom, top, near, far) {
        var data = this.data;
        var temp1 = 2 * near;
        var temp2 = right - left;
        var temp3 = top - bottom;
        var temp4 = far - near;
        data[0] = temp1 / temp2;
        data[1] = 0;
        data[2] = 0;
        data[3] = 0;
        data[4] = 0;
        data[5] = temp1 / temp3;
        data[6] = 0;
        data[7] = 0;
        data[8] = (right + left) / temp2;
        data[9] = (top + bottom) / temp3;
        data[10] = (-far - near) / temp4;
        data[11] = -1;
        data[12] = 0;
        data[13] = 0;
        data[14] = (-temp1 * far) / temp4;
        data[15] = 0;
        return this;
    };
    ;
    /**
     * Applies a perspective on the current matrix
     * @method perspective
     * @memberOf Matrix4x4
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    Matrix4x4.prototype.perspective = function (fovy, aspect, near, far) {
        var top = near * Math.tan(fovy * Math.PI / 360);
        var right = top * aspect;
        this.frustum(-right, right, -top, top, near, far);
        return this;
    };
    ;
    /**
     * Applies an orthographic projection on the current matrix
     * @method ortho
     * @memberOf Matrix4x4
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    Matrix4x4.prototype.ortho = function (left, right, bottom, top, near, far) {
        var lr = (left - right);
        var tb = (top - bottom);
        var fn = (far - near);
        var data = this.data;
        data[0] = 2 / lr;
        data[1] = 0;
        data[2] = 0;
        data[3] = 0;
        data[4] = 0;
        data[5] = 2 / tb;
        data[6] = 0;
        data[7] = 0;
        data[8] = 0;
        data[9] = 0;
        data[10] = -2 / fn;
        data[11] = 0;
        data[12] = (left + right) / lr;
        data[13] = (top + bottom) / tb;
        data[14] = (far + near) / fn;
        data[15] = 1;
        return this;
    };
    ;
    /**
     * Returns a string representation of this object.
     * @method toString
     * @memberOf Matrix4x4
     * @return {String} a string representation of the instance.
     **/
    Matrix4x4.prototype.str = function () {
        var data = this.data;
        return '[\n' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + data[3] +
            '\n, ' + data[4] + ', ' + data[5] + ', ' + data[6] + ', ' + data[7] +
            '\n, ' + data[8] + ', ' + data[9] + ', ' + data[10] + ', ' + data[11] +
            '\n, ' + data[12] + ', ' + data[13] + ', ' + data[14] + ', ' + data[15] + ']';
    };
    ;
    /**
     * Transforms a Point3D according to this matrix.
     * @method transformPoint3D
     * @memberOf Matrix4x4
     * @param {Point3D}
     * @return {Point3D}
     **/
    Matrix4x4.prototype.transformPoint3D = function (point) {
        var mat1 = new Matrix4x4();
        mat1.translate(point.x, point.y, point.z).prependMatrix(this);
        point.x = mat1.data[3];
        point.y = mat1.data[7];
        point.z = mat1.data[11];
        return point;
    };
    ;
    /**
     * static methods
     */
    /**
     * Converts the "mat" matrix into a Matrix2D
     * @method toMatrix2D
     * @memberOf Matrix4x4
     * @param {Matrix4x4} mat the matrix you want to convert
     * @return {Matrix2D}
     **/
    Matrix4x4.toMatrix2D = function (mat) {
        var matrix2D = new Matrix2D_1.Matrix2D();
        matrix2D.a = mat.data[0];
        matrix2D.b = mat.data[4];
        matrix2D.c = mat.data[1];
        matrix2D.d = mat.data[5];
        matrix2D.tx = mat.data[3];
        matrix2D.ty = mat.data[7];
        return matrix2D;
    };
    ;
    /**
     * Converts the "mat2d" matrix into a Matrix4x4
     * @method toMatrix4x4
     * @memberOf Matrix4x4
     * @param {Matrix2D} mat the matrix you want to convert
     * @return {Matrix4x4}
     **/
    Matrix4x4.toMatrix4x4 = function (mat2d) {
        var mat = new Matrix4x4();
        mat.data[0] = mat2d.a;
        mat.data[4] = mat2d.b;
        mat.data[1] = mat2d.c;
        mat.data[5] = mat2d.d;
        mat.data[3] = mat2d.tx;
        mat.data[7] = mat2d.ty;
        return mat;
    };
    ;
    return Matrix4x4;
}());
exports.Matrix4x4 = Matrix4x4;
var ROTATION_X_MATRIX = new Matrix4x4(1, 0, 0, 0, 0, utils_1.FAST_COS[0], -utils_1.FAST_SIN[0], 0, 0, utils_1.FAST_SIN[0], utils_1.FAST_COS[0], 0, 0, 0, 0, 1);
var ROTATION_Y_MATRIX = new Matrix4x4(utils_1.FAST_COS[0], 0, -utils_1.FAST_SIN[0], 0, 0, 1, 0, 0, utils_1.FAST_SIN[0], 0, utils_1.FAST_COS[0], 0, 0, 0, 0, 1);
var ROTATION_Z_MATRIX = new Matrix4x4(utils_1.FAST_COS[0], -utils_1.FAST_SIN[0], 0, 0, utils_1.FAST_SIN[0], utils_1.FAST_COS[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
var TRANSLATE_MATRIX = new Matrix4x4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
var SCALE_MATRIX = new Matrix4x4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
