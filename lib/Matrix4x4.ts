import { Matrix2D } from './Matrix2D';
import { Point3D } from './Point3D';
import { FAST_COS, FAST_SIN } from './utils';

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
* @class Matrix4x4
* @description A Basic implementation of a Matrix4x4 
* @memberOf 
* @constructor
**/

export class Matrix4x4 {



	/**
	 * @memberOf Matrix4x4
	 * @member {number[]} data
	 * @description a 16 number elements Array that contains the matrix data [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p]
	 * @readonly
	 **/
	public data: number[] = null;

	constructor(
		a: number = 1, b: number = 0, c: number = 0, d: number = 0,
		e: number = 0, f: number = 1, g: number = 0, h: number = 0,
		i: number = 0, j: number = 0, k: number = 1, l: number = 0,
		m: number = 0, n: number = 0, o: number = 0, p: number = 1
	) {
		this.init(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p);
	}



	/**
	* @method init
	* @description initialize the matrix properties
	* @memberOf Matrix4x4
	* @param {number} a
	* @param {number} b
	* @param {number} c
	* @param {number} d
	* @param {number} e
	* @param {number} f
	* @param {number} g
	* @param {number} h
	* @param {number} i
	* @param {number} j
	* @param {number} k
	* @param {number} l
	* @param {number} m
	* @param {number} n
	* @param {number} o
	* @param {number} p
	**/
	public init(
		a: number, b: number, c: number, d: number,
		e: number, f: number, g: number, h: number,
		i: number, j: number, k: number, l: number,
		m: number, n: number, o: number, p: number
	): Matrix4x4 {

		this.data = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p];
		return this;
	};

	/**
	* @method clone
	* @memberOf Matrix4x4
	* @description return a clone of the matrix
	* @returns {Matrix4x4}
	**/
	public clone(): Matrix4x4 {
		let matrix: Matrix4x4 = new Matrix4x4();
		let i = 16;

		while (--i > -1) {
			matrix.data[i] = this.data[i];
		}

		return matrix;
	};

	/**
	* @method translate
	* @memberOf Matrix4x4
	* @description translate the matrix by tx, ty, and tz
	* @param {number} tx
	* @param {number} ty
	* @param {number} tz
	* @returns {Matrix4x4} This instance. Useful for chaining method calls.
	**/
	public translate(tx: number, ty: number, tz: number): Matrix4x4 {
		TRANSLATE_MATRIX.data[3] = tx;
		TRANSLATE_MATRIX.data[7] = ty;
		TRANSLATE_MATRIX.data[11] = tz;

		this.appendMatrix(TRANSLATE_MATRIX);
		return this;
	};

	/**
	* @method scale
	* @memberOf Matrix4x4
	* @description scale the matrix by sx, sy, and sz
	* @param {number} sx
	* @param {number} sy
	* @param {number} sz
	* @returns {Matrix4x4} This instance. Useful for chaining method calls.
	**/
	public scale(sx: number, sy: number, sz: number): Matrix4x4 {
		SCALE_MATRIX.data[0] = sx;
		SCALE_MATRIX.data[5] = sy;
		SCALE_MATRIX.data[10] = sz;

		this.appendMatrix(SCALE_MATRIX);
		return this;
	};

	/**
	* @method rotate
	* @memberOf Matrix4x4
	* @description rotate the matrix by rx, ry, and rz
	* @param {number} rx
	* @param {number} ry
	* @param {number} rz
	* @returns {Matrix4x4} This instance. Useful for chaining method calls.
	**/
	public rotate(rx: number, ry: number, rz: number): Matrix4x4 {
		let c = FAST_COS[rx];
		let s = FAST_SIN[rx];

		ROTATION_X_MATRIX.data[5] = c;
		ROTATION_X_MATRIX.data[6] = -s;
		ROTATION_X_MATRIX.data[9] = s;
		ROTATION_X_MATRIX.data[10] = c;

		this.appendMatrix(ROTATION_X_MATRIX);

		c = FAST_COS[ry];
		s = FAST_SIN[ry];

		ROTATION_Y_MATRIX.data[0] = c;
		ROTATION_Y_MATRIX.data[2] = -s;
		ROTATION_Y_MATRIX.data[8] = s;
		ROTATION_Y_MATRIX.data[10] = c;

		this.appendMatrix(ROTATION_Y_MATRIX);

		c = FAST_COS[rz];
		s = FAST_SIN[rz];

		ROTATION_Z_MATRIX.data[0] = c;
		ROTATION_Z_MATRIX.data[1] = -s;
		ROTATION_Z_MATRIX.data[4] = s;
		ROTATION_Z_MATRIX.data[5] = c;

		this.appendMatrix(ROTATION_Z_MATRIX);
		return this;
	};

	/**
	* @method rotateX
	* @memberOf Matrix4x4
	* @description rotate the matrix by p_rotation degrees on the x axis
	* @param {number} p_rotation
	* @returns {Matrix4x4} This instance. Useful for chaining method calls.
	**/
	public rotateX(p_rotation: number): Matrix4x4 {
		let c = FAST_COS[p_rotation];
		let s = FAST_SIN[p_rotation];

		ROTATION_X_MATRIX.data[5] = c;
		ROTATION_X_MATRIX.data[6] = -s;
		ROTATION_X_MATRIX.data[9] = s;
		ROTATION_X_MATRIX.data[10] = c;

		this.appendMatrix(ROTATION_X_MATRIX);
		return this;
	};

	/**
	* @method rotateY
	* @memberOf Matrix4x4
	* @description rotate the matrix by p_rotation degrees on the y axis
	* @param {number} p_rotation
	* @returns {Matrix4x4} This instance. Useful for chaining method calls.
	**/
	public rotateY(p_rotation: number): Matrix4x4 {
		let c = FAST_COS[p_rotation];
		let s = FAST_SIN[p_rotation];

		ROTATION_Y_MATRIX.data[0] = c;
		ROTATION_Y_MATRIX.data[2] = -s;
		ROTATION_Y_MATRIX.data[8] = s;
		ROTATION_Y_MATRIX.data[10] = c;

		this.appendMatrix(ROTATION_Y_MATRIX);

		return this;
	};

	/**
	* @method rotateZ
	* @memberOf Matrix4x4
	* @description rotate the matrix by p_rotation degrees on the z axis
	* @param {number} p_rotation
	* @returns {Matrix4x4} This instance. Useful for chaining method calls.
	**/
	public rotateZ(p_rotation: number): Matrix4x4 {
		let c = FAST_COS[p_rotation];
		let s = FAST_SIN[p_rotation];

		ROTATION_Z_MATRIX.data[0] = c;
		ROTATION_Z_MATRIX.data[1] = -s;
		ROTATION_Z_MATRIX.data[4] = s;
		ROTATION_Z_MATRIX.data[5] = c;

		this.appendMatrix(ROTATION_Z_MATRIX);

		return this;
	};

	/**
	* @method multiplyBynumber
	* @memberOf Matrix4x4
	* @description multiply the current matrix by p_number
	* @param {number} value
	* @returns {Matrix4x4} This instance. Useful for chaining method calls.
	**/
	public multiplyBynumber(value: number): Matrix4x4 {
		let data1 = this.data;

		data1[0] *= value;
		data1[1] *= value;
		data1[2] *= value;
		data1[3] *= value;
		data1[4] *= value;
		data1[5] *= value;
		data1[6] *= value;
		data1[7] *= value;
		data1[8] *= value;
		data1[9] *= value;
		data1[10] *= value;
		data1[11] *= value;
		data1[12] *= value;
		data1[13] *= value;
		data1[14] *= value;
		data1[15] *= value;

		return this;
	};


	/**
	* @method appendTransform
	* @memberOf Matrix4x4
	* @description append transformation on the current matrix around the point defined by pivotX, pivotY and pivotZ
	* @param {number} p_number
	* @param {number} x
	* @param {number} y
	* @param {number} z
	* @param {number} scaleX
	* @param {number} scaleY
	* @param {number} scaleZ
	* @param {number} rotationX
	* @param {number} rotationY
	* @param {number} rotationZ
	* @param {number} pivotX
	* @param {number} pivotY
	* @param {number} pivotZ
	* @returns {Matrix4x4} This instance. Useful for chaining method calls.
	**/
	public appendTransform(
		x: number,
		y: number,
		z: number,
		scaleX: number,
		scaleY: number,
		scaleZ: number,
		rotationX: number,
		rotationY: number,
		rotationZ: number,
		pivotX: number,
		pivotY: number,
		pivotZ: number
	): Matrix4x4 {

		return this.translate(x + pivotX, y + pivotY, z + pivotZ)
			.scale(scaleX, scaleY, scaleZ)
			.rotate(rotationX, rotationY, rotationZ)
			.translate(-pivotX, -pivotY, -pivotZ);
	};

	/**
	 * Prepends the specified matrix with this matrix.
	 * @method prependMatrix
	 * @memberOf Matrix4x4
	 * @param {Matrix4x4} matrix
	 * @return {Matrix4x4} This matrix. Useful for chaining method calls.
	 **/
	public prependMatrix(mat: Matrix4x4): Matrix4x4 {
		let data1 = this.data;
		let data2 = mat.data;

		let a00 = data2[0], a01 = data2[1], a02 = data2[2], a03 = data2[3];
		let a10 = data2[4], a11 = data2[5], a12 = data2[6], a13 = data2[7];
		let a20 = data2[8], a21 = data2[9], a22 = data2[10], a23 = data2[11];
		let a30 = data2[12], a31 = data2[13], a32 = data2[14], a33 = data2[15];

		let b00 = data1[0], b01 = data1[1], b02 = data1[2], b03 = data1[3];
		let b10 = data1[4], b11 = data1[5], b12 = data1[6], b13 = data1[7];
		let b20 = data1[8], b21 = data1[9], b22 = data1[10], b23 = data1[11];
		let b30 = data1[12], b31 = data1[13], b32 = data1[14], b33 = data1[15];

		data1[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
		data1[1] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
		data1[2] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
		data1[3] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;

		data1[4] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
		data1[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
		data1[6] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
		data1[7] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;

		data1[8] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
		data1[9] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
		data1[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
		data1[11] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;

		data1[12] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
		data1[13] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
		data1[14] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
		data1[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;

		return this;
	};

	/**
	 * Appends the specified matrix with this matrix.
	 * @method appendMatrix
	 * @memberOf Matrix4x4
	 * @param {Matrix4x4} matrix
	 * @return {Matrix4x4} This matrix. Useful for chaining method calls.
	 **/
	public appendMatrix(mat: Matrix4x4): Matrix4x4 {
		let data1 = this.data;
		let data2 = mat.data;

		let a00 = data1[0], a01 = data1[1], a02 = data1[2], a03 = data1[3];
		let a10 = data1[4], a11 = data1[5], a12 = data1[6], a13 = data1[7];
		let a20 = data1[8], a21 = data1[9], a22 = data1[10], a23 = data1[11];
		let a30 = data1[12], a31 = data1[13], a32 = data1[14], a33 = data1[15];

		let b00 = data2[0], b01 = data2[1], b02 = data2[2], b03 = data2[3];
		let b10 = data2[4], b11 = data2[5], b12 = data2[6], b13 = data2[7];
		let b20 = data2[8], b21 = data2[9], b22 = data2[10], b23 = data2[11];
		let b30 = data2[12], b31 = data2[13], b32 = data2[14], b33 = data2[15];

		data1[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
		data1[1] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
		data1[2] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
		data1[3] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;

		data1[4] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
		data1[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
		data1[6] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
		data1[7] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;

		data1[8] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
		data1[9] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
		data1[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
		data1[11] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;

		data1[12] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
		data1[13] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
		data1[14] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
		data1[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;

		return this;
	};

	/**
	 * get the matrix determinant
	 * @method appendMatrix
	 * @memberOf Matrix4x4
	 * @return {number} the matrix determinant
	 **/
	public determinant(): number {
		let data = this.data;
		// Cache the matrix values (makes for huge speed increases!)
		let a00 = data[0], a01 = data[1], a02 = data[2], a03 = data[3];
		let a10 = data[4], a11 = data[5], a12 = data[6], a13 = data[7];
		let a20 = data[8], a21 = data[9], a22 = data[10], a23 = data[11];
		let a30 = data[12], a31 = data[13], a32 = data[14], a33 = data[15];

		return (a30 * a21 * a12 * a03 - a20 * a31 * a12 * a03 - a30 * a11 * a22 * a03 + a10 * a31 * a22 * a03 +
			a20 * a11 * a32 * a03 - a10 * a21 * a32 * a03 - a30 * a21 * a02 * a13 + a20 * a31 * a02 * a13 +
			a30 * a01 * a22 * a13 - a00 * a31 * a22 * a13 - a20 * a01 * a32 * a13 + a00 * a21 * a32 * a13 +
			a30 * a11 * a02 * a23 - a10 * a31 * a02 * a23 - a30 * a01 * a12 * a23 + a00 * a31 * a12 * a23 +
			a10 * a01 * a32 * a23 - a00 * a11 * a32 * a23 - a20 * a11 * a02 * a33 + a10 * a21 * a02 * a33 +
			a20 * a01 * a12 * a33 - a00 * a21 * a12 * a33 - a10 * a01 * a22 * a33 + a00 * a11 * a22 * a33);
	};

	/**
	 * Sets the properties of the matrix to those of an identity matrix (one that applies a null transformation).
	 * @method identity
	 * @memberOf Matrix4x4
	 * @return {Matrix4x4} This matrix. Useful for chaining method calls.
	 **/
	public identity(): Matrix4x4 {
		this.init(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		return this;
	};

	/**
	 * Inverts the matrix, causing it to perform the opposite transformation.
	 * @method invert
	 * @memberOf Matrix4x4
	 * @return {Matrix4x4} This matrix. Useful for chaining method calls.
	 **/
	public invert(): Matrix4x4 {
		let data = this.data;
		// Cache the matrix values (makes for huge speed increases!)
		let a00 = data[0], a01 = data[1], a02 = data[2], a03 = data[3];
		let a10 = data[4], a11 = data[5], a12 = data[6], a13 = data[7];
		let a20 = data[8], a21 = data[9], a22 = data[10], a23 = data[11];
		let a30 = data[12], a31 = data[13], a32 = data[14], a33 = data[15];

		let b00 = a00 * a11 - a01 * a10;
		let b01 = a00 * a12 - a02 * a10;
		let b02 = a00 * a13 - a03 * a10;
		let b03 = a01 * a12 - a02 * a11;
		let b04 = a01 * a13 - a03 * a11;
		let b05 = a02 * a13 - a03 * a12;
		let b06 = a20 * a31 - a21 * a30;
		let b07 = a20 * a32 - a22 * a30;
		let b08 = a20 * a33 - a23 * a30;
		let b09 = a21 * a32 - a22 * a31;
		let b10 = a21 * a33 - a23 * a31;
		let b11 = a22 * a33 - a23 * a32;

		// Calculate the determinant (inlined to avoid double-caching)
		let d = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
		let id = 1 / d;

		data[0] = (a11 * b11 - a12 * b10 + a13 * b09) * id;
		data[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * id;
		data[2] = (a31 * b05 - a32 * b04 + a33 * b03) * id;
		data[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * id;
		data[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * id;
		data[5] = (a00 * b11 - a02 * b08 + a03 * b07) * id;
		data[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * id;
		data[7] = (a20 * b05 - a22 * b02 + a23 * b01) * id;
		data[8] = (a10 * b10 - a11 * b08 + a13 * b06) * id;
		data[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * id;
		data[10] = (a30 * b04 - a31 * b02 + a33 * b00) * id;
		data[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * id;
		data[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * id;
		data[13] = (a00 * b09 - a01 * b07 + a02 * b06) * id;
		data[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * id;
		data[15] = (a20 * b03 - a21 * b01 + a22 * b00) * id;

		return this;
	};

	/**
	 * Transposes the matrix
	 * @method transpose
	 * @memberOf Matrix4x4
	 * @return {Matrix4x4} This matrix. Useful for chaining method calls.
	 **/
	public transpose(): Matrix4x4 {
		// Cache the matrix values (makes for huge speed increases!)
		let data = this.data;

		let a00 = data[0], a01 = data[1], a02 = data[2], a03 = data[3];
		let a10 = data[4], a11 = data[5], a12 = data[6], a13 = data[7];
		let a20 = data[8], a21 = data[9], a22 = data[10], a23 = data[11];
		let a30 = data[12], a31 = data[13], a32 = data[14], a33 = data[15];

		data[0] = a00;
		data[1] = a10;
		data[2] = a20;
		data[3] = a30;
		data[4] = a01;
		data[5] = a11;
		data[6] = a21;
		data[7] = a31;
		data[8] = a02;
		data[9] = a12;
		data[10] = a22;
		data[11] = a32;
		data[12] = a03;
		data[13] = a13;
		data[14] = a23;
		data[15] = a33;

		return this;
	};

	/**
	 * Sets the matrix frustum
	 * @method frustum
	 * @memberOf Matrix4x4
	 * @return {Matrix4x4} This matrix. Useful for chaining method calls.
	 **/
	public frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4x4 {
		let data = this.data;
		let temp1 = 2 * near;
		let temp2 = right - left;
		let temp3 = top - bottom;
		let temp4 = far - near;

		data[0] = temp1 / temp2;
		data[1] = 0;
		data[2] = 0;
		data[3] = 0;
		data[4] = 0;
		data[5] = temp1 / temp3;
		data[6] = 0;
		data[7] = 0;
		data[8] = (right + left) / temp2;
		data[9] = (top + bottom) / temp3;
		data[10] = (-far - near) / temp4;
		data[11] = -1;
		data[12] = 0;
		data[13] = 0;
		data[14] = (-temp1 * far) / temp4;
		data[15] = 0;
		return this;
	};

	/**
	 * Applies a perspective on the current matrix
	 * @method perspective
	 * @memberOf Matrix4x4
	 * @return {Matrix4x4} This matrix. Useful for chaining method calls.
	 **/
	public perspective(fovy: number, aspect: number, near: number, far: number): Matrix4x4 {
		let top = near * Math.tan(fovy * Math.PI / 360);
		let right = top * aspect;
		this.frustum(-right, right, -top, top, near, far);
		return this;
	};

	/**
	 * Applies an orthographic projection on the current matrix
	 * @method ortho
	 * @memberOf Matrix4x4
	 * @return {Matrix4x4} This matrix. Useful for chaining method calls.
	 **/
	public ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4x4 {
		let lr = (left - right);
		let tb = (top - bottom);
		let fn = (far - near);
		let data = this.data;
		data[0] = 2 / lr;
		data[1] = 0;
		data[2] = 0;
		data[3] = 0;
		data[4] = 0;
		data[5] = 2 / tb;
		data[6] = 0;
		data[7] = 0;
		data[8] = 0;
		data[9] = 0;
		data[10] = -2 / fn;
		data[11] = 0;
		data[12] = (left + right) / lr;
		data[13] = (top + bottom) / tb;
		data[14] = (far + near) / fn;
		data[15] = 1;

		return this;
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @memberOf Matrix4x4
	 * @return {String} a string representation of the instance.
	 **/
	public str(): string {
		let data = this.data;
		return '[\n' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + data[3] +
			'\n, ' + data[4] + ', ' + data[5] + ', ' + data[6] + ', ' + data[7] +
			'\n, ' + data[8] + ', ' + data[9] + ', ' + data[10] + ', ' + data[11] +
			'\n, ' + data[12] + ', ' + data[13] + ', ' + data[14] + ', ' + data[15] + ']';
	};


	/**
	 * Transforms a Point3D according to this matrix.
	 * @method transformPoint3D
	 * @memberOf Matrix4x4
	 * @param {Point3D}
	 * @return {Point3D}
	 **/
	public transformPoint3D(point: Point3D): Point3D {

		let mat1 = new Matrix4x4();
		mat1.translate(point.x, point.y, point.z).prependMatrix(this);

		point.x = mat1.data[3];
		point.y = mat1.data[7];
		point.z = mat1.data[11];
		return point;
	};




	/**
	 * static methods
	 */

	/**
	 * Converts the "mat" matrix into a Matrix2D
	 * @method toMatrix2D
	 * @memberOf Matrix4x4
	 * @param {Matrix4x4} mat the matrix you want to convert
	 * @return {Matrix2D}
	 **/
	public static toMatrix2D(mat: Matrix4x4): Matrix2D {
		let matrix2D = new Matrix2D();
		matrix2D.a = mat.data[0];
		matrix2D.b = mat.data[4];
		matrix2D.c = mat.data[1];
		matrix2D.d = mat.data[5];
		matrix2D.tx = mat.data[3];
		matrix2D.ty = mat.data[7];

		return matrix2D;
	};

	/**
	 * Converts the "mat2d" matrix into a Matrix4x4
	 * @method toMatrix4x4
	 * @memberOf Matrix4x4
	 * @param {Matrix2D} mat the matrix you want to convert
	 * @return {Matrix4x4}
	 **/
	public static toMatrix4x4(mat2d: Matrix2D): Matrix4x4 {
		let mat = new Matrix4x4();
		mat.data[0] = mat2d.a;
		mat.data[4] = mat2d.b;
		mat.data[1] = mat2d.c;
		mat.data[5] = mat2d.d;
		mat.data[3] = mat2d.tx;
		mat.data[7] = mat2d.ty;

		return mat;
	};
}


const ROTATION_X_MATRIX: Matrix4x4 = new Matrix4x4(
	1, 0, 0, 0,
	0, FAST_COS[0], -FAST_SIN[0], 0,
	0, FAST_SIN[0], FAST_COS[0], 0,
	0, 0, 0, 1
);

const ROTATION_Y_MATRIX: Matrix4x4 = new Matrix4x4(
	FAST_COS[0], 0, -FAST_SIN[0], 0,
	0, 1, 0, 0,
	FAST_SIN[0], 0, FAST_COS[0], 0,
	0, 0, 0, 1
);

const ROTATION_Z_MATRIX: Matrix4x4 = new Matrix4x4(
	FAST_COS[0], -FAST_SIN[0], 0, 0,
	FAST_SIN[0], FAST_COS[0], 0, 0,
	0, 0, 1, 0,
	0, 0, 0, 1
);

const TRANSLATE_MATRIX: Matrix4x4 = new Matrix4x4(
	1, 0, 0, 0,
	0, 1, 0, 0,
	0, 0, 1, 0,
	0, 0, 0, 1
);

const SCALE_MATRIX: Matrix4x4 = new Matrix4x4(
	1, 0, 0, 0,
	0, 1, 0, 0,
	0, 0, 1, 0,
	0, 0, 0, 1
);
