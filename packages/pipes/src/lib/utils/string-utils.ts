export class StringUtils {
  static toLowerCase(value: string): string {
    return value && value.toLowerCase();
  }

  static toSentenceCase(value: string): string {
    return value && this.toUpperCase(value.charAt(0)) + value.substr(1);
  }

  static toTitleCase(value: string, separator?: string, exclusions?: string[]): string {
    separator = separator || ' ';
    return value && value.split(separator)
    .map((word, index) => {
      return index > 0 && exclusions && exclusions.includes(word)
            ? word : this.toSentenceCase(word);
    }).join(separator);
  }

  static toUpperCase(value: string): string {
    return value && value.toUpperCase();
  }

}
