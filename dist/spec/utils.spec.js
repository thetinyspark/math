"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var utils_1 = require("../lib/utils");
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
describe("test utils methods", function () {
    it("should return a 45 degrees angle ( but in radians )", function () {
        var pointA = new lib_1.Point(0, 0);
        var pointB = new lib_1.Point(100, 0);
        var pointC = new lib_1.Point(100, 100);
        var angle = (utils_1.findAngleInTriangle(pointA, pointB, pointC) * utils_1.RAD_TO_DEG) >> 0;
        expect(angle).toBe(45);
    });
    it("should return a 180 degrees angle ( but in radians )", function () {
        var pointA = new lib_1.Point(0, 0);
        var pointB = new lib_1.Point(100, 0);
        var pointC = new lib_1.Point(-100, 0);
        var angle = (utils_1.findAngleInTriangle(pointA, pointB, pointC) * utils_1.RAD_TO_DEG) >> 0;
        expect(angle).toBe(180);
    });
    it("should return the next power of 2 number", function () {
        var tmp = 1;
        var i = 32;
        while (--i > 0) {
            tmp *= 2;
            expect(utils_1.getNextPowerOf2(tmp)).toBe(tmp * 2);
        }
    });
    it("should convert a pair of 2d (x,y) coordinates to a pair of isogrid (row,col) coordinates", function () {
        var point = new lib_1.Point();
        point = utils_1.screenToIso(0, 0, 100, 100);
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
        point = utils_1.screenToIso(50, 50, 100, 100);
        expect(point.x).toBe(0);
        expect(point.y).toBe(1);
        point = utils_1.screenToIso(0, 100, 100, 100);
        expect(point.x).toBe(1);
        expect(point.y).toBe(1);
    });
    it("should convert a pair of isogrid (row,col) coordinates to a pair of 2d (x,y) coordinates", function () {
        var point = new lib_1.Point();
        point = utils_1.isoToScreen(0, 0, 100, 100);
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
        point = utils_1.isoToScreen(0, 1, 100, 100);
        expect(point.x).toBe(50);
        expect(point.y).toBe(50);
        point = utils_1.isoToScreen(1, 1, 100, 100);
        expect(point.x).toBe(0);
        expect(point.y).toBe(100);
    });
    it("should have 360 cosinus, sinus && tan entries", function () {
        expect(utils_1.FAST_COS.length).toBe(360);
        expect(utils_1.FAST_SIN.length).toBe(360);
        expect(utils_1.FAST_TAN.length).toBe(360);
    });
    it("should return tan = 0, cos = 1, sin = 0 for angle = 0 degrees", function () {
        expect(utils_1.FAST_COS[0]).toBe(1);
        expect(utils_1.FAST_SIN[0]).toBe(0);
        expect(utils_1.FAST_TAN[0]).toBe(0);
    });
    it("should return tan = 0, cos = 0, sin = 1 for angle = 90 degrees", function () {
        expect(utils_1.FAST_COS[90]).toBe(0);
        expect(utils_1.FAST_SIN[90]).toBe(1);
        expect(utils_1.FAST_TAN[90]).toBe(Math.tan(90 * utils_1.DEG_TO_RAD));
    });
    it("should rotate the point", function () {
        var center = new lib_1.Point(100, 100);
        var target = new lib_1.Point(100, 0);
        var rotated = utils_1.rotateAroundCenter(target, center, 90);
        expect(rotated.x).toBe(100);
        expect(rotated.y).toBe(200);
    });
});
