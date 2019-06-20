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
var Point3D = /** @class */ (function () {
    /**
     * @class Point3D
     * @memberOf tomahawk_ns
     * @description a basic 3D point
     * @constructor
     * @param {number} x the value on the x axis
     * @param {number} y the value on the y axis
     * @param {number} z the value on the z axis
     **/
    function Point3D(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        /**
        * @member x
        * @memberOf Point3D
        * @type {number}
        * @description the value on the x axis.
        **/
        this.x = 0;
        /**
        * @member y
        * @memberOf Point3D
        * @type {number}
        * @description the value on the y axis.
        **/
        this.y = 0;
        /**
        * @member z
        * @memberOf Point3D
        * @type {number}
        * @description the value on the z axis.
        **/
        this.z = 0;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /**
    * @method getDistanceBetween
    * @description returns a distance between two points
    * @memberOf Point
    * @param {Point} pointA
    * @param {Point} pointB
    * @returns {number}
    **/
    Point3D.getDistanceBetween = function (pointA, pointB) {
        var distX = (pointB.x - pointA.x) * (pointB.x - pointA.x);
        var distY = (pointB.y - pointA.y) * (pointB.y - pointA.y);
        var distZ = (pointB.z - pointA.z) * (pointB.z - pointA.z);
        var segLength = Math.sqrt(distX + distY + distZ);
        return segLength;
    };
    ;
    return Point3D;
}());
exports.Point3D = Point3D;
