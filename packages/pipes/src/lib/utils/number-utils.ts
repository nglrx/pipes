import { TypeUtils } from './type-utils';

export class NumberUtils {

  /**
   * Calculates sum of all numbers in an array
   * @param values Array of numbers
   * @returns Sum of numbers in array
   */
  static sum(values: number[]): number {
    return TypeUtils.isNullOrEmpty(values) ? null : values.reduce((sum, value) => sum + value, 0);
  }

}
