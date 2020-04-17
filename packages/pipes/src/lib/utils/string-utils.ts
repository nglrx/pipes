export class StringUtils {
  static toLowerCase(value: string): string {
    return value && value.toLowerCase();
  }

  static toSentenceCase(value: string): string {
    return value && value.charAt(0).toUpperCase() + value.substr(1);
  }

  static toTitleCase(value: string): string {
    return value && value.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.substr(1);
    }).join(' ');
  }

  static toUpperCase(value: string): string {
    return value && value.toUpperCase();
  }

}
