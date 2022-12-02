import { Vector2 } from "./Vector2";

export class Sprite {

    position = new Vector2(0, 0);
    opacity = 1;

    constructor(params, texture) {
        this.position = params.position ?? this.position;
        this.opacity = params.opacity ?? this.opacity;
    }
    /**
     * draw func
     * @author Dimidroll
     * @date 02/12/2022
     * @param {CanvasRenderingContext2D} ctx
     * @memberof Sprite
     */
    _draw(ctx) {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = 'black';
        ctx.fillRect(this.position.x, this.position.y, 50, 50);
    }
}