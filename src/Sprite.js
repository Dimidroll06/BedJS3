import Texture, { RectTexture } from "./Texture.js";
import Vector2 from "./Vector2.js";

export default class Sprite {

    position = new Vector2(0, 0);
    angle = 0;
    opacity = 1;
    origin = new Vector2(0, 0);

    /**
     * Creates an instance of Sprite.
     * @author Dimidroll
     * @date 02/12/2022
     * @param {{position?: Vector2, opacity?: Number, angle?: Number, Origin: Vector2}} params
     * @param {Texture} texture
     * @memberof Sprite
     */
    constructor(params={}, texture) {
        this.position = params.position ?? this.position;
        this.opacity = params.opacity ?? this.opacity;
        this.origin = params.Origin ?? this.origin;
        this.angle = params.angle ?? this.angle;

        this.texture = texture ?? new RectTexture();
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
        // texture
        this.texture.draw(ctx, { position: this.position, angle: this.angle, origin: this.origin });

    }
}