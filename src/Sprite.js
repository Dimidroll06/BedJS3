import Texture from "./Texture.js";
import Vector2 from "./Vector2.js";

export default class Sprite {

    position = new Vector2(0, 0);
    angle = 0;
    opacity = 1;
    CenterOfSprite = new Vector2(0, 0);

    /**
     * Creates an instance of Sprite.
     * @author Dimidroll
     * @date 02/12/2022
     * @param {{position?: Vector2, opacity?: Number, angle?: Number, CenterOfSprite: Vector2}} params
     * @param {Texture} texture
     * @memberof Sprite
     */
    constructor(params={}, texture) {
        this.position = params.position ?? this.position;
        this.opacity = params.opacity ?? this.opacity;
        this.CenterOfSprite = params.CenterOfSprite ?? this.CenterOfSprite;
        this.angle = params.angle ?? this.angle;
    }
    /**
     * draw func
     * @author Dimidroll
     * @date 02/12/2022
     * @param {CanvasRenderingContext2D} ctx
     * @memberof Sprite
     */
    _draw(ctx) {
        // opacity
        ctx.globalAlpha = this.opacity;

        // angle
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.angle * ( Math.PI/180 ));
        ctx.translate(-(this.position.x), -(this.position.y));

        ctx.fillStyle = 'green';

        // texture
        ctx.fillRect(this.position.x - this.CenterOfSprite.x, this.position.y - this.CenterOfSprite.y, 50, 50);

    }
}