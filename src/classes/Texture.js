import Vector2 from "../Vector2.js";

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

export class ImageTexture extends Texture{
    
    #img = document.createElement('img');
    /** @type { Vector2 } */
    size = new Vector2(0, 0);
    /** @type { Vector2 } */
    offset = new Vector2(0, 0);
    /** @type { Vector2 } */
    crop = new Vector2(0, 0);
    /** @type {Boolean} */
    pixelart = false;

    /**
     * Creates an instance of ImageTexture.
     * @author Dimidroll06
     * @date 21/12/2022
     * @param {String} src
     * @param {{size?: Vector2, crop?: Vector2, offset?: Vector2}} params
     * @memberof ImageTexture
     */
    constructor(src, params={}){
        super();
        
        this.setSrc(src);
        this.size = params.size ?? this.size;
        this.crop = params.crop ?? this.crop;
        this.offset = params.offset ?? this.offset;
        this.pixelart = params.pixelart ?? this.pixelart;
    }

    /**
     * Set image src
     * @param {String} value
     * @param {(isLoaded: boolean, event?: Event) => void} cb
     * @author Dimidroll06
     * @returns {Promise}
     * @date 21/12/2022
     * @memberof ImageTexture
     */
    async setSrc(value, cb=()=>{}){
        if(!value) return window.isDebug?console.warn('setSrc value is undefinded'):"";
        return new Promise((resolve, reject)=>{
            this.#img.onload = () => cb(true);
            this.#img.onerror = (event) => cb(false, event);
            this.#img.src = value;
        })
    }

    /**
     * Source of image
     * @returns {String}
     * @readonly
     * @author Dimidroll06
     * @date 21/12/2022
     * @memberof ImageTexture
     */
    get src(){
        return this.#img.src
    }

    /**
     * @author Dimidroll06
     * @date 17/12/2022
     * @param {CanvasRenderingContext2D} ctx
     * @memberof ImageTexture
     */
    draw(ctx, {position, angle, origin}){
        if(typeof this.src === 'undefinded') throw new Error('src is undefinded');
        if(!this.#img.complete) return 

        if(this.pixelart) ctx.imageSmoothingEnabled = false;
        // angle
        ctx.translate(position.x, position.y);
        ctx.rotate(angle * ( Math.PI/180 ));
        ctx.translate(-(position.x), -(position.y));
        
        // draw
        if(this.crop.x == 0 || this.crop.y == 0)
            ctx.drawImage( this.#img, 
                position.x - origin.x, position.y - origin.y, 
                this.size.x, this.size.y)
        else
            ctx.drawImage( this.#img, 
                this.offset.x, this.offset.y, 
                this.crop.x, this.crop.y, 
                position.x - origin.x, position.y - origin.y, 
                this.size.x, this.size.y );
    }
}