import { Point } from "./Point";
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
export declare class Matrix2D {
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    private _stack;
    /**
     * Position (0, 0) in a 3x3 affine transformation matrix.
     * @member a
     * @type number
     * @memberOf Matrix2D
     **/
    a: number;
    /**
     * Position (0, 1) in a 3x3 affine transformation matrix.
     * @member b
     * @memberOf Matrix2D
     * @type number
     **/
    b: number;
    /**
     * Position (1, 0) in a 3x3 affine transformation matrix.
     * @member c
     * @memberOf Matrix2D
     * @type number
     **/
    c: number;
    /**
     * Position (1, 1) in a 3x3 affine transformation matrix.
     * @member d
     * @memberOf Matrix2D
     * @type number
     **/
    d: number;
    /**
     * Position (2, 0) in a 3x3 affine transformation matrix.
     * @member tx
     * @memberOf Matrix2D
     * @type number
     **/
    tx: number;
    /**
     * Position (2, 1) in a 3x3 affine transformation matrix.
     * @member ty
     * @memberOf Matrix2D
     * @type number
     **/
    ty: number;
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
    initialize(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix2D;
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
    prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix2D;
    /**
    * @description Save the current Matrix state
    * @method save
    * @memberOf Matrix2D
    * @return null
    **/
    save(): void;
    /**
     * Restore the last saved matrix state
     * @method save
     * @memberOf tomhawk_ns.Matrix2D
     * @return null
     **/
    restore(): void;
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
    append(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix2D;
    combine(matrices: Matrix2D[]): Matrix2D;
    /**
     * Prepends the specified matrix with this matrix.
     * @method prependMatrix
     * @memberOf Matrix2D
     * @param {Matrix2D} matrix
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    prependMatrix(matrix: Matrix2D): Matrix2D;
    /**
     * Appends the specified matrix with this matrix.
     * @method appendMatrix
     * @memberOf Matrix2D
     * @param {Matrix2D} matrix
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    appendMatrix(matrix: Matrix2D): Matrix2D;
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
    prependTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, pivotX: number, pivotY: number): Matrix2D;
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
    appendTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): Matrix2D;
    /**
     * Applies a rotation transformation to the matrix.
     * @method rotate
     * @memberOf Matrix2D
     * @param {number} angle The angle in degrees.
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    rotate(angle: number): Matrix2D;
    /**
     * Applies a skew transformation to the matrix.
     * @method skew
     * @memberOf Matrix2D
     * @param {number} skewX The amount to skew horizontally in degrees.
     * @param {number} skewY The amount to skew vertically in degrees.
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
    */
    skew(skewX: number, skewY: number): Matrix2D;
    /**
     * Applies a scale transformation to the matrix.
     * @method scale
     * @memberOf Matrix2D
     * @param {number} x The amount to scale horizontally
     * @param {number} y The amount to scale vertically
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    scale(x: number, y: number): Matrix2D;
    /**
     * Translates the matrix on the x and y axes.
     * @method translate
     * @memberOf Matrix2D
     * @param {number} x
     * @param {number} y
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    translate(x: number, y: number): Matrix2D;
    /**
     * Sets the properties of the matrix to those of an identity matrix (one that applies a null transformation).
     * @method identity
     * @memberOf Matrix2D
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    identity(): Matrix2D;
    /**
     * Inverts the matrix, causing it to perform the opposite transformation.
     * @method invert
     * @memberOf Matrix2D
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
     **/
    invert(): Matrix2D;
    /**
     * Returns true if the matrix is an identity matrix.
     * @method isIdentity
     * @memberOf Matrix2D
     * @return {Boolean}
     **/
    isIdentity(): boolean;
    /**
     * Transforms a point according to this matrix.
     * @method transformPoint
     * @memberOf Matrix2D
     * @param {number} x The x component of the point to transform.
     * @param {number} y The y component of the point to transform.
     * @param {Point | Object} [pt] An object to copy the result into. If omitted a generic object with x/y properties will be returned.
     * @return {Point}
     **/
    transformPoint(x: number, y: number, pt?: Point): Point;
    /**
     * Decomposes the matrix into transform properties (x, y, scaleX, scaleY, and rotation). Note that this these values
     * may not match the transform properties you used to generate the matrix, though they will produce the same visual
     * results.
     * @method decompose
     * @memberOf Matrix2D
     * @param {Object} target The object to apply the transform properties to. If null, then a new object will be returned.
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
    */
    decompose(target: any): any;
    /**
     * Copies all properties from the specified matrix to this matrix.
     * @method copy
     * @memberOf Matrix2D
     * @param {Matrix2D} matrix The matrix to copy properties from.
     * @return {Matrix2D} This matrix. Useful for chaining method calls.
    */
    copy(matrix: Matrix2D): Matrix2D;
    /**
     * Returns a clone of the Matrix2D instance.
     * @method clone
     * @memberOf Matrix2D
     * @return {Matrix2D} a clone of the Matrix2D instance.
     **/
    clone(): Matrix2D;
    /**
    * @method toFlatObject
    * @memberOf Matrix2D
    * @description Exports the current Matrix2D to a flat Object ( no methods, just public properties )
    * @returns {Object} a flat Object
    **/
    toFlatObject(): any;
    /**
     * Returns a string representation of this object.
     * @method toString
     * @memberOf Matrix2D
     * @return {String} a string representation of the instance.
     **/
    toString(): string;
    /**
     * Returns a string JSON representation of this object.
     * @method toJSON
     * @memberOf Matrix2D
     * @return {String} a string representation of the instance (JSON format)
     **/
    toJSON(): string;
}
