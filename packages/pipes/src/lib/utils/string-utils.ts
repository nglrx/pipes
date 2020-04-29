export class StringUtils {
  static charAt(value: string, position?: number): string {
    return value && value.charAt(position);
  }

  static slugify(value: string, separator?: string): string {
    separator = separator || '-';
    return value && this.toLowerCase(value)
                        .replace(/[^a-z0-9\-_ ]/g, '')
                        .replace(/[\-_ ]+/g, separator);
  }

  static toCamelCase(value: string): string {
    return value && value.split(/[\-_ ]+/g)
                         .map((word, index) => {
                           return index === 0 ? this.toLowerCase(word) : this.toSentenceCase(word);
                         })
                         .join('');
  }

  static toLowerCase(value: string): string {
    return value && value.toLowerCase();
  }

  static toPascalCase(value: string): string {
    return value && value.split(/[\-_ ]+/g)
                         .map((word) => {
                           return this.toSentenceCase(word);
                         })
                         .join('');
  }

  static toSentenceCase(value: string): string {
    return value && this.toUpperCase(this.charAt(value)) + this.toLowerCase(value.substr(1));
  }

  static toTitleCase(value: string, separator?: string, exclusions?: string[]): string {
    separator = separator || ' ';
    return value && value.split(separator)
                         .map((word, index) => {
                           return index > 0 && exclusions && exclusions.includes(word)
                                  ? word : this.toSentenceCase(word);
                         })
                         .join(separator);
  }

  static toUpperCase(value: string): string {
    return value && value.toUpperCase();
  }

}
