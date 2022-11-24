class BedJS{

    canvas = document.createElement('canvas');
    
    
    /**
     * Creates an instance of BedJS.
     * @author Dimidroll
     * @date 24/11/2022
     * @param {HTMLCanvasElement} canvas
     * @memberof BedJS
     */
    constructor(canvas){
        this.canvas = canvas ?? this.canvas;

        this._init();
    }

    _init(){

    }
}

export { BedJS }