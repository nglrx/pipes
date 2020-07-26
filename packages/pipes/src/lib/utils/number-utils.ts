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

}
