import Behaviour from "./Behaviour.js";
import { ImageTexture } from "../classes/Texture.js";
import Vector2 from "../Vector2.js";

export default class Animation extends Behaviour{
    
    /** @type {{AnimationName: { frames: [{cropSize: Vector2, cropOffset: Vector2}], animationSpeed: Number, repeat: Boolean } }} */
    animations = {}
    current = "default"
    frame = 0
    paused = false

    /**
     * Creates an instance of Animation Behaviour.
     * @author Dimidroll06
     * @date 22/12/2022
     * @memberof Animation
     */
    constructor(){
        super();

        
        this.addAnimation("default",
        [
            {
                cropSize:   new Vector2(0, 0),
                cropOffset: new Vector2(0, 0)
            }
        ]
        );

        var a = this;

        function nextFrame(){
            if(!a.animations.hasOwnProperty(a.current)) return setTimeout(nextFrame, 1000/1);

            let { frames, animationSpeed, repeat } = a.animations[a.current];

            if(!a.paused && ( a.frame != frames.length - 1 || repeat ) ){
                a.frame = a.frame >= frames.length - 1? 0 : (a.frame + 1);
            }

            //
            setTimeout(nextFrame, 1000/animationSpeed);
        }     
        nextFrame();
    }

    /**
     * Toogle pause of animation
     *
     * @author Dimidroll06
     * @date 23/12/2022
     * @memberof Animation
     */
    togglePause(){
        this.paused = !this.paused;
    }

    /**
     * Pause animation
     *
     * @author Dimidroll06
     * @date 23/12/2022
     * @memberof Animation
     */
    pause(){
        this.paused = true;
    }

    /**
     * Unpause animation
     *
     * @author Dimidroll06
     * @date 23/12/2022
     * @memberof Animation
     */
    unpause(){
        this.paused = false;
    }

    /**
     * Play animation by name
     *
     * @author Dimidroll06
     * @date 23/12/2022
     * @param {String} name Animation name
     * @param {Number} frame Start point of animation 
     * @memberof Animation
     */
    playAnimation(name, frame=0){
        if(!this.animations.hasOwnProperty(name)) return window.isDebug?console.warn(`Can't find animation "${name}"`):"";
        this.current = name;
        this.frame = frame % this.animations[name].frames.length;
    }




    /**
     * Adds new animation
     *
     * @author Dimidroll06
     * @date 23/12/2022
     * @param {String} name Animtaion name
     * @param {Array<{cropSize: Vector2, cropOffset: Vector2}>} frames Frames of animtaion
     * @param {number} animationSpeed Animtaion speed
     * @param {boolean} repeat Animation repeat state
     * @memberof Animation
     */
    addAnimation(name, frames, animationSpeed=5, repeat=false){
        if(frames.length == 0) return window.isDebug?console.warn("Frames length equals zero"):""
        this.animations[name] = {
            frames, animationSpeed, repeat
        };

    }

    /**
     * Applies behaviour to Sprite 
     * 
     * @author Dimidroll06
     * @date 22/12/2022
     * @param {Sprite} sprite
     * @memberof Behaviour
     */
    applyBehaviour(sprite){
        if(!(sprite.texture instanceof ImageTexture)) throw new Error('Sprite Texture type is not ImageTexture');
        if(!this.animations.hasOwnProperty(this.current)) return;
        var animation = this.animations[this.current];
        sprite.texture.offset = animation.frames[this.frame].cropOffset;
        sprite.texture.crop   = animation.frames[this.frame].cropSize;
    }
}