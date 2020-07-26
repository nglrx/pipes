export class NumberUtils {

  /**
   * Calculates sum of all numbers in an array
   * @param values Array of numbers
   * @returns Sum of numbers in array
   */
  static sum(values: number[]): number {
    const sum = values.reduce((currSum, value) => currSum + value, 0);
    return sum;
  }

  /**
   * Checks if all numbers in a given array are finite
   * @param values array of numbers
   * @returns true if all numbers are finite, else false
   */
  static areFinite(values: number[]) {
    const areFinite = values.every(value => isFinite(value));
    return areFinite;
  }

}
