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
   * @returns true if null or empty, else false
   */
  static isNullOrEmpty(array: any[]): boolean {
    return array == null || array.length === 0;
  }

}
