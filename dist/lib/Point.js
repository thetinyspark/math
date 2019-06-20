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
var Point = /** @class */ (function () {
    /**
     * @class Point
     * @description Represents a basic 2d point
     * @param {number} x the x value of the point on the x axis
     * @param {number} y the y value of the point on the y axis
     * @constructor
     **/
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        /**
        * @member {number} x the x position of  the point
        * @memberOf Point
        **/
        this.x = 0;
        /**
        * @member {number} y the y position of  the point
        * @memberOf Point
        **/
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    /**
    * @method getDistanceBetween
    * @description returns a distance between two points
    * @memberOf Point
    * @param {Point} pointA
    * @param {Point} pointB
    * @returns {number}
    **/
    Point.getDistanceBetween = function (pointA, pointB) {
        var distX = (pointB.x - pointA.x) * (pointB.x - pointA.x);
        var distY = (pointB.y - pointA.y) * (pointB.y - pointA.y);
        var segLength = Math.sqrt(distX + distY);
        return segLength;
    };
    ;
    return Point;
}());
exports.Point = Point;
