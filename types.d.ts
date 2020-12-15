/**
 * An SWArray is an array which is indexed in the order of the Star Wars films.
 */
class SWArray<T> {
  /**
   * Builds a fresh Star Wars array from an optional input array.
   * If no input array is specified, this will build an empty
   * Star Wars array.
   *
   * @param init The initial values for your array
   * @example init: [1, 2, 3, 4, 5, 6]
   *           out: [4, 5, 6, 1, 2, 3]
   */
  constructor(init: Array<T> = null);

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Adds one or more elements to the end of an
   * array and returns the new length of the array.
   */
  push(): number;

  /**
   * Removes the last element from
   * an array and returns that element.
   *
   * This method changes the length of the array.
   */
  pop(): T;

  /**
   * Executes a provided function once for each array element.
   *
   * @param cb Callback function
   * @param thisArg Optional, bind to local `this`
   */
  forEach(cb: () => any, thisArg: any): void;

  /**
   * Returns the first index at which a given element
   * can be found in the array, or -1 if it is not present.
   *
   * @param search The element to search for
   * @param start Optional, the first index to begin searching on
   */
  indexOf(search: T, start: number): number;

  /**
   * Determines whether an array includes a certain value
   * among its entries, returning `true` or `false` as appropriate.
   *
   * @param search The element to search for
   * @param start Optional, the first index to begin searching on
   */
  includes(search: T, start: number): boolean;

  /**
   * Returns the values as a regular Javascript array with start-to-end ordering.
   */
  toNormalArray(): Array<T>;

  /**
   * Returns the values as a regular Javascript array with SWArray ordering.
   *
   * @param removeGaps any gaps left by the reordering are removed
   */
  toOrderedArray(removeGaps: boolean = false): Array<T>;

  /**
   * Returns a string representing the specified array and its elements.
   */
  toString(): string;

  /**
   * Returns a new Array Iterator object that contains
   * the keys for each index in the array.
   */
  keys(): Array<number>;

  /**
   * Creates a new array populated with the results of calling
   * a provided function on every element in the calling array.
   *
   * @param cb Callback function
   * @param thisArg Optional, bind to local `this`
   */
  map(cb: (value: T, index: number, array: SWArray) => any, thisArg: any): Array<T>;
}
