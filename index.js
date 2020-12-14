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

    #getNextIndex = (n) => { 
        if(n > 5) {
            return n;
        }
        return [3, 4, 5, 0, 1, 2][n];
    }

};