"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Vector3D = /** @class */ (function () {
    /**
     * @class Vector3D
     * @memberOf tomahawk_ns
     * @description The Vector3D class represents a point or a location in the three-dimensional space using the Cartesian coordinates x, y, and z. As in a two-dimensional space, the x property represents the horizontal axis and the y property represents the vertical axis. In three-dimensional space, the z property represents depth.
     * @constructor
     **/
    function Vector3D(x, y, z, w) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (w === void 0) { w = 1; }
        /**
        * @member x
        * @memberOf Vector3D
        * @type {number}
        * @description The first element of a Vector3D object, such as the x coordinate of a point in the three-dimensional space.
        **/
        this.x = 0;
        /**
        * @member y
        * @memberOf Vector3D
        * @type {number}
        * @description The second element of a Vector3D object, such as the y coordinate of a point in the three-dimensional space.
        **/
        this.y = 0;
        /**
        * @member z
        * @memberOf Vector3D
        * @type {number}
        * @description The third element of a Vector3D object, such as the z coordinate of a point in three-dimensional space.
        **/
        this.z = 0;
        /**
        * @member w
        * @memberOf Vector3D
        * @type {number}
        * @description The fourth element of a Vector3D object (in addition to the x, y, and z properties) can hold data such as the angle of rotation.
        **/
        this.w = 0;
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    /**
    * @method crossProduct
    * @memberOf Vector3D
    * @param {tomahawk_ns.Vector3D} vector A second Vector3D object.
    * @returns {tomahawk_ns.Vector3D} This Vector3D. Useful for chaining method calls.
    * @description Returns a new Vector3D object that is perpendicular (at a right angle) to the current Vector3D and another Vector3D object.
    **/
    Vector3D.prototype.crossProduct = function (vector) {
        var x = this.y * vector.z - this.z * vector.y;
        var y = this.z * vector.x - this.x * vector.z;
        var z = this.x * vector.y - this.y * vector.x;
        this.x = x;
        this.y = y;
        this.z = z;
        return new Vector3D(x, y, z, this.w);
    };
    ;
    return Vector3D;
}());
exports.Vector3D = Vector3D;
