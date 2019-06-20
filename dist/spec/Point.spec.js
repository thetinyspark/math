"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("../lib/Point");
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
describe('test Point class', function () {
    var point1 = null;
    var point2 = null;
    beforeEach(function () {
        point1 = new Point_1.Point(10, 110);
        point2 = new Point_1.Point(150, 400);
    });
    it("should have a 'x' property set to 10", function () {
        expect(point1.x).toBe(10);
    });
    it("should have a 'y' property set to 110", function () {
        expect(point1.y).toBe(110);
    });
    it("should calculate the right distance", function () {
        var distance = Point_1.Point.getDistanceBetween(point1, point2);
        // Thank you Pythagore
        var expected = Math.sqrt((point2.x - point1.x) * (point2.x - point1.x) + (point2.y - point1.y) * (point2.y - point1.y));
        expect(distance).toBe(expected);
    });
});
