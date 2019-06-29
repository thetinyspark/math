import { FAST_SIN, FAST_COS } from "./utils";
import { Vector3D } from "./Vector3D";
import { Matrix4x4 } from "./Matrix4x4";

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

export class Quaternion {

	/**
	* @member x
	* @memberOf Quaternion
	* @type {number}
	* @description the value on the x axis.
	**/
    public x: number = 0;

	/**
	* @member y
	* @memberOf Quaternion
	* @type {number}
	* @description the value on the y axis.
	**/
    public y: number = 0;

	/**
	* @member z
	* @memberOf Quaternion
	* @type {number}
	* @description the value on the z axis.
	**/
    public z: number = 0;

	/**
	* @member w
	* @memberOf Quaternion
	* @type {number}
	* @description the homogeneous value
	**/
    public w: number = 0;


	/**
	 * @class Quaternion
	 * @memberOf Quaternion
	 * @description a basic Quaternion
	 * @constructor
	 * @param {number} x the value on the x axis
	 * @param {number} y the value on the y axis
	 * @param {number} z the value on the z axis
	 **/
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = 1;
    }

	/**
	 * Sets the properties of the quaternion to those of an identity quaternion (one that applies a null transformation).
	 * @method identity
	 * @memberOf Quaternion
	 * @return {Quaternion} This quaternion. Useful for chaining method calls.
	 **/
    public identity(): Quaternion {
        this.x = this.y = this.z = 0;
        this.w = 1;
        return this;
    }

    /**
     * Sets this quaternion from the given angle and rotation axis,
     * then returns it.
     *
     * @param {Vector3D} axis the axis around which to rotate
     * @param {Number} angle the angle in degrees
     * @return {Quaternion} This quaternion. Useful for chaining method calls.
     **/
    public setAxisAngle(axis: Vector3D, angle: number): Quaternion {
        angle = (angle < 0) ? -angle >> 1 : angle >> 1;
        angle = angle % 360;

        let s = FAST_SIN[angle];
        this.x = s * axis.x;
        this.y = s * axis.y;
        this.z = s * axis.z;

        this.w = FAST_COS[angle];
        return this;
    }

    /**
     * Gets the rotation axis and angle for this
     *  quaternion. If a quaternion is created with
     *  setAxisAngle, this method will return the same
     *  values as providied in the original parameter list
     *  OR functionally equivalent values.
     * Example: The quaternion formed by axis [0, 0, 1] and
     *  angle -90 is the same as the quaternion formed by
     *  [0, 0, 1] and 270. This method favors the latter.
     * @param  {vec3} out_axis  Vector receiving the axis of rotation
     * @return {Number}     Angle, in radians, of the rotation
     */
    public getAxisAngle(out_axis: Vector3D): number {
        let rad = Math.acos(this.w) * 2.0;
        let s = Math.sin(rad / 2.0);
        if (s > 0.0001) {
            out_axis.x = this.x / s;
            out_axis.y = this.y / s;
            out_axis.z = this.z / s;
        } else {
            // If s is zero, return any axis (no rotation - axis does not matter)
            out_axis.x = 1;
            out_axis.y = 0;
            out_axis.z = 0;
        }
        return rad;
    }

    /**
    * Multiplies this quaternion with another one
    *
    * @param {Quaternion} the Quaternion to multiply
    * @return {Quaternion} This quaternion. Useful for chaining method calls.
    */
    public multiply(quat: Quaternion): Quaternion {
        let ax = this.x, ay = this.y, az = this.z, aw = this.w;
        let bx = quat.x, by = quat.y, bz = quat.z, bw = quat.w;

        this.x = ax * bw + aw * bx + ay * bz - az * by;
        this.y = ay * bw + aw * by + az * bx - ax * bz;
        this.z = az * bw + aw * bz + ax * by - ay * bx;
        this.w = aw * bw - ax * bx - ay * by - az * bz;
        return this;
    }

    /**
     * Rotates this quaternion by the given angle about the X axis
     *
     * @param {number} angle the angle (in degrees) to rotate
     * @return {Quaternion} This quaternion. Useful for chaining method calls.
     */
    public rotateX(angle: number): Quaternion {
        angle = (angle < 0) ? -angle >> 1 : angle >> 1;
        angle = angle % 360;

        let ax = this.x, ay = this.y, az = this.z, aw = this.w;
        let bx = FAST_SIN[angle], bw = FAST_COS[angle];

        this.x = ax * bw + aw * bx;
        this.y = ay * bw + az * bx;
        this.z = az * bw - ay * bx;
        this.w = aw * bw - ax * bx;
        return this;
    }

    /**
     * Rotates this quaternion by the given angle about the Y axis
     *
     * @param {number} angle the angle (in degrees) to rotate
     * @return {Quaternion} This quaternion. Useful for chaining method calls.
     */
    public rotateY(angle: number): Quaternion {
        angle = (angle < 0) ? -angle >> 1 : angle >> 1;
        angle = angle % 360;

        let ax = this.x, ay = this.y, az = this.z, aw = this.w;
        let by = FAST_SIN[angle], bw = FAST_COS[angle];

        this.x = ax * bw - az * by;
        this.y = ay * bw + aw * by;
        this.z = az * bw + ax * by;
        this.w = aw * bw - ay * by;
        return this;
    }

    /**
     * Rotates this quaternion by the given angle about the Z axis
     *
     * @param {number} angle the angle (in degrees) to rotate
     * @return {Quaternion} This quaternion. Useful for chaining method calls.
     */
    public rotateZ(angle: number): Quaternion {
        angle = (angle < 0) ? -angle >> 1 : angle >> 1;
        angle = angle % 360;

        let ax = this.x, ay = this.y, az = this.z, aw = this.w;
        let bz = FAST_SIN[angle], bw = FAST_COS[angle];

        this.x = ax * bw + ay * bz;
        this.y = ay * bw - ax * bz;
        this.z = az * bw + aw * bz;
        this.w = aw * bw - az * bz;
        return this;
    }

    /**
     * Invert this quaternion
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate inverse of
     * @return {Quaternion} This quaternion. Useful for chaining method calls.
     */
    public invert(): Quaternion {
        let a0 = this.x, a1 = this.y, a2 = this.z, a3 = this.w;
        let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
        let invDot = dot ? 1.0 / dot : 0;

        // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

        this.x = -a0 * invDot;
        this.y = -a1 * invDot;
        this.z = -a2 * invDot;
        this.w = a3 * invDot;
        return this;
    }

    /**
     * Sets this quaternion values from the given euler angle x, y, z.
     *
     * @param {x} Angle to rotate around X axis in degrees.
     * @param {y} Angle to rotate around Y axis in degrees.
     * @param {z} Angle to rotate around Z axis in degrees.
     * @return {Quaternion} This quaternion. Useful for chaining method calls.
     */
    public fromEuler(x:number, y:number, z:number) {
        let halfToRad = 0.5 * Math.PI / 180.0;
        x *= halfToRad;
        y *= halfToRad;
        z *= halfToRad;

        let sx = Math.sin(x);
        let cx = Math.cos(x);
        let sy = Math.sin(y);
        let cy = Math.cos(y);
        let sz = Math.sin(z);
        let cz = Math.cos(z);

        this.x = sx * cy * cz - cx * sy * sz;
        this.y = cx * sy * cz + sx * cy * sz;
        this.z = cx * cy * sz - sx * sy * cz;
        this.w = cx * cy * cz + sx * sy * sz;

        return this;
    }

    /**
	* @method normalize normalizes this Quaternion
	* @memberOf Quaternion
	* @description Returns this quat. Useful for chaining method calls
	**/
	public normalize(): Quaternion {
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let w = this.w;
		let len = x * x + y * y + z * z + w * w;

		if (len > 0) {
			len = 1 / Math.sqrt(len);
		}

		this.x = x * len;
		this.y = y * len;
		this.z = z * len;
		this.w = w * len;
		return this;
    }
    
    /**
	* @method create a new Matrix4x4 object from this Quaternion
	* @memberOf Quaternion
	* @description Returns a new Matrix4x4 object.
	**/
    public toMatrix4x4():Matrix4x4 {
        let x = this.x, y = this.y, z = this.z, w = this.w;
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;
      
        let xx = x * x2;
        let yx = y * x2;
        let yy = y * y2;
        let zx = z * x2;
        let zy = z * y2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;
        let mat:Matrix4x4 = new Matrix4x4();
        let out:number[] = mat.data;
      
        out[0] = 1 - yy - zz;
        out[1] = yx + wz;
        out[2] = zx - wy;
        out[3] = 0;
      
        out[4] = yx - wz;
        out[5] = 1 - xx - zz;
        out[6] = zy + wx;
        out[7] = 0;
      
        out[8] = zx + wy;
        out[9] = zy - wx;
        out[10] = 1 - xx - yy;
        out[11] = 0;
      
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
      
        return mat;
      }


	/**
	 * Returns a string JSON representation of this object.
	 * @method toJSON
	 * @memberOf Quaternion
	 * @return {String} a string representation of the instance (JSON format)
	 **/
    public toJSON(): string {
        return JSON.stringify(this);
    };

	/**
	 * Returns a clone of the Quaternion instance.
	 * @method clone
	 * @memberOf Quaternion
	 * @return {Quaternion} a clone of the Point instance.
	 **/
    public clone(): Quaternion {
        let quat: Quaternion = new Quaternion(this.x, this.y, this.z);
        quat.w = this.w;
        return quat;
    };



}