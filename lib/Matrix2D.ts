import { FAST_COS, FAST_SIN, DEG_TO_RAD, FAST_TAN } from "./utils";
import { Point } from "./Point";

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
* @class Matrix2D
* @description A Basic implementation of a Matrix3x3 
* @memberOf 
* @param {number} a
* @param {number} b
* @param {number} c
* @param {number} d
* @param {number} tx
* @param {number} ty
* @constructor
**/
export class Matrix2D {

	constructor(a: number = 1, b: number = 0, c: number = 0, d: number = 1, tx: number = 0, ty: number = 0) {
		this.initialize(a, b, c, d, tx, ty);
		this._stack = new Array();
	}

	private _stack: number[][] = null;

	// public properties:
	/**
	 * Position (0, 0) in a 3x3 affine transformation matrix.
	 * @member a
	 * @type number
	 * @memberOf Matrix2D
	 **/
	public a: number = 1;

	/**
	 * Position (0, 1) in a 3x3 affine transformation matrix.
	 * @member b
	 * @memberOf Matrix2D
	 * @type number
	 **/
	public b: number = 0;

	/**
	 * Position (1, 0) in a 3x3 affine transformation matrix.
	 * @member c
	 * @memberOf Matrix2D
	 * @type number
	 **/
	public c: number = 0;

	/**
	 * Position (1, 1) in a 3x3 affine transformation matrix.
	 * @member d
	 * @memberOf Matrix2D
	 * @type number
	 **/
	public d: number = 1;

	/**
	 * Position (2, 0) in a 3x3 affine transformation matrix.
	 * @member tx
	 * @memberOf Matrix2D
	 * @type number
	 **/
	public tx: number = 0;

	/**
	 * Position (2, 1) in a 3x3 affine transformation matrix.
	 * @member ty
	 * @memberOf Matrix2D
	 * @type number
	 **/
	public ty: number = 0;



	// constructor:
	/**
	 * Initialization method. Can also be used to reinitialize the instance.
	 * @method initialize
	 * @memberOf Matrix2D
	 * @param {number} [a=1] Specifies the a property for the new matrix.
	 * @param {number} [b=0] Specifies the b property for the new matrix.
	 * @param {number} [c=0] Specifies the c property for the new matrix.
	 * @param {number} [d=1] Specifies the d property for the new matrix.
	 * @param {number} [tx=0] Specifies the tx property for the new matrix.
	 * @param {number} [ty=0] Specifies the ty property for the new matrix.
	 * @return {Matrix2D} This instance. Useful for chaining method calls.
	*/
	public initialize(a: number = 1, b: number = 0, c: number = 0, d: number = 1, tx: number = 0, ty: number = 0): Matrix2D {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
		return this;
	};

	// public methods:
	/**
	 * Concatenates the specified matrix properties with this matrix. All parameters are required.
	 * @method prepend
	 * @memberOf Matrix2D
	 * @param {number} a
	 * @param {number} b
	 * @param {number} c
	 * @param {number} d
	 * @param {number} tx
	 * @param {number} ty
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	public prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix2D {

		let a1: number = this.a;
		let b1: number = this.b;
		let c1: number = this.c;
		let d1: number = this.d
		let tx1: number = this.tx;
		let ty1: number = this.ty;

		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;

		return this.append(a1, b1, c1, d1, tx1, ty1);
	};

	/**
	* @description Save the current Matrix state
	* @method save
	* @memberOf Matrix2D
	* @return null
	**/
	public save() {
		this._stack.push([this.a, this.b, this.c, this.d, this.tx, this.ty]);
	};

	/**
	 * Restore the last saved matrix state
	 * @method save
	 * @memberOf tomhawk_ns.Matrix2D
	 * @return null
	 **/
	public restore() {
		let data: number[] = this._stack.pop();
		this.ty = data[5];
		this.tx = data[4];
		this.d = data[3];
		this.c = data[2];
		this.b = data[1];
		this.a = data[0];
	};


