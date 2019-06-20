import { Matrix2D } from './Matrix2D';
import { Point3D } from './Point3D';
/**
* @class Matrix4x4
* @description A Basic implementation of a Matrix4x4
* @memberOf
* @constructor
**/
export declare class Matrix4x4 {
    /**
     * @memberOf Matrix4x4
     * @member {number[]} data
     * @description a 16 number elements Array that contains the matrix data [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p]
     * @readonly
     **/
    data: number[];
    constructor(a?: number, b?: number, c?: number, d?: number, e?: number, f?: number, g?: number, h?: number, i?: number, j?: number, k?: number, l?: number, m?: number, n?: number, o?: number, p?: number);
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
    init(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number): Matrix4x4;
    /**
    * @method clone
    * @memberOf Matrix4x4
    * @description return a clone of the matrix
    * @returns {Matrix4x4}
    **/
    clone(): Matrix4x4;
    /**
    * @method translate
    * @memberOf Matrix4x4
    * @description translate the matrix by tx, ty, and tz
    * @param {number} tx
    * @param {number} ty
    * @param {number} tz
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    translate(tx: number, ty: number, tz: number): Matrix4x4;
    /**
    * @method scale
    * @memberOf Matrix4x4
    * @description scale the matrix by sx, sy, and sz
    * @param {number} sx
    * @param {number} sy
    * @param {number} sz
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    scale(sx: number, sy: number, sz: number): Matrix4x4;
    /**
    * @method rotate
    * @memberOf Matrix4x4
    * @description rotate the matrix by rx, ry, and rz
    * @param {number} rx
    * @param {number} ry
    * @param {number} rz
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    rotate(rx: number, ry: number, rz: number): Matrix4x4;
    /**
    * @method rotateX
    * @memberOf Matrix4x4
    * @description rotate the matrix by p_rotation degrees on the x axis
    * @param {number} p_rotation
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    rotateX(p_rotation: number): Matrix4x4;
    /**
    * @method rotateY
    * @memberOf Matrix4x4
    * @description rotate the matrix by p_rotation degrees on the y axis
    * @param {number} p_rotation
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    rotateY(p_rotation: number): Matrix4x4;
    /**
    * @method rotateZ
    * @memberOf Matrix4x4
    * @description rotate the matrix by p_rotation degrees on the z axis
    * @param {number} p_rotation
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    rotateZ(p_rotation: number): Matrix4x4;
    /**
    * @method multiplyBynumber
    * @memberOf Matrix4x4
    * @description multiply the current matrix by p_number
    * @param {number} value
    * @returns {Matrix4x4} This instance. Useful for chaining method calls.
    **/
    multiplyBynumber(value: number): Matrix4x4;
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
    appendTransform(x: number, y: number, z: number, scaleX: number, scaleY: number, scaleZ: number, rotationX: number, rotationY: number, rotationZ: number, pivotX: number, pivotY: number, pivotZ: number): Matrix4x4;
    /**
     * Prepends the specified matrix with this matrix.
     * @method prependMatrix
     * @memberOf Matrix4x4
     * @param {Matrix4x4} matrix
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    prependMatrix(mat: Matrix4x4): Matrix4x4;
    /**
     * Appends the specified matrix with this matrix.
     * @method appendMatrix
     * @memberOf Matrix4x4
     * @param {Matrix4x4} matrix
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    appendMatrix(mat: Matrix4x4): Matrix4x4;
    /**
     * get the matrix determinant
     * @method appendMatrix
     * @memberOf Matrix4x4
     * @return {number} the matrix determinant
     **/
    determinant(): number;
    /**
     * Sets the properties of the matrix to those of an identity matrix (one that applies a null transformation).
     * @method identity
     * @memberOf Matrix4x4
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    identity(): Matrix4x4;
    /**
     * Inverts the matrix, causing it to perform the opposite transformation.
     * @method invert
     * @memberOf Matrix4x4
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    invert(): Matrix4x4;
    /**
     * Transposes the matrix
     * @method transpose
     * @memberOf Matrix4x4
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    transpose(): Matrix4x4;
    /**
     * Sets the matrix frustum
     * @method frustum
     * @memberOf Matrix4x4
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4x4;
    /**
     * Applies a perspective on the current matrix
     * @method perspective
     * @memberOf Matrix4x4
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    perspective(fovy: number, aspect: number, near: number, far: number): Matrix4x4;
    /**
     * Applies an orthographic projection on the current matrix
     * @method ortho
     * @memberOf Matrix4x4
     * @return {Matrix4x4} This matrix. Useful for chaining method calls.
     **/
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4x4;
    /**
     * Returns a string representation of this object.
     * @method toString
     * @memberOf Matrix4x4
     * @return {String} a string representation of the instance.
     **/
    str(): string;
    /**
     * Transforms a Point3D according to this matrix.
     * @method transformPoint3D
     * @memberOf Matrix4x4
     * @param {Point3D}
     * @return {Point3D}
     **/
    transformPoint3D(point: Point3D): Point3D;
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
    static toMatrix2D(mat: Matrix4x4): Matrix2D;
    /**
     * Converts the "mat2d" matrix into a Matrix4x4
     * @method toMatrix4x4
     * @memberOf Matrix4x4
     * @param {Matrix2D} mat the matrix you want to convert
     * @return {Matrix4x4}
     **/
    static toMatrix4x4(mat2d: Matrix2D): Matrix4x4;
}
