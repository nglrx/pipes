/*
 * Public API Surface of pipes
 */
export { NglrxPipesModule } from './nglrx-pipes.module';

export { NglrxGenericPipesModule } from './generic/nglrx-generic-pipes.module';
export { LengthPipe } from './generic/length/length.pipe';
export { ReversePipe } from './generic/reverse/reverse.pipe';

export { NglrxStringPipesModule } from './string/nglrx-string-pipes.module';
export { CharAtPipe } from './string/char-at/char-at.pipe';
export { TrimPipe } from './string/trim/trim.pipe';
export { TrimLeftPipe } from './string/trim-left/trim-left.pipe';
export { TrimRightPipe } from './string/trim-right/trim-right.pipe';
