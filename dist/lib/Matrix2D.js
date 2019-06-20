"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Point_1 = require("./Point");
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
* @class Matrix2D
* @description A Basic implementation of a Matrix3x3
* @memberOf
* @param {number} a
* @param {number} b
* @param {number} c
* @param {number} d
* @param {number} tx
* @param {number} ty
* @constructor
**/
var Matrix2D = /** @class */ (function () {
    function Matrix2D(a, b, c, d, tx, ty) {
        if (a === void 0) { a = 1; }
        if (b === void 0) { b = 0; }
        if (c === void 0) { c = 0; }
        if (d === void 0) { d = 1; }
        if (tx === void 0) { tx = 0; }
        if (ty === void 0) { ty = 0; }
        this._stack = null;
        // public properties:
        /**
         * Position (0, 0) in a 3x3 affine transformation matrix.
         * @member a
         * @type number
         * @memberOf Matrix2D
         **/
        this.a = 1;
        /**
         * Position (0, 1) in a 3x3 affine transformation matrix.
         * @member b
         * @memberOf Matrix2D
         * @type number
         **/
        this.b = 0;
        /**
         * Position (1, 0) in a 3x3 affine transformation matrix.
         * @member c
         * @memberOf Matrix2D
         * @type number
         **/
        this.c = 0;
        /**
         * Position (1, 1) in a 3x3 affine transformation matrix.
         * @member d
         * @memberOf Matrix2D
         * @type number
         **/
        this.d = 1;
        /**
         * Position (2, 0) in a 3x3 affine transformation matrix.
         * @member tx
         * @memberOf Matrix2D
         * @type number
         **/
        this.tx = 0;
        /**
         * Position (2, 1) in a 3x3 affine transformation matrix.
         * @member ty
         * @memberOf Matrix2D
         * @type number
         **/
        this.ty = 0;
        this.initialize(a, b, c, d, tx, ty);
        this._stack = new Array();
    }
    // constructor:
    /**
     * Initialization method. Can also be used to reinitialize the instance.
     * @method initialize
     * @memberOf Matrix2D
     * @param {number} [a=1] Specifies the a property for the new matrix.
     * @param {number} [b=0] Specifies the b property for the new matrix.
     * @param {number} [c=0] Specifies the c property for the new matrix.
     * @param {number} [d=1] Specifies the d property for the new matrix.
     * @param {number} [tx=0] Specifies the tx property for the new matrix.
     * @param {number} [ty=0] Specifies the ty property for the new matrix.
     * @return {Matrix2D} This instance. Useful for chaining method calls.
    */
    Matrix2D.prototype.initialize = function (a, b, c, d, tx, ty) {
        if (a === void 0) { a = 1; }
        if (b === void 0) { b = 0; }
        if (c === void 0) { c = 0; }
        if (d === void 0) { d = 1; }
        if (tx === void 0) { tx = 0; }
        if (ty === void 0) { ty = 0; }
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
        return this;
    };
    ;
    // public methods:
    /**
     * Concatenates the specified matrix properties with this matrix. All parameters are required.
     * @method prepend
     * @memberOf Matrix2D
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @param {number} tx
     * @param {number} ty
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    Matrix2D.prototype.prepend = function (a, b, c, d, tx, ty) {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        var tx1 = this.tx;
        var ty1 = this.ty;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
        return this.append(a1, b1, c1, d1, tx1, ty1);
    };
    ;
    /**
    * @description Save the current Matrix state
    * @method save
    * @memberOf Matrix2D
    * @return null
    **/
    Matrix2D.prototype.save = function () {
        this._stack.push([this.a, this.b, this.c, this.d, this.tx, this.ty]);
    };
    ;
    /**
     * Restore the last saved matrix state
     * @method save
     * @memberOf tomhawk_ns.Matrix2D
     * @return null
     **/
    Matrix2D.prototype.restore = function () {
        var data = this._stack.pop();
        this.ty = data[5];
        this.tx = data[4];
        this.d = data[3];
        this.c = data[2];
        this.b = data[1];
        this.a = data[0];
    };
    ;
    /**
     * Appends the specified matrix properties with this matrix. All parameters are required.
     * @method append
     * @memberOf Matrix2D
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @param {number} tx
     * @param {number} ty
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    Matrix2D.prototype.append = function (a, b, c, d, tx, ty) {
        if (a === void 0) { a = 1; }
        if (b === void 0) { b = 0; }
        if (c === void 0) { c = 0; }
        if (d === void 0) { d = 1; }
        if (tx === void 0) { tx = 0; }
        if (ty === void 0) { ty = 0; }
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        this.a = a * a1 + b * c1;
        this.b = a * b1 + b * d1;
        this.c = c * a1 + d * c1;
        this.d = c * b1 + d * d1;
        this.tx = tx * a1 + ty * c1 + this.tx;
        this.ty = tx * b1 + ty * d1 + this.ty;
        return this;
    };
    ;
    Matrix2D.prototype.combine = function (matrices) {
        /*
        //identity
        this.a = this.d = 1;
        this.b = this.c = this.tx = this.ty = 0;
        */
        //multiple append
        var i = 0;
        var max = matrices.length;
        var mat = null;
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        for (i = 0; i < max; i++) {
            mat = matrices[i];
            this.a = mat.a * a1 + mat.b * c1;
            this.b = mat.a * b1 + mat.b * d1;
            this.c = mat.c * a1 + mat.d * c1;
            this.d = mat.c * b1 + mat.d * d1;
            this.tx = mat.tx * a1 + mat.ty * c1 + this.tx;
            this.ty = mat.tx * b1 + mat.ty * d1 + this.ty;
            a1 = this.a;
            b1 = this.b;
            c1 = this.c;
            d1 = this.d;
        }
        return this;
    };
    ;
    /**
     * Prepends the specified matrix with this matrix.
     * @method prependMatrix
     * @memberOf Matrix2D
     * @param {Matrix2D} matrix
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    Matrix2D.prototype.prependMatrix = function (matrix) {
        return this.prepend(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    };
    ;
    /**
     * Appends the specified matrix with this matrix.
     * @method appendMatrix
     * @memberOf Matrix2D
     * @param {Matrix2D} matrix
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    Matrix2D.prototype.appendMatrix = function (matrix) {
        this.append(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
        return this;
    };
    ;
    /**
     * Generates matrix properties from the specified display object transform properties, and prepends them with this matrix.
     * For example, you can use this to generate a matrix from a display object: let mtx = new Matrix2D();
     * mtx.prependTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation);
     * @method prependTransform
     * @memberOf Matrix2D
     * @param {number} x
     * @param {number} y
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {number} rotation
     * @param {number} skewX
     * @param {number} skewY
     * @param {number} pivotX Optional.
     * @param {number} pivotY Optional.
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    Matrix2D.prototype.prependTransform = function (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY) {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        var tx1 = this.tx;
        var ty1 = this.ty;
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.tx = 0;
        this.ty = 0;
        return this.appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)
            .append(a1, b1, c1, d1, tx1, ty1);
    };
    ;
    /**
     * Generates matrix properties from the specified display object transform properties, and appends them with this matrix.
     * For example, you can use this to generate a matrix from a display object: let mtx = new Matrix2D();
     * mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation);
     * @method appendTransform
     * @memberOf Matrix2D
     * @param {number} x
     * @param {number} y
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {number} rotation (in degrees)
     * @param {number} skewX
     * @param {number} skewY
     * @param {number} pivotX.
     * @param {number} pivotY.
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    Matrix2D.prototype.appendTransform = function (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY) {
        //translate + pivot 
        // scale
        // skew
        // rotation
        // translate back pivot
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (scaleX === void 0) { scaleX = 1; }
        if (scaleY === void 0) { scaleY = 1; }
        if (rotation === void 0) { rotation = 0; }
        if (skewX === void 0) { skewX = 0; }
        if (skewY === void 0) { skewY = 0; }
        if (pivotX === void 0) { pivotX = 0; }
        if (pivotY === void 0) { pivotY = 0; }
        var r = (rotation % 360) >> 0;
        var cos = utils_1.FAST_COS[r];
        var sin = utils_1.FAST_SIN[r];
        x += pivotX;
        y += pivotY;
        if (skewX > 0 || skewY > 0) {
            this.append(utils_1.FAST_COS[skewY], utils_1.FAST_SIN[skewY], -utils_1.FAST_SIN[skewX], utils_1.FAST_COS[skewX], x, y);
            this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
        }
        else {
            this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
        }
        this.tx -= pivotX * this.a + pivotY * this.c;
        this.ty -= pivotX * this.b + pivotY * this.d;
        return this;
    };
    ;
    /**
     * Applies a rotation transformation to the matrix.
     * @method rotate
     * @memberOf Matrix2D
     * @param {number} angle The angle in degrees.
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    Matrix2D.prototype.rotate = function (angle) {
        var r = (angle % 360) >> 0;
        var cos = utils_1.FAST_COS[r];
        var sin = utils_1.FAST_SIN[r];
        return this.append(cos, sin, -sin, cos, 0, 0);
    };
    ;
    /**
     * Applies a skew transformation to the matrix.
     * @method skew
     * @memberOf Matrix2D
     * @param {number} skewX The amount to skew horizontally in degrees.
     * @param {number} skewY The amount to skew vertically in degrees.
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
    */
    Matrix2D.prototype.skew = function (skewX, skewY) {
        skewX = skewX % 360;
        skewY = skewY % 360;
        return this.append(utils_1.FAST_COS[skewY], utils_1.FAST_SIN[skewY], -utils_1.FAST_SIN[skewX], utils_1.FAST_COS[skewX], 0, 0);
    };
    ;
    /**
     * Applies a scale transformation to the matrix.
     * @method scale
     * @memberOf Matrix2D
     * @param {number} x The amount to scale horizontally
     * @param {number} y The amount to scale vertically
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    Matrix2D.prototype.scale = function (x, y) {
        return this.append(x, 0, 0, y, 0, 0);
    };
    ;
    /**
     * Translates the matrix on the x and y axes.
     * @method translate
     * @memberOf Matrix2D
     * @param {number} x
     * @param {number} y
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    Matrix2D.prototype.translate = function (x, y) {
        return this.append(1, 0, 0, 1, x, y);
    };
    ;
    /**
     * Sets the properties of the matrix to those of an identity matrix (one that applies a null transformation).
     * @method identity
     * @memberOf Matrix2D
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    Matrix2D.prototype.identity = function () {
        this.a = this.d = 1;
        this.b = this.c = this.tx = this.ty = 0;
        return this;
    };
    ;
    /**
     * Inverts the matrix, causing it to perform the opposite transformation.
     * @method invert
     * @memberOf Matrix2D
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    Matrix2D.prototype.invert = function () {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        var tx1 = this.tx;
        var n = a1 * d1 - b1 * c1;
        this.a = d1 / n;
        this.b = -b1 / n;
        this.c = -c1 / n;
        this.d = a1 / n;
        this.tx = (c1 * this.ty - d1 * tx1) / n;
        this.ty = -(a1 * this.ty - b1 * tx1) / n;
        return this;
    };
    ;
    /**
     * Returns true if the matrix is an identity matrix.
     * @method isIdentity
     * @memberOf Matrix2D
     * @return {Boolean}
     **/
    Matrix2D.prototype.isIdentity = function () {
        return this.tx == 0 && this.ty == 0 && this.a == 1 && this.b == 0 && this.c == 0 && this.d == 1;
    };
    ;
    /**
     * Transforms a point according to this matrix.
     * @method transformPoint
     * @memberOf Matrix2D
     * @param {number} x The x component of the point to transform.
     * @param {number} y The y component of the point to transform.
     * @param {Point | Object} [pt] An object to copy the result into. If omitted a generic object with x/y properties will be returned.
     * @return {Point}
     **/
    Matrix2D.prototype.transformPoint = function (x, y, pt) {
        if (pt === void 0) { pt = null; }
        pt = (pt == null) ? new Point_1.Point() : pt;
        pt.x = x * this.a + y * this.c + this.tx;
        pt.y = x * this.b + y * this.d + this.ty;
        return pt;
    };
    ;
    /**
     * Decomposes the matrix into transform properties (x, y, scaleX, scaleY, and rotation). Note that this these values
     * may not match the transform properties you used to generate the matrix, though they will produce the same visual
     * results.
     * @method decompose
     * @memberOf Matrix2D
     * @param {Object} target The object to apply the transform properties to. If null, then a new object will be returned.
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
    */
    Matrix2D.prototype.decompose = function (target) {
        // TODO: it would be nice to be able to solve for whether the matrix can be decomposed into only scale/rotation
        // even when scale is negative
        if (target == null) {
            target = {};
        }
        target.x = this.tx;
        target.y = this.ty;
        target.scaleX = Math.sqrt(this.a * this.a + this.b * this.b);
        target.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
        var skewX = Math.atan2(-this.c, this.d);
        var skewY = Math.atan2(this.b, this.a);
        if (skewX == skewY) {
            target.rotation = skewY / utils_1.DEG_TO_RAD;
            if (this.a < 0 && this.d >= 0) {
                target.rotation += (target.rotation <= 0) ? 180 : -180;
            }
            target.skewX = target.skewY = 0;
        }
        else {
            target.skewX = skewX / utils_1.DEG_TO_RAD;
            target.skewY = skewY / utils_1.DEG_TO_RAD;
        }
        return target;
    };
    ;
    /**
     * Copies all properties from the specified matrix to this matrix.
     * @method copy
     * @memberOf Matrix2D
     * @param {Matrix2D} matrix The matrix to copy properties from.
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
    */
    Matrix2D.prototype.copy = function (matrix) {
        return this.initialize(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    };
    ;
    /**
     * Returns a clone of the Matrix2D instance.
     * @method clone
     * @memberOf Matrix2D
     * @return {Matrix2D} a clone of the Matrix2D instance.
     **/
    Matrix2D.prototype.clone = function () {
        return (new Matrix2D()).copy(this);
    };
    ;
    /**
    * @method toFlatObject
    * @memberOf Matrix2D
    * @description Exports the current Matrix2D to a flat Object ( no methods, just public properties )
    * @returns {Object} a flat Object
    **/
    Matrix2D.prototype.toFlatObject = function () {
        var obj = new Object();
        obj.a = this.a;
        obj.b = this.b;
        obj.c = this.c;
        obj.d = this.d;
        obj.tx = this.tx;
        obj.ty = this.ty;
        return obj;
    };
    ;
    /**
     * Returns a string representation of this object.
     * @method toString
     * @memberOf Matrix2D
     * @return {String} a string representation of the instance.
     **/
    Matrix2D.prototype.toString = function () {
        return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]";
    };
    ;
    /**
     * Returns a string JSON representation of this object.
     * @method toJSON
     * @memberOf Matrix2D
     * @return {String} a string representation of the instance (JSON format)
     **/
    Matrix2D.prototype.toJSON = function () {
        return JSON.stringify(this.toFlatObject());
    };
    ;
    return Matrix2D;
}());
exports.Matrix2D = Matrix2D;
