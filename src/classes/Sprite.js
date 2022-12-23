import Texture, { RectTexture } from "./Texture.js";
import Vector2 from "../Vector2.js";
import Behaviour from "../behaviours/Behaviour.js";

export default class Sprite {

    /** @type {Vector2} */
    position = new Vector2(0, 0);
    /** @type {Number} */
    angle = 0;
    /** @type {Number} */
    opacity = 1;
    /** @type {Vector2} */
    origin = new Vector2(0, 0);
    /** @type {Array<Behaviour>} */
    behaviours = [];
    /** @type {Texture} */
    texture = new Texture();

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
     * Applyes behaviour to sprite
     *
     * @author Dimidroll06
     * @date 23/12/2022
     * @param {Behaviour} behaviour
     * @return {Behaviour} 
     * @memberof Sprite
     */
    applyBehaviour(behaviour){
        
        if(!(behaviour instanceof Behaviour)) return window.isDebug?console.warn('parameter is no type of Behaviour'):""
        this.behaviours.push(behaviour);

        return behaviour;
    }

    /**
     * draw func
     * @author Dimidroll
     * @date 02/12/2022
     * @param {CanvasRenderingContext2D} ctx
     * @memberof Sprite
     */
    _draw(ctx) {
        // behaviours
        this.behaviours.forEach(behaviour => {
            behaviour.applyBehaviour(this);
        });
        // opacity
        ctx.globalAlpha = this.opacity;
        // texture
        this.texture.draw(ctx, { position: this.position, angle: this.angle, origin: this.origin });

    }
}