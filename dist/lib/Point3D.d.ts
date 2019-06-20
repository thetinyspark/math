export declare class Point3D {
    /**
    * @member x
    * @memberOf Point3D
    * @type {number}
    * @description the value on the x axis.
    **/
    x: number;
    /**
    * @member y
    * @memberOf Point3D
    * @type {number}
    * @description the value on the y axis.
    **/
    y: number;
    /**
    * @member z
    * @memberOf Point3D
    * @type {number}
    * @description the value on the z axis.
    **/
    z: number;
    /**
     * @class Point3D
     * @memberOf tomahawk_ns
     * @description a basic 3D point
     * @constructor
     * @param {number} x the value on the x axis
     * @param {number} y the value on the y axis
     * @param {number} z the value on the z axis
     **/
    constructor(x?: number, y?: number, z?: number);
    /**
    * @method getDistanceBetween
    * @description returns a distance between two points
    * @memberOf Point
    * @param {Point} pointA
    * @param {Point} pointB
    * @returns {number}
    **/
    static getDistanceBetween(pointA: Point3D, pointB: Point3D): number;
}
