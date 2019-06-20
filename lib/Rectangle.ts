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

export class Rectangle {

	/**
	 * @class Rectangle
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 * @description Represents a rectangle
	 * @constructor
	 **/
	constructor(x:number = 0, y:number = 0, width:number = 0, height:number = 0) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.left = this.x;
		this.top = this.y;
		this.right = this.x + this.width;
		this.bottom = this.y + this.height;
	}


	/**
	* @member x
	* @memberOf Rectangle
	* @type {number}
	* @description The x coordinate of the top-left corner of the rectangle.
	**/
	public x:number = 0;

	/**
	* @member y
	* @memberOf Rectangle
	* @type {number}
	* @description The y coordinate of the top-left corner of the rectangle.
	**/
	public y:number = 0;

	/**
	* @member width
	* @memberOf Rectangle
	* @type {number}
	* @description the width of the rectangle, in pixels.
	**/
	public width:number = 0;

	/**
	* @member height
	* @memberOf Rectangle
	* @type {number}
	* @description the height of the rectangle, in pixels.
	**/
	public height:number = 0;

	/**
	* @member left
	* @memberOf Rectangle
	* @type {number}
	* @description The x coordinate of the top-left corner of the rectangle.
	**/
	public left:number = 0;

	/**
	* @member right
	* @memberOf Rectangle
	* @type {number}
	* @description The sum of the x and width properties.
	**/
	public right:number = 0;

	/**
	* @member top
	* @memberOf Rectangle
	* @type {number}
	* @description The y coordinate of the top-left corner of the rectangle.
	**/

	public top:number = 0;
	/**
	* @member bottom
	* @memberOf Rectangle
	* @type {number}
	* @description The sum of the y and height properties.
	**/
	public bottom:number = 0;
}