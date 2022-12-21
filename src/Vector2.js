export default class Vector2 {
    /**
     * Creates an instance of Vector2.
     * @author Dimidroll
     * @date 28/11/2022
     * @param {number} x
     * @param {number} y
     * @memberof Vector2
     */
    constructor(x = 0, y = 0) {
        Vector2.prototype.isVector2 = true;
        this.x = x;
        this.y = y;
    }

    /**
     * Width of vector 2
     * @author Dimidroll
     * @date 28/11/2022
     * @memberof Vector2
     */
    get width() {
        return this.x;
    }

    /**
     * Width of vector 2
     * @author Dimidroll
     * @date 28/11/2022
     * @memberof Vector2
     */
    set width(value) {
        this.x = value;
    }

    /**
     * Height of vector 2
     * @author Dimidroll
     * @date 28/11/2022
     * @memberof Vector2
     */
    get height() {
        return this.y;
    }

    /**
     * Height of vector 2
     * @author Dimidroll
     * @date 28/11/2022
     * @memberof Vector2
     */
    set height(value) {
        this.y = value;
    }


    /**
     * @description
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Number} x
     * @param {Number} y
     * @returns {Vector2} 
     * @memberof Vector2
     */
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Number} scalar
     * @returns {Vector2} 
     * @memberof Vector2
     */
    setScalar(scalar) {
        this.x = scalar;
        this.y = scalar;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Number} x
     * @returns {Vector2} 
     * @memberof Vector2
     */
    setX(x) {
        this.x = x;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Number} y
     * @returns {Vector2} 
     * @memberof Vector2
     */
    setY(y) {
        this.y = y;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @returns {Vector2} 
     * @memberof Vector2
     */
    clone() {
        return new this.constructor(this.x, this.y);
    }


    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Vector2} 
     * @memberof Vector2
     */
    copy(v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Vector2} 
     * @memberof Vector2
     */
    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Number} s
     * @returns {Vector2} 
     * @memberof Vector2
     */
    addScalar(s) {
        this.x += s;
        this.y += s;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} a
     * @param {Vector2} b
     * @returns {Vector2} 
     * @memberof Vector2
     */
    addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this;
    }


    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @param {Number} s
     * @returns {Vector2} 
     * @memberof Vector2
     */
    addScaledVector(v, s) {
        this.x += v.x * s;
        this.y += v.y * s;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Vector2} 
     * @memberof Vector2
     */
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Number} s
     * @returns {Vector2} 
     * @memberof Vector2
     */
    subScalar(s) {
        this.x -= s;
        this.y -= s;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} a
     * @param {Vector2} b
     * @returns {Vector2} 
     * @memberof Vector2
     */
    subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Vector2} 
     * @memberof Vector2
     */
    multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Number} scalar
     * @returns {Vector2} 
     * @memberof Vector2
     */
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Vector2} 
     * @memberof Vector2
     */
    divide(v) {
        this.x /= v.x;
        this.y /= v.y;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Number} scalar
     * @returns {Vector2} 
     * @memberof Vector2
     */
    divideScalar(scalar) {
        return this.multiplyScalar(1 / scalar);
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Vector2} 
     * @memberof Vector2
     */
    min(v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Vector2} 
     * @memberof Vector2
     */
    max(v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} min
     * @param {Vector2} max
     * @returns {Vector2} 
     * @memberof Vector2
     */
    clamp(min, max) {
        // assumes min < max, componentwise

        this.x = Math.max(min.x, Math.min(max.x, this.x));
        this.y = Math.max(min.y, Math.min(max.y, this.y));
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Number} minVal
     * @param {Number} maxVal
     * @returns {Vector2} 
     * @memberof Vector2
     */
    clampScalar(minVal, maxVal) {
        this.x = Math.max(minVal, Math.min(maxVal, this.x));
        this.y = Math.max(minVal, Math.min(maxVal, this.y));
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Number} min
     * @param {Number} max
     * @returns {Vector2} 
     * @memberof Vector2
     */
    clampLength(min, max) {
        const length = this.length();
        return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @returns {Vector2} 
     * @memberof Vector2
     */
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @returns {Vector2} 
     * @memberof Vector2
     */
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @returns {Vector2} 
     * @memberof Vector2
     */
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @returns {Vector2} 
     * @memberof Vector2
     */
    roundToZero() {
        this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @returns {Vector2} 
     * @memberof Vector2
     */
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Number} 
     * @memberof Vector2
     */
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Number} 
     * @memberof Vector2
     */
    cross(v) {
        return this.x * v.y - this.y * v.x;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @returns {Number} 
     * @memberof Vector2
     */
    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @returns {Number} 
     * @memberof Vector2
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @returns {Number} 
     * @memberof Vector2
     */
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @returns {Vector2} 
     * @memberof Vector2
     */
    normalize() {
        return this.divideScalar(this.length() || 1);
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @returns {*} 
     * @memberof Vector2
     */
    angle() {
        // computes the angle in radians with respect to the positive x-axis

        const angle = Math.atan2(-this.y, -this.x) + Math.PI;
        return angle;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Number} 
     * @memberof Vector2
     */
    distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Number} 
     * @memberof Vector2
     */
    distanceToSquared(v) {
        const dx = this.x - v.x,
            dy = this.y - v.y;
        return dx * dx + dy * dy;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Number} 
     * @memberof Vector2
     */
    manhattanDistanceTo(v) {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Number} length
     * @returns {Vector2} 
     * @memberof Vector2
     */
    setLength(length) {
        return this.normalize().multiplyScalar(length);
    }


    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @param {Number} alpha
     * @returns {Vector2} 
     * @memberof Vector2
     */
    lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v1
     * @param {Vector2} v2
     * @param {Number} alpha
     * @returns {Vector2} 
     * @memberof Vector2
     */
    lerpVectors(v1, v2, alpha) {
        this.x = v1.x + (v2.x - v1.x) * alpha;
        this.y = v1.y + (v2.y - v1.y) * alpha;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} v
     * @returns {Boolean} 
     * @memberof Vector2
     */
    equals(v) {
        return v.x === this.x && v.y === this.y;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Array} array
     * @param {number} offset
     * @returns {Number} 
     * @memberof Vector2
     */
    fromArray(array, offset = 0) {
        this.x = array[offset];
        this.y = array[offset + 1];
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Array} array
     * @param {number} offset
     * @returns {Vector2} 
     * @memberof Vector2
     */
    toArray(array = [], offset = 0) {
        array[offset] = this.x;
        array[offset + 1] = this.y;
        return array;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @param {Vector2} center
     * @param {Number} angle
     * @returns {Vector2} 
     * @memberof Vector2
     */
    rotateAround(center, angle) {
        const c = Math.cos(angle),
            s = Math.sin(angle);
        const x = this.x - center.x;
        const y = this.y - center.y;
        this.x = x * c - y * s + center.x;
        this.y = x * s + y * c + center.y;
        return this;
    }

    /**
     * @author Dimidroll
     * @date 28/11/2022
     * @returns {Vector2} 
     * @memberof Vector2
     */
    random() {
        this.x = Math.random();
        this.y = Math.random();
        return this;
    }

    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
    }
}

Vector2.prototype.type = 'Vector2';