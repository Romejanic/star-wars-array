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

it("doesn't count non-indexed fields", () => {
    let arr = new SWArray([1, 2, 3]);
    assert.strictEqual(arr.length, 3);

    arr.foo = "bar";
    arr.bar = "baz";

    assert.strictEqual(arr.length, 3);
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

it("executes pop() correctly", () => {
    let arr = new SWArray();
    assert.strictEqual(arr.pop(), undefined);

    let arr2 = new SWArray([1, 2, 3, 4, 5]);
    assert.strictEqual(arr2.length, 5);
    let pop = arr2.pop();
    assert.strictEqual(arr2.length, 4);
    assert.strictEqual(pop, 5);

    let arr3 = new SWArray([1,1,1,1,1,1,1,1,1,1,1,1,2]);
    let pop3 = arr3.pop();
    assert.strictEqual(arr3.length, 12);
    assert.strictEqual(pop3, 2);
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

it("converts back to ordered array", () => {
    let arr = [1, 2, 3, 4, 5];
    let swa = new SWArray(arr);
    let toa = swa.toOrderedArray();

    assert.strictEqual(toa.length, 6); // 1 extra by empty slot at toa[2]
    assert.strictEqual(toa[0], 4);
    assert.strictEqual(toa[1], 5);
    assert.strictEqual(toa[3], 1);
    assert.strictEqual(toa[4], 2);
    assert.strictEqual(toa[5], 3);

    assert.strictEqual(swa.toOrderedArray(true).length, 5);
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

it("executes keys() correctly", () => {
    let arr = new SWArray();
    let key = arr.keys();
    assert.strictEqual(key.length, 0);

    let arr2 = new SWArray([1, 2, 3, 4, 5, 6]);
    let key2 = arr2.keys();
    assert.strictEqual(key2.length, 6);
    assert.strictEqual(key2[0], 3);
    assert.strictEqual(key2[1], 4);
    assert.strictEqual(key2[2], 5);
    assert.strictEqual(key2[3], 0);
    assert.strictEqual(key2[4], 1);
    assert.strictEqual(key2[5], 2);

    arr2.push(1);
    key2 = arr2.keys();
    assert.strictEqual(key2.length, 7);
    assert.strictEqual(key2[6], 6);
});

it("executes map() correctly", () => {
    let arr = new SWArray([1, 2, 3, 4, 5, 6]);
    let map = arr.map(v => v * 2);

    assert.strictEqual(map.length, 6);
    for(let i = 0; i < arr.length; i++) {
        assert.strictEqual(map[i], arr[i] * 2);
    }

    arr.map((val, idx, a) => {
        assert.strictEqual(arr[idx], val);
        assert.strictEqual(arr, a);
    });

    let arr2 = new SWArray([1]);
    arr2.map(function() {
        assert.strictEqual(this, arr);
    }, arr);
});

it("executes indexOf() correctly", () => {
    let arr = new SWArray([1, 2, 3, 4, 5, 6]);

    assert.strictEqual(arr.indexOf(3), 5);
    assert.strictEqual(arr.indexOf(6), 2);
    assert.strictEqual(arr.indexOf(4), 0);

    arr.push(3);
    assert.strictEqual(arr.indexOf(3), 5);
    assert.strictEqual(arr.indexOf(3, 0), 6);
});

it("executes includes() correctly", () => {
    let arr = new SWArray([1, 2, 3, 4, 5, 3]);
    assert.strictEqual(arr.includes(2), true);
    assert.strictEqual(arr.includes(4), true);
    assert.strictEqual(arr.includes(10), false);
    assert.strictEqual(arr.includes(-5), false);
    assert.strictEqual(arr.includes(3, 0), true);
    assert.strictEqual(arr.includes(2, 1), false);
});