	/**
	 * Appends the specified matrix properties with this matrix. All parameters are required.
	 * @method append
	 * @memberOf Matrix2D
	 * @param {number} a
	 * @param {number} b
	 * @param {number} c
	 * @param {number} d
	 * @param {number} tx
	 * @param {number} ty
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	public append(a: number = 1, b: number = 0, c: number = 0, d: number = 1, tx: number = 0, ty: number = 0): Matrix2D {
		let a1 = this.a;
		let b1 = this.b;
		let c1 = this.c;
		let d1 = this.d;

		this.a = a * a1 + b * c1;
		this.b = a * b1 + b * d1;
		this.c = c * a1 + d * c1;
		this.d = c * b1 + d * d1;
		this.tx = tx * a1 + ty * c1 + this.tx;
		this.ty = tx * b1 + ty * d1 + this.ty;
		return this;
	};

	public combine(matrices: Matrix2D[]): Matrix2D {

		/*		
		//identity
		this.a = this.d = 1;
		this.b = this.c = this.tx = this.ty = 0;
		*/

		//multiple append
		let i: number = 0;
		let max = matrices.length;
		let mat: Matrix2D = null;
		let a1: number = this.a;
		let b1: number = this.b;
		let c1: number = this.c;
		let d1: number = this.d;



		for (i = 0; i < max; i++) {
			mat = matrices[i];
			this.a = mat.a * a1 + mat.b * c1;
			this.b = mat.a * b1 + mat.b * d1;
			this.c = mat.c * a1 + mat.d * c1;
			this.d = mat.c * b1 + mat.d * d1;
			this.tx = mat.tx * a1 + mat.ty * c1 + this.tx;
			this.ty = mat.tx * b1 + mat.ty * d1 + this.ty;

			a1 = this.a;
			b1 = this.b;
			c1 = this.c;
			d1 = this.d;
		}

