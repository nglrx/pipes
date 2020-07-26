export class TypeUtils {
  static isString(value: any): boolean {
    return typeof value === 'string';
  }

  static isNumber(value: any): boolean {
    return typeof value === 'number';
  }

  static isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  static isArray(value: any): boolean {
    return Array.isArray(value);
  }

  /**
   * Checks if array is null or empty
   * @param array Array of any type
   * @returns true if empty, else false
   */
  static isEmpty(array: any[]): boolean {
    return !Array.isArray(array) || array.length === 0;
  }

  /**
   * Checks if value is undefined or null
   * @param value value of any type
   * @returns true if undefined or null, else false
   */
  static isNullOrUndefined(value: any) {
    return typeof value === 'undefined' || value === null;
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
