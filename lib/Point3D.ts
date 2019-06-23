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

export class Point3D {

	/**
	* @member x
	* @memberOf Point3D
	* @type {number}
	* @description the value on the x axis.
	**/
	public x: number = 0;
	/**
	* @member y
	* @memberOf Point3D
	* @type {number}
	* @description the value on the y axis.
	**/

	public y: number = 0;
	/**
	* @member z
	* @memberOf Point3D
	* @type {number}
	* @description the value on the z axis.
	**/

	public z: number = 0;
	/**
	 * @class Point3D
	 * @memberOf tomahawk_ns
	 * @description a basic 3D point
	 * @constructor
	 * @param {number} x the value on the x axis
	 * @param {number} y the value on the y axis
	 * @param {number} z the value on the z axis
	 **/

	constructor(x: number = 0, y: number = 0, z: number = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}


	/**
	 * Returns a string JSON representation of this object.
	 * @method toJSON
	 * @memberOf Point3D
	 * @return {String} a string representation of the instance (JSON format)
	 **/
	public toJSON(): string {
		return JSON.stringify(this);
	};

	/**
	 * Returns a clone of the Point3D instance.
	 * @method clone
	 * @memberOf Point3D
	 * @return {Point3D} a clone of the Point instance.
	 **/
	public clone(): Point3D {
		return new Point3D(this.x, this.y, this.z);
	};

	/**
	* @method getDistanceBetween
	* @description returns a distance between two points
	* @memberOf Point
	* @param {Point} pointA
	* @param {Point} pointB
	* @returns {number}
	**/
	public static getDistanceBetween(pointA: Point3D, pointB: Point3D): number {
		let distX: number = (pointB.x - pointA.x) * (pointB.x - pointA.x);
		let distY: number = (pointB.y - pointA.y) * (pointB.y - pointA.y);
		let distZ: number = (pointB.z - pointA.z) * (pointB.z - pointA.z);
		let segLength: number = Math.sqrt(distX + distY + distZ);
		return segLength;
	};



}