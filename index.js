/**
 * star-wars-array
 * Copyright Jack Davenport 2020
 */

const INDEX_TABLE = [3, 4, 5, 0, 1, 2];

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

module.exports = class SWArray {

    constructor(init = null) {
        if(init) {
            for(let i in init) {
                this[this.#getNextIndex(i)] = init[i];
            }
        }
    }

    push() {
        for(let val of arguments) {
            this[this.#getNextIndex(this.length)] = val;
        }
        return this.length;
    }

    forEach(cb, thisArg) {
        if(thisArg) {
            cb = cb.bind(thisArg);
        }
        for(let i = 0; i < this.length; i++) {
            let idx = this.#getNextIndex(i);
            cb(this[idx], idx, this);
        }
    }

    get length() {
        return Object.keys(this).filter(isNumeric).length;
    }

    toNormalArray() {
        let arr = [];
        for(let i = 0; i < this.length; i++) {
            arr[i] = this[this.#getNextIndex(i)];
        }
        return arr;
    }

    toString() {
        // LOL
        return this.toNormalArray().toString();
    }

    keys() {
        let arr = [];
        for(let i = 0; i < this.length; i++) {
            arr.push(this.#getNextIndex(i));
        }
        return arr;
    }

    #getNextIndex = (n) => { 
        if(n > 5) {
            return n;
        }
        return INDEX_TABLE[n];
    }

};