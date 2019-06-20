import {Point} from './Point';
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
export function findAngleInTriangle(pointA:Point, pointB:Point, pointC:Point):number {
	let AB = Point.getDistanceBetween(pointA, pointB);
	let BC = Point.getDistanceBetween(pointB, pointC);
	let AC = Point.getDistanceBetween(pointA, pointC);

	let AB2 = AB * AB;
	let BC2 = BC * BC;
	let AC2 = AC * AC;

	let angle = Math.acos((AC2 + AB2 - BC2) / (2 * (AC * AB)));
	return angle;
};

/**
* return the next power of 2 greater or equal than the value passed in parameter
* @method getNextPowerOf2

* @param {number} value
* @return {number} the next power of 2
*/
export function getNextPowerOf2(value:number):number
{
	let num = 1;
	while (num <= value) {
		num *= 2;
	}

	return num;
};

/**
* Converts a pair of x,y coordinates with specifics cell's width and height into a pair of row,col
* @method screenToIso

* @param {number} x
* @param {number} y
* @param {number} cellW
* @param {number} cellH
* @return {Point} a Point Object which x  = row and y = col
*/
export function screenToIso(x:number, y:number, cellW:number, cellH:number):Point {
	let obj:Point = new Point();
	let divY:number = y / cellH;
	let divX:number = x / cellW;
	obj.y = divY + divX;
	obj.x = divY - divX;
	return obj;
}

/**
* Converts a pair of row,col coordinates with specifics cell's width and height into a pair of x,y
* @method isoToScreen

* @param {number} row
* @param {number} col
* @param {number} cellW
* @param {number} cellH
* @return {Point} a Point Object
*/
export function isoToScreen(row:number, col:number, cellW:number, cellH:number):Point {
	let x:number = (col - row) * (cellW * 0.5);
	let y:number = (col + row) * (cellH * 0.5);
	let pt:Point = new Point(x >> 0, y >> 0);

	return pt;
}

/**
* Rotates the target Point around the center Point according to the angle passed in param
* @method screenToIso

* @param {Point} target the point to rotate
* @param {Point} center the rotation center point
* @param {number} angle in degrees
* @return {Point} the rotated point
*/
export function rotateAroundCenter(target:Point, center:Point, angle:number):Point{
	let radius:number = Point.getDistanceBetween(target, center);
	return new Point( 
		center.x + (FAST_COS[angle % 360 ] * radius),
		center.y + (FAST_SIN[angle % 360 ] * radius)
	);
}


/**
 * Usefull constants
 */

export const FAST_COS:number[] = [];
export const FAST_SIN:number[] = [];
export const FAST_TAN:number[] = [];
export const DEG_TO_RAD:number = Math.PI / 180;
export const RAD_TO_DEG:number = 180 / Math.PI;

for( let i:number = 0; i < 360; i++ ){

	let angle:number = i * DEG_TO_RAD;
	let cos:number = Math.cos(angle);
	let sin:number = Math.sin(angle);
	let tan:number = Math.tan(angle);


	// precision of 4 digits tip
	cos = Math.round( cos * 1000 ) / 1000;
	sin = Math.round( sin * 1000 ) / 1000;
	tan = Math.round( tan * 1000 ) / 1000;

    FAST_COS.push( cos );
    FAST_SIN.push( sin );
	FAST_TAN.push( tan );
	
}