import { Point } from "../lib";
import {  findAngleInTriangle, getNextPowerOf2, screenToIso, isoToScreen, RAD_TO_DEG, DEG_TO_RAD, FAST_COS, FAST_SIN, FAST_TAN,rotateAroundCenter } from "../lib/utils";

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

describe(
    "test utils methods",
    () => {

        it(
            "should return a 45 degrees angle ( but in radians )", 
            () => {
                let pointA:Point = new Point(0,0);
                let pointB:Point = new Point(100,0);
                let pointC:Point = new Point(100,100);
                let angle:number = (findAngleInTriangle(pointA, pointB, pointC) * RAD_TO_DEG) >> 0;
                expect(angle).toBe(45);
            }
        ); 

        
        it(
            "should return a 180 degrees angle ( but in radians )", 
            () => {
                let pointA:Point = new Point(0,0);
                let pointB:Point = new Point(100,0);
                let pointC:Point = new Point(-100,0);
                let angle:number = (findAngleInTriangle(pointA, pointB, pointC) * RAD_TO_DEG) >> 0;
                expect(angle).toBe(180);
            }
        ); 

        it(
            "should return the next power of 2 number", 
            () => {
                let tmp:number = 1;
                let i = 32;

                while( --i > 0 ){
                    tmp *= 2;
                    expect(getNextPowerOf2(tmp)).toBe(tmp * 2);
                }
            }
        );

        it(
            "should convert a pair of 2d (x,y) coordinates to a pair of isogrid (row,col) coordinates", 
            () => {
                let point:Point = new Point();

                point = screenToIso(0,0,100,100);
                expect(point.x).toBe(0);
                expect(point.y).toBe(0);

                point = screenToIso(50,50,100,100);
                expect(point.x).toBe(0);
                expect(point.y).toBe(1);

                
                point = screenToIso(0,100,100,100);
                expect(point.x).toBe(1);
                expect(point.y).toBe(1);
            }
        ); 

        it(
            "should convert a pair of isogrid (row,col) coordinates to a pair of 2d (x,y) coordinates", 
            () => {
                let point:Point = new Point();

                point = isoToScreen(0,0,100,100);
                expect(point.x).toBe(0);
                expect(point.y).toBe(0);                
                
                point = isoToScreen(0,1,100,100);
                expect(point.x).toBe(50);
                expect(point.y).toBe(50);

                          
                point = isoToScreen(1,1,100,100);
                expect(point.x).toBe(0);
                expect(point.y).toBe(100);
            }
        );

        it( 
            "should have 360 cosinus, sinus && tan entries", 
            () => {
                expect(FAST_COS.length).toBe(360);
                expect(FAST_SIN.length).toBe(360);
                expect(FAST_TAN.length).toBe(360);
            }
        ); 

        it (
            "should return tan = 0, cos = 1, sin = 0 for angle = 0 degrees", 
            () => {
                expect(FAST_COS[0]).toBe(1);
                expect(FAST_SIN[0]).toBe(0);
                expect(FAST_TAN[0]).toBe(0);
            }
        );

        it (
            "should return tan = 0, cos = 0, sin = 1 for angle = 90 degrees", 
            () => {
                expect(FAST_COS[90]).toBe(0);
                expect(FAST_SIN[90]).toBe(1);
                expect(FAST_TAN[90]).toBe( Math.tan(90 * DEG_TO_RAD ));
            }
        );

        it(
            "should rotate the point", 
            () => {
                let center:Point = new Point(100,100);
                let target:Point = new Point(100,0);
                let rotated:Point = rotateAroundCenter(target, center, 90);
                
                expect(rotated.x).toBe(100);
                expect(rotated.y).toBe(200);
            }
        );

    }
)