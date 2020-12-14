const assert = require("assert");
const SWArray = require("../index");

it("initialises correctly", () => {
    let arr = new SWArray();
    assert.strictEqual(arr.length, 0);
    assert.strictEqual(typeof arr[3], "undefined");

    let arr2 = new SWArray([1, 2, 3]);
    assert.strictEqual(arr2.length, 3);
    assert.strictEqual(typeof arr2[3], "number");
    assert.strictEqual(arr2[3], 1);
});

it("has the correct indexing", () => {
    let arr = new SWArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.strictEqual(arr[3], 1);
    assert.strictEqual(arr[4], 2);
    assert.strictEqual(arr[5], 3);
    assert.strictEqual(arr[0], 4);
    assert.strictEqual(arr[1], 5);
    assert.strictEqual(arr[2], 6);
    assert.strictEqual(arr[6], 7);
    assert.strictEqual(arr[7], 8);
    assert.strictEqual(arr[8], 9);
    assert.strictEqual(arr[9], 10);
});

it("executes push() correctly", () => {
    let arr = new SWArray([1, 2, 3]);
    assert.strictEqual(arr.length, 3);

    arr.push(5);
    arr.push(2);
    arr.push(7);
    assert.strictEqual(arr.length, 6);
    assert.strictEqual(arr[0], 5);
    assert.strictEqual(arr[1], 2);
    assert.strictEqual(arr[2], 7);

    arr.push(10, 4, 9);
    assert.strictEqual(arr.length, 9);
    assert.strictEqual(arr[6], 10);
    assert.strictEqual(arr[7], 4);
    assert.strictEqual(arr[8], 9);
});

it("returns the correct length", () => {
    let arr = new SWArray([1, 2, 3]);
    assert.strictEqual(arr.length, 3);

    arr.push(5);
    arr.push(-2);

    assert.strictEqual(arr.length, 5);
});

it("converts back to regular array", () => {
    let arr = [1, 2, 3, 4, 5];
    let swa = new SWArray(arr);
    let tna = swa.toNormalArray();
    for(let i = 0; i < arr.length; i++) {
        assert.strictEqual(tna[i], arr[i]);
    }
    assert.strictEqual(tna.length, arr.length);

    let arr2 = new SWArray();
    assert.strictEqual(arr2.toNormalArray().length, 0);
});

it("prints as string correctly", () => {

    // should follow format of native js arrays
    // i.e. '1,2,3,4,5'

    let arr = new SWArray();
    assert.strictEqual(arr.toString(), '');

    let arr2 = new SWArray([1,2,3,4,5]);
    assert.strictEqual(arr2.toString(), '1,2,3,4,5');

    let arr3 = new SWArray(['abc','def','ghi']);
    assert.strictEqual(arr3.toString(), 'abc,def,ghi');

});

it("executes forEach() correctly", () => {
    let swArray = new SWArray([1, 2, 3, 4, 5, 6]);
    swArray.forEach((val, idx, arr) => {
        assert.strictEqual(swArray[idx], val);
        assert.strictEqual(swArray, arr);
    });

    let swa2 = new SWArray();
    swa2.forEach(() => {
        assert.fail("Should not run on empty array");
    });

    let swa3 = new SWArray([1]);
    swa3.forEach(function() {
        assert.strictEqual(this, swa2);
    }, swa2);
});