const assert = require("assert");
const SWArray = require("../index");

it("returns the correct length", () => {
    let arr = new SWArray([1, 2, 3]);
    assert.strictEqual(arr.length, 3);

    arr.push(5);
    arr.push(-2);

    assert.strictEqual(arr.length, 5);
});