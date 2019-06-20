export declare class Vector3D {
    /**
     * @class Vector3D
     * @memberOf tomahawk_ns
     * @description The Vector3D class represents a point or a location in the three-dimensional space using the Cartesian coordinates x, y, and z. As in a two-dimensional space, the x property represents the horizontal axis and the y property represents the vertical axis. In three-dimensional space, the z property represents depth.
     * @constructor
     **/
    constructor(x?: number, y?: number, z?: number, w?: number);
    /**
    * @member x
    * @memberOf Vector3D
    * @type {number}
    * @description The first element of a Vector3D object, such as the x coordinate of a point in the three-dimensional space.
    **/
    x: number;
    /**
    * @member y
    * @memberOf Vector3D
    * @type {number}
    * @description The second element of a Vector3D object, such as the y coordinate of a point in the three-dimensional space.
    **/
    y: number;
    /**
    * @member z
    * @memberOf Vector3D
    * @type {number}
    * @description The third element of a Vector3D object, such as the z coordinate of a point in three-dimensional space.
    **/
    z: number;
    /**
    * @member w
    * @memberOf Vector3D
    * @type {number}
    * @description The fourth element of a Vector3D object (in addition to the x, y, and z properties) can hold data such as the angle of rotation.
    **/
    w: number;
    /**
    * @method crossProduct
    * @memberOf Vector3D
    * @param {tomahawk_ns.Vector3D} vector A second Vector3D object.
    * @returns {tomahawk_ns.Vector3D} This Vector3D. Useful for chaining method calls.
    * @description Returns a new Vector3D object that is perpendicular (at a right angle) to the current Vector3D and another Vector3D object.
    **/
    crossProduct(vector: any): Vector3D;
}