		return this;
	};

	/**
	 * Prepends the specified matrix with this matrix.
	 * @method prependMatrix
	 * @memberOf Matrix2D
	 * @param {Matrix2D} matrix
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	public prependMatrix(matrix: Matrix2D): Matrix2D {
		return this.prepend(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
	};

	/**
	 * Appends the specified matrix with this matrix.
	 * @method appendMatrix
	 * @memberOf Matrix2D
	 * @param {Matrix2D} matrix
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	public appendMatrix(matrix: Matrix2D): Matrix2D {
		this.append(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
		return this;
	};

	/**
	 * Generates matrix properties from the specified display object transform properties, and prepends them with this matrix.
	 * For example, you can use this to generate a matrix from a display object: let mtx = new Matrix2D();
	 * mtx.prependTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation);
	 * @method prependTransform
	 * @memberOf Matrix2D
	 * @param {number} x
	 * @param {number} y
	 * @param {number} scaleX
	 * @param {number} scaleY
	 * @param {number} rotation
	 * @param {number} skewX
	 * @param {number} skewY
	 * @param {number} pivotX Optional.
	 * @param {number} pivotY Optional.
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	public prependTransform(
		x: number, y: number,
		scaleX: number, scaleY: number,
		rotation: number, skewX: number, skewY: number,
		pivotX: number, pivotY: number
	): Matrix2D {

		let a1: number = this.a;
		let b1: number = this.b;
		let c1: number = this.c;
		let d1: number = this.d
		let tx1: number = this.tx;
		let ty1: number = this.ty;

		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;

		return this.appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)
			.append(a1, b1, c1, d1, tx1, ty1);
	};

	/**
	 * Generates matrix properties from the specified display object transform properties, and appends them with this matrix.
	 * For example, you can use this to generate a matrix from a display object: let mtx = new Matrix2D();
	 * mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation);
	 * @method appendTransform
	 * @memberOf Matrix2D
	 * @param {number} x
	 * @param {number} y
	 * @param {number} scaleX
	 * @param {number} scaleY
	 * @param {number} rotation (in degrees)
	 * @param {number} skewX
	 * @param {number} skewY
	 * @param {number} pivotX.
	 * @param {number} pivotY.
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	public appendTransform(
		x: number = 0, y: number = 0,
		scaleX: number = 1, scaleY: number = 1,
		rotation: number = 0,
		skewX: number = 0, skewY: number = 0,
		pivotX: number = 0, pivotY: number = 0
	): Matrix2D {

		//translate + pivot 
		// scale
		// skew
		// rotation
		// translate back pivot

		let r = (rotation % 360) >> 0;
		let cos = FAST_COS[r];
		let sin = FAST_SIN[r];

		x += pivotX;
		y += pivotY;

		if (skewX > 0 || skewY > 0) {
			this.append(FAST_COS[skewY], FAST_SIN[skewY], -FAST_SIN[skewX], FAST_COS[skewX], x, y);
			this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
		}
		else {
			this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
		}

		this.tx -= pivotX * this.a + pivotY * this.c;
		this.ty -= pivotX * this.b + pivotY * this.d;
		return this;
	};

	/**
	 * Applies a rotation transformation to the matrix.
	 * @method rotate
	 * @memberOf Matrix2D
	 * @param {number} angle The angle in degrees.
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	public rotate(angle: number): Matrix2D {

		let r = (angle % 360) >> 0;
		let cos = FAST_COS[r];
		let sin = FAST_SIN[r];

		return this.append(cos, sin, -sin, cos, 0, 0);
	};

	/**
	 * Applies a skew transformation to the matrix.
	 * @method skew
	 * @memberOf Matrix2D
	 * @param {number} skewX The amount to skew horizontally in degrees.
	 * @param {number} skewY The amount to skew vertically in degrees.
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	*/
	public skew(skewX: number, skewY: number): Matrix2D {

		skewX = skewX % 360;
		skewY = skewY % 360;

		skewX = ( skewX < 0 ) ? 360 + skewX : skewX;
		skewY = ( skewY < 0 ) ? 360 + skewY : skewY;

		return this.append(1,FAST_TAN[skewY], -FAST_TAN[skewX],1,0, 0);
	};

	/**
	 * Applies a scale transformation to the matrix.
	 * @method scale
	 * @memberOf Matrix2D
	 * @param {number} x The amount to scale horizontally
	 * @param {number} y The amount to scale vertically
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	public scale(x: number, y: number): Matrix2D {
		return this.append(x, 0, 0, y, 0, 0);
	};

	/**
	 * Translates the matrix on the x and y axes.
	 * @method translate
	 * @memberOf Matrix2D
	 * @param {number} x
	 * @param {number} y
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	public translate(x: number, y: number): Matrix2D {
		return this.append(1, 0, 0, 1, x, y);
	};

	/**
	 * Sets the properties of the matrix to those of an identity matrix (one that applies a null transformation).
	 * @method identity
	 * @memberOf Matrix2D
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	public identity(): Matrix2D {
		this.a = this.d = 1;
		this.b = this.c = this.tx = this.ty = 0;
		return this;
	};

	/**
	 * Inverts the matrix, causing it to perform the opposite transformation.
	 * @method invert
	 * @memberOf Matrix2D
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	public invert(): Matrix2D {
		let a1 = this.a;
		let b1 = this.b;
		let c1 = this.c;
		let d1 = this.d;
		let tx1 = this.tx;
		let n = a1 * d1 - b1 * c1;

		this.a = d1 / n;
		this.b = -b1 / n;
		this.c = -c1 / n;
		this.d = a1 / n;
		this.tx = (c1 * this.ty - d1 * tx1) / n;
		this.ty = -(a1 * this.ty - b1 * tx1) / n;
		return this;
	};

	/**
	 * Returns true if the matrix is an identity matrix.
	 * @method isIdentity
	 * @memberOf Matrix2D
	 * @return {Boolean}
	 **/
	public isIdentity(): boolean {
		return this.tx == 0 && this.ty == 0 && this.a == 1 && this.b == 0 && this.c == 0 && this.d == 1;
	};

	/**
	 * Transforms a point according to this matrix.
	 * @method transformPoint
	 * @memberOf Matrix2D
	 * @param {number} x The x component of the point to transform.
	 * @param {number} y The y component of the point to transform.
	 * @param {Point | Object} [pt] An object to copy the result into. If omitted a generic object with x/y properties will be returned.
	 * @return {Point}
	 **/
	public transformPoint(x: number, y: number, pt: Point = null): Point {
		pt = (pt == null) ? new Point() : pt;
		pt.x = x * this.a + y * this.c + this.tx;
		pt.y = x * this.b + y * this.d + this.ty;
		return pt;
	};

	/**
	 * Decomposes the matrix into transform properties (x, y, scaleX, scaleY, and rotation). Note that this these values
	 * may not match the transform properties you used to generate the matrix, though they will produce the same visual
	 * results.
	 * @method decompose
	 * @memberOf Matrix2D
	 * @param {Object} target The object to apply the transform properties to. If null, then a new object will be returned.
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	*/
	public decompose(target: any = null): any {
		// TODO: it would be nice to be able to solve for whether the matrix can be decomposed into only scale/rotation
		// even when scale is negative
		if (target == null) 
			target = {};

		target.x = this.tx;
		target.y = this.ty;
		target.scaleX = Math.sqrt(this.a * this.a + this.b * this.b);
		target.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);

		let skewX = Math.atan2(-this.c, this.d);
		let skewY = Math.atan2(this.b, this.a);

		if (skewX == skewY) {
			target.rotation = skewY / DEG_TO_RAD;
			if (this.a < 0 && this.d >= 0) {
				target.rotation += (target.rotation <= 0) ? 180 : -180;
			}
			target.skewX = target.skewY = 0;
		} else {
			target.skewX = skewX / DEG_TO_RAD;
			target.skewY = skewY / DEG_TO_RAD;
		}
		return target;
	};

	/**
	 * Copies all properties from the specified matrix to this matrix.
	 * @method copy
	 * @memberOf Matrix2D
	 * @param {Matrix2D} matrix The matrix to copy properties from.
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	*/
	public copy(matrix: Matrix2D): Matrix2D {
		return this.initialize(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
	};

	/**
	 * Returns a clone of the Matrix2D instance.
	 * @method clone
	 * @memberOf Matrix2D
	 * @return {Matrix2D} a clone of the Matrix2D instance.
	 **/
	public clone(): Matrix2D {
		return (new Matrix2D()).copy(this);
	};


	/**
	* @method toFlatObject
	* @memberOf Matrix2D
	* @description Exports the current Matrix2D to a flat Object ( no methods, just public properties )
	* @returns {Object} a flat Object
	**/
	public toFlatObject(): any {
		let obj: any = new Object();
		obj.a = this.a;
		obj.b = this.b;
		obj.c = this.c;
		obj.d = this.d;
		obj.tx = this.tx;
		obj.ty = this.ty;

		return obj;
	};

	/**
	* @method toArray
	* @memberOf Matrix2D
	* @description Exports the current Matrix2D to a flat array of data
	* @returns Array a flat array of data
	**/
	public toArray(): number[]{
		return [this.a, this.b, this.c, this.d, this.tx, this.ty];
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @memberOf Matrix2D
	 * @return {String} a string representation of the instance.
	 **/
	public toString(): string {
		return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]";
	};

	/**
	 * Returns a string JSON representation of this object.
	 * @method toJSON
	 * @memberOf Matrix2D
	 * @return {String} a string representation of the instance (JSON format)
	 **/
	public toJSON(): string {
		return JSON.stringify(this.toFlatObject());
	};
}