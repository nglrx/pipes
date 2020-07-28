/*
 * Public API Surface of pipes
 */
export { NglrxPipesModule } from './nglrx-pipes.module';

export { NglrxGenericPipesModule } from './generic/nglrx-generic-pipes.module';
export { LengthPipe } from './generic/length/length.pipe';
export { ReversePipe } from './generic/reverse/reverse.pipe';
export { TypeOfPipe } from './generic/type-of/type-of.pipe';

export { NglrxStringPipesModule } from './string/nglrx-string-pipes.module';
export { CamelCasePipe } from './string/camel-case/camel-case.pipe';
export { CharAtPipe } from './string/char-at/char-at.pipe';
export { ConcatPipe } from './string/concat/concat.pipe';
export { LowerCasePipe } from './string/lower-case/lower-case.pipe';
export { PadEndPipe } from './string/pad-end/pad-end.pipe';
export { PadStartPipe } from './string/pad-start/pad-start.pipe';
export { PascalCasePipe } from './string/pascal-case/pascal-case.pipe';
export { SentenceCasePipe } from './string/sentence-case/sentence-case.pipe';
export { SplitPipe } from './string/split/split.pipe';
export { SlugifyPipe } from './string/slugify/slugify.pipe';
export { TitleCasePipe } from './string/title-case/title-case.pipe';
export { TrimPipe } from './string/trim/trim.pipe';
export { TrimLeftPipe } from './string/trim-left/trim-left.pipe';
export { TrimRightPipe } from './string/trim-right/trim-right.pipe';
export { UpperCasePipe } from './string/upper-case/upper-case.pipe';

export { NglrxNumberPipesModule } from './number/nglrx-number-pipes.module';
export { AbsPipe } from './number/abs/abs.pipe';
export { AvgPipe } from './number/avg/avg.pipe';
export { MaxPipe } from './number/max/max.pipe';
export { MinPipe } from './number/min/min.pipe';
export { PowPipe } from './number/pow/pow.pipe';
export { SqrtPipe } from './number/sqrt/sqrt.pipe';
export { SumPipe } from './number/sum/sum.pipe';
