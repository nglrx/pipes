import { Pipe, PipeTransform } from '@angular/core';

export enum RoundType {
  Default,
  Floor,
  Ceil
}

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, decimalPlaces: number = 0, roundType?: RoundType): number {
    const factor = Math.pow(10, decimalPlaces);

    switch (roundType) {
      case RoundType.Floor:
        return Math.floor(value * factor) / factor;
      case RoundType.Ceil:
        return Math.ceil(value * factor) / factor;
      case RoundType.Default:
      default:
        return Math.round(value * factor) / factor;
    }
  }

}
