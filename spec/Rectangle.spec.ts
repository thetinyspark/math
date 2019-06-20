import { Rectangle } from "../lib/Rectangle";

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

describe('test Rectangle class', () => {

    it(
        "should have a 'x' property set to 100",
        () => {
            let rect:Rectangle = new Rectangle(100,100,100,100);
            expect(rect.x).toBe(100);
        }
    );

    it(
        "should have a 'y' property set to 100",
        () => {
            let rect:Rectangle = new Rectangle(100,100,100,100);
            expect(rect.y).toBe(100);
        }
    );

    it(
        "should have a 'width' property set to 100",
        () => {
            let rect:Rectangle = new Rectangle(100,100,100,100);
            expect(rect.width).toBe(100);
        }
    );

    it(
        "should have a 'height' property set to 100",
        () => {
            let rect:Rectangle = new Rectangle(100,100,100,100);
            expect(rect.height).toBe(100);
        }
    );

    it(
        "should have a 'left' property set to 100",
        () => {
            let rect:Rectangle = new Rectangle(100,100,100,100);
            expect(rect.left).toBe(100);
        }
    );

    it(
        "should have a 'top' property set to 100",
        () => {
            let rect:Rectangle = new Rectangle(100,100,100,100);
            expect(rect.top).toBe(100);
        }
    );

    it(
        "should have a 'right' property set to 200",
        () => {
            let rect:Rectangle = new Rectangle(100,100,100,100);
            expect(rect.right).toBe(200);
        }
    );

    it(
        "should have a 'bottom' property set to 200",
        () => {
            let rect:Rectangle = new Rectangle(100,100,100,100);
            expect(rect.bottom).toBe(200);
        }
    );

});