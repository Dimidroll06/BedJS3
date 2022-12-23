import { Sprite } from "../bed.js";

export default class Behaviour{
    /**
     * Creates an instance of Behaviour.
     * @author Dimidroll06
     * @date 22/12/2022
     * @memberof Behaviour
     */
    constructor(){}
    
    /**
     * Applyes behaviour to Sprite 
     * 
     * @author Dimidroll06
     * @date 22/12/2022
     * @param {Sprite} sprite
     * @memberof Behaviour
     */
    applyBehaviour(sprite){
        console.log('Behaviour applyed on sprite:', sprite);
    }
}