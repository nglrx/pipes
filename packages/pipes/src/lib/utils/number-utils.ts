import { TypeUtils } from './type-utils';

export class NumberUtils {

  /**
   * Calculates sum of all numbers in an array
   * @param values Array of numbers
   * @returns Sum of numbers in array
   */
  static sum(values: number[]): number {
    const sum = TypeUtils.isNullOrEmpty(values) ? null :
                values.reduce((currSum, value) => currSum + value, 0);
    return sum;
  }

}
