# star-wars-array
Node package for creating an array which is indexed in the order of the Star Wars films.

In other words, the indices for each array starts as follows:

|3|4|5|0|1|2|6|7|8|
|-|-|-|-|-|-|-|-|-|

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