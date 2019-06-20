"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
* return the angle (in radians) in pointA according to te Al Kashi's theorem
* α = angleA, β = angleB, γ = angleC
* a² = b² + c² − 2bc.cos(α)
* b² = a² + c² − 2ac.cos(β)
* c² = a² + b² − 2ab.cos(γ)
* @method findAngleInTriangle

* @param {Point} pointA
* @param {Point} pointB
* @param {Point} pointC
* @return {number} the angle in pointA
*/
function findAngleInTriangle(pointA, pointB, pointC) {
    var AB = Point_1.Point.getDistanceBetween(pointA, pointB);
    var BC = Point_1.Point.getDistanceBetween(pointB, pointC);
    var AC = Point_1.Point.getDistanceBetween(pointA, pointC);
    var AB2 = AB * AB;
    var BC2 = BC * BC;
    var AC2 = AC * AC;
    var angle = Math.acos((AC2 + AB2 - BC2) / (2 * (AC * AB)));
    return angle;
}
exports.findAngleInTriangle = findAngleInTriangle;
;
/**
* return the next power of 2 greater or equal than the value passed in parameter
* @method getNextPowerOf2

* @param {number} value
* @return {number} the next power of 2
*/
function getNextPowerOf2(value) {
    var num = 1;
    while (num <= value) {
        num *= 2;
    }
    return num;
}
exports.getNextPowerOf2 = getNextPowerOf2;
;
/**
* Converts a pair of x,y coordinates with specifics cell's width and height into a pair of row,col
* @method screenToIso

* @param {number} x
* @param {number} y
* @param {number} cellW
* @param {number} cellH
* @return {Point} a Point Object which x  = row and y = col
*/
function screenToIso(x, y, cellW, cellH) {
    var obj = new Point_1.Point();
    var divY = y / cellH;
    var divX = x / cellW;
    obj.y = divY + divX;
    obj.x = divY - divX;
    return obj;
}
exports.screenToIso = screenToIso;
/**
* Converts a pair of row,col coordinates with specifics cell's width and height into a pair of x,y
* @method isoToScreen

* @param {number} row
* @param {number} col
* @param {number} cellW
* @param {number} cellH
* @return {Point} a Point Object
*/
function isoToScreen(row, col, cellW, cellH) {
    var x = (col - row) * (cellW * 0.5);
    var y = (col + row) * (cellH * 0.5);
    var pt = new Point_1.Point(x >> 0, y >> 0);
    return pt;
}
exports.isoToScreen = isoToScreen;
/**
* Rotates the target Point around the center Point according to the angle passed in param
* @method screenToIso

* @param {Point} target the point to rotate
* @param {Point} center the rotation center point
* @param {number} angle in degrees
* @return {Point} the rotated point
*/
function rotateAroundCenter(target, center, angle) {
    var radius = Point_1.Point.getDistanceBetween(target, center);
    return new Point_1.Point(center.x + (exports.FAST_COS[angle % 360] * radius), center.y + (exports.FAST_SIN[angle % 360] * radius));
}
exports.rotateAroundCenter = rotateAroundCenter;
/**
 * Usefull constants
 */
exports.FAST_COS = [];
exports.FAST_SIN = [];
exports.FAST_TAN = [];
exports.DEG_TO_RAD = Math.PI / 180;
exports.RAD_TO_DEG = 180 / Math.PI;
for (var i = 0; i < 360; i++) {
    var angle = i * exports.DEG_TO_RAD;
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var tan = Math.tan(angle);
    // precision of 4 digits tip
    cos = Math.round(cos * 1000) / 1000;
    sin = Math.round(sin * 1000) / 1000;
    tan = Math.round(tan * 1000) / 1000;
    exports.FAST_COS.push(cos);
    exports.FAST_SIN.push(sin);
    exports.FAST_TAN.push(tan);
}
