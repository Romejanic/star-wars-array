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

    push(val) {
        this[this.#getNextIndex(this.length)] = val;
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

    #getNextIndex = (n) => { 
        if(n > 5) {
            return n;
        }
        return INDEX_TABLE[n];
    }

};