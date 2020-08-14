/*
 * Public API Surface of pipes
 */
export { NglrxPipesModule } from './nglrx-pipes.module';

export { NglrxArrayPipesModule } from './array/nglrx-array-pipes.module';
export { CombinePipe } from './array/combine/combine.pipe';
export { CopyWithinPipe } from './array/copyWithin/copy-within.pipe';
export { EveryPipe } from './array/every/every.pipe';
export { FillPipe } from './array/fill/fill.pipe';
export { FirstPipe } from './array/first/first.pipe';
export { JoinPipe } from './array/join/join.pipe';
export { LastPipe } from './array/last/last.pipe';
export { MapPipe } from './array/map/map.pipe';
export { SomePipe } from './array/some/some.pipe';

export { NglrxGenericPipesModule } from './generic/nglrx-generic-pipes.module';
export { LengthPipe } from './generic/length/length.pipe';
export { ReversePipe } from './generic/reverse/reverse.pipe';
export { TypeOfPipe } from './generic/type-of/type-of.pipe';

export { NglrxNumberPipesModule } from './number/nglrx-number-pipes.module';
export { AbsPipe } from './number/abs/abs.pipe';
export { AvgPipe } from './number/avg/avg.pipe';
export { MaxPipe } from './number/max/max.pipe';
export { MinPipe } from './number/min/min.pipe';
export { PctPipe } from './number/pct/pct.pipe';
export { PowPipe } from './number/pow/pow.pipe';
export { RoundPipe, RoundType } from './number/round/round.pipe';
export { SqrtPipe } from './number/sqrt/sqrt.pipe';
export { SumPipe } from './number/sum/sum.pipe';

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
