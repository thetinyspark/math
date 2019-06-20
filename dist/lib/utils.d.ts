import { Point } from './Point';
/**
* return the angle (in radians) in pointA according to te Al Kashi's theorem
* α = angleA, β = angleB, γ = angleC
* a² = b² + c² − 2bc.cos(α)
* b² = a² + c² − 2ac.cos(β)
* c² = a² + b² − 2ab.cos(γ)
* @method findAngleInTriangle

* @param {Point} pointA
* @param {Point} pointB
* @param {Point} pointC
* @return {number} the angle in pointA
*/
export declare function findAngleInTriangle(pointA: Point, pointB: Point, pointC: Point): number;
/**
* return the next power of 2 greater or equal than the value passed in parameter
* @method getNextPowerOf2

* @param {number} value
* @return {number} the next power of 2
*/
export declare function getNextPowerOf2(value: number): number;
/**
* Converts a pair of x,y coordinates with specifics cell's width and height into a pair of row,col
* @method screenToIso

* @param {number} x
* @param {number} y
* @param {number} cellW
* @param {number} cellH
* @return {Point} a Point Object which x  = row and y = col
*/
export declare function screenToIso(x: number, y: number, cellW: number, cellH: number): Point;
/**
* Converts a pair of row,col coordinates with specifics cell's width and height into a pair of x,y
* @method isoToScreen

* @param {number} row
* @param {number} col
* @param {number} cellW
* @param {number} cellH
* @return {Point} a Point Object
*/
export declare function isoToScreen(row: number, col: number, cellW: number, cellH: number): Point;
/**
* Rotates the target Point around the center Point according to the angle passed in param
* @method screenToIso

* @param {Point} target the point to rotate
* @param {Point} center the rotation center point
* @param {number} angle in degrees
* @return {Point} the rotated point
*/
export declare function rotateAroundCenter(target: Point, center: Point, angle: number): Point;
/**
 * Usefull constants
 */
export declare const FAST_COS: number[];
export declare const FAST_SIN: number[];
export declare const FAST_TAN: number[];
export declare const DEG_TO_RAD: number;
export declare const RAD_TO_DEG: number;
