# star-wars-array
Node package for creating an array which is indexed in the order of the Star Wars films.

In other words, the indices for each array starts as follows:

|3|4|5|0|1|2|6|7|8|...|
|-|-|-|-|-|-|-|-|-|-|

**NOTE:** This is an esoteric (joke) package. Although if you manage to actually use it in a meaningful way, I will be really impressed.

## Usage
**Installing**

```sh
$ npm i -s star-wars-array
```

**Example**

Usage is similar to a regular array.

```js
const SWArray = require("star-wars-array");

let array = new SWArray([1, 2, 3, 4, 5, 6]);
console.log(array[0]); // prints 4
console.log(array[3]); // prints 1

array.forEach((val, idx) => {
    console.log(`${idx} = ${val}`);
});
/* prints:
    3 = 1
    4 = 2
    5 = 3
    0 = 4
    1 = 5
    2 = 6
 */

console.log(array.length); // prints 6
```

**Wait so how tf do I iterate?**

The easiest way is to use a for loop with iteration (i.e. for-of loop).
```js
let arr = new SWArray(...);
for(let val of arr) {
    ...
}
```

You can also use the `SWArray.keys()` method as a lookup table to map the sequential indices of the loop to the correct indices for the array.
```js
let arr = new SWArray(...);
let idx = arr.keys();
for(let i = 0; i < arr.length; i++) {
    let val = arr[idx[i]];
    ...
}
```

Alternatively, you can just convert it to a regular array and iterate over that instead, using either `SWArray.toNormalArray()` or `SWArray.toOrderedArray()`.
```js
let arr = new SWArray(...);
let iter = arr.toNormalArray();
for(let i = 0; i < arr.length; i++) {
    let val = iter[i];
    ...
}
```

## Reference

The `SWArray` class implements some of the functions which are supported by native Javascript arrays, with the exception of all indices being in the format specified above.

For shared functions, please see the documentation for the regular Javascript Array methods, since their arguments and return values are the same.

|Properties|Type|Usage|
|----------|----|-----|
|`length`|`number`|[See Array.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)|

|Method|Return Type|Usage|
|------|-------|-----|
|`push()`|`number`|[See Array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)|
|`pop()`|`any or undefined`|[See Array.prototype.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)|
|`forEach()`|`undefined`|[See Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)|
|`indexOf()`|`number`|[See Array.prototype.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)|
|`lastIndexOf()`|`number`|[See Array.prototype.lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)|
|`includes()`|`boolean`|[See Array.prototype.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)|
|`toNormalArray()`|`array`|Returns the values as a regular Javascript array with start-to-end ordering.|
|`toOrderedArray(boolean: removeGaps)`|`array`|Returns the values as a regular Javascript array with SWArray ordering. If `removeGaps` is true, then any gaps left by the reordering are removed.|
|`toString()`|`string`|[See Array.prototype.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)|
|`keys()`|`array`|[See Array.prototype.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)|
|`map()`|`SWArray`|[See Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)|
|`values()`|`iterator`|[See Array.prototype.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)|
|`sort()`|`SWArray`|[See Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)|
|`some()`|`boolean`|[See Array.prototype.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)|
|`shift()`|`any or undefined`|[See Array.prototype.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)|
|`reverse()`|`SWArray`|[See Array.prototype.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)|

## Planned Features
- Implement remaining native array functions ([full list here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#)).
- More prequel memes (which are surprisingly lacking).