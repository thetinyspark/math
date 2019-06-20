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

export class Vector3D{
	
	/**
	 * @class Vector3D
	 * @memberOf tomahawk_ns
	 * @description The Vector3D class represents a point or a location in the three-dimensional space using the Cartesian coordinates x, y, and z. As in a two-dimensional space, the x property represents the horizontal axis and the y property represents the vertical axis. In three-dimensional space, the z property represents depth.
	 * @constructor
	 **/
	constructor(x:number = 0,y:number = 0,z:number = 0, w:number = 1)
	{
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}
	
	/**
	* @member x
	* @memberOf Vector3D
	* @type {number}
	* @description The first element of a Vector3D object, such as the x coordinate of a point in the three-dimensional space.
	**/
	public x:number = 0;
	
	/**
	* @member y
	* @memberOf Vector3D
	* @type {number}
	* @description The second element of a Vector3D object, such as the y coordinate of a point in the three-dimensional space.
	**/
	public y:number = 0;
	
	/**
	* @member z
	* @memberOf Vector3D
	* @type {number}
	* @description The third element of a Vector3D object, such as the z coordinate of a point in three-dimensional space.
	**/
	public z:number = 0;
	
	/**
	* @member w
	* @memberOf Vector3D
	* @type {number}
	* @description The fourth element of a Vector3D object (in addition to the x, y, and z properties) can hold data such as the angle of rotation.
	**/
	public w:number = 0;
	
	/**
	* @method crossProduct
	* @memberOf Vector3D
	* @param {tomahawk_ns.Vector3D} vector A second Vector3D object.
	* @returns {tomahawk_ns.Vector3D} This Vector3D. Useful for chaining method calls.
	* @description Returns a new Vector3D object that is perpendicular (at a right angle) to the current Vector3D and another Vector3D object.
	**/
	public crossProduct(vector):Vector3D
	{
		let x:number = this.y * vector.z - this.z * vector.y;
		let y:number = this.z * vector.x - this.x * vector.z;
		let z:number = this.x * vector.y - this.y * vector.x;
		
		this.x = x;
		this.y = y;
		this.z = z;
		return new Vector3D(x, y, z, this.w);
	};
	
}