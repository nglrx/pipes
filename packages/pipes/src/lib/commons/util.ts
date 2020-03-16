export class Util {
  static isString(value: any): boolean {
    return typeof value === 'string';
  }

  static isNumber(value: any): boolean {
    return typeof value === 'number';
  }

  static isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
