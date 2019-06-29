import { Matrix4x4, Point3D, Quaternion } from "../lib";

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

describe('test Quaternion class', () => {

    // init 
    it(
        "should init the quaternion properly",
        () => {
            let quat:Quaternion = new Quaternion();
            expect([quat.x, quat.y, quat.y, quat.w]).toEqual([0,0,0,1]);
        }
    );

    // clone 
    it(
        "should clone the quat properly",
        () => {
            let quat1:Quaternion = new Quaternion();
            let quat2:Quaternion = quat1.clone();
            expect([quat1.x, quat1.y, quat1.y, quat1.w]).toEqual([quat2.x, quat2.y, quat2.y, quat2.w]);
        }
    );

    // identity
    it(
        "should be the identity quaternion",
        () => {
            let quat:Quaternion = new Quaternion();
            quat.rotateX(90);
            quat.identity();
            expect([quat.x, quat.y, quat.z, quat.w]).toEqual([0, 0, 0, 1]);
        }
    );

    // invert
    it(
        "should invert the quaternion properly",
        () => {
            let quat:Quaternion = new Quaternion();
            quat.rotateX(90);
            quat.multiply( quat.clone().invert() );
            expect([quat.x, quat.y, quat.z, quat.w]).toEqual([0, 0, 0, 1]);
        }
    );
});