export class Sprite {
    constructor() { }
    /**
     * draw func
     * @author Dimidroll
     * @date 02/12/2022
     * @param {CanvasRenderingContext2D} ctx
     * @memberof Sprite
     */
    _draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(10, 10, 10, 10);
    }
}