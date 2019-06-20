export declare class Point {
    /**
    * @member {number} x the x position of  the point
    * @memberOf Point
    **/
    x: number;
    /**
    * @member {number} y the y position of  the point
    * @memberOf Point
    **/
    y: number;
    /**
     * @class Point
     * @description Represents a basic 2d point
     * @param {number} x the x value of the point on the x axis
     * @param {number} y the y value of the point on the y axis
     * @constructor
     **/
    constructor(x?: number, y?: number);
    /**
    * @method getDistanceBetween
    * @description returns a distance between two points
    * @memberOf Point
    * @param {Point} pointA
    * @param {Point} pointB
    * @returns {number}
    **/
    static getDistanceBetween(pointA: Point, pointB: Point): number;
}
