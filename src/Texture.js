import Vector2 from "./Vector2.js";

export default class Texture{
    constructor(){}
    draw(ctx){}
}

export class RectTexture extends Texture{
    /** @type { String } */
    fillStyle = "white"
    /** @type { String } */
    strokeStyle = "red"
    /** @type { Vector2 } */
    size = new Vector2(25, 25)
    /** @type { Number } */
    lineWidth = 1
    /** @type { 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round' } */
    lineJoin = 'arcs' 

    /**
     * Creates an instance of RectTexture.
     * @author Dimidroll06
     * @date 10/12/2022
     * @param {{fillStyle?: String, strokeStyle?: String, size?: Vector2, lineWidth?: Number, lineJoin?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round' }} params
     * @memberof RectTexture
     */
    constructor(params={}){
        super();
        this.fillStyle = params.fillStyle ?? this.fillStyle;
        this.strokeStyle = params.strokeStyle ?? this.strokeStyle;
        this.size = params.size ?? this.size;
        this.lineWidth = params.lineWidth ?? this.lineWidth;
        this.lineJoin = params.lineJoin ?? this.lineJoin;
    }

    /**
     *
     *
     * @author Dimidroll06
     * @date 10/12/2022
     * @param {CanvasRenderingContext2D} ctx
     * @param {Object} params
     * @memberof RectTexture
     */
    draw(ctx, {position, angle, origin}){
        
        // angle
        ctx.translate(position.x, position.y);
        ctx.rotate(angle * ( Math.PI/180 ));
        ctx.translate(-(position.x), -(position.y));

        // colors
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.lineJoin = this.lineJoin;

        // draw
        ctx.fillRect(position.x - origin.x, position.y - origin.y, this.size.x, this.size.y);
        ctx.strokeRect(position.x - origin.x, position.y - origin.y, this.size.x, this.size.y)
    }
}