export declare class Rectangle {
    /**
     * @class Rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @description Represents a rectangle
     * @constructor
     **/
    constructor(x?: number, y?: number, width?: number, height?: number);
    /**
    * @member x
    * @memberOf Rectangle
    * @type {number}
    * @description The x coordinate of the top-left corner of the rectangle.
    **/
    x: number;
    /**
    * @member y
    * @memberOf Rectangle
    * @type {number}
    * @description The y coordinate of the top-left corner of the rectangle.
    **/
    y: number;
    /**
    * @member width
    * @memberOf Rectangle
    * @type {number}
    * @description the width of the rectangle, in pixels.
    **/
    width: number;
    /**
    * @member height
    * @memberOf Rectangle
    * @type {number}
    * @description the height of the rectangle, in pixels.
    **/
    height: number;
    /**
    * @member left
    * @memberOf Rectangle
    * @type {number}
    * @description The x coordinate of the top-left corner of the rectangle.
    **/
    left: number;
    /**
    * @member right
    * @memberOf Rectangle
    * @type {number}
    * @description The sum of the x and width properties.
    **/
    right: number;
    /**
    * @member top
    * @memberOf Rectangle
    * @type {number}
    * @description The y coordinate of the top-left corner of the rectangle.
    **/
    top: number;
    /**
    * @member bottom
    * @memberOf Rectangle
    * @type {number}
    * @description The sum of the y and height properties.
    **/
    bottom: number;
}
