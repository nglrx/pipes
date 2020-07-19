![npm](https://img.shields.io/npm/v/@nglrx/pipes?label=npm)
![GitHub last commit](https://img.shields.io/github/last-commit/nglrx/pipes)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@nglrx/pipes)
[![Build Status](https://travis-ci.org/nglrx/pipes.svg?branch=master)](https://travis-ci.org/nglrx/pipes)
[![codecov](https://codecov.io/gh/nglrx/pipes/branch/master/graph/badge.svg)](https://codecov.io/gh/nglrx/pipes)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nglrx_pipes&metric=alert_status)](https://sonarcloud.io/dashboard?id=nglrx_pipes)
![npm](https://img.shields.io/npm/dm/@nglrx/pipes)
![GitHub](https://img.shields.io/github/license/nglrx/pipes?color=blue)

# @nglrx/pipes

A collection of pipes for Angular apps.

## Installation

Use [npm](https://www.npmjs.com/) to install  @nglrx/pipes.

```bash
npm i @nglrx/pipes
```

## Import Module

Import module `NglrxPipesModule` to your module for using all pipes.

```typescript
import { NglrxPipesModule } from '@nglrx/pipes';

@NgModule({
  //...
  imports: [
    NglrxPipesModule
  ]
})
export class YourModule { }
```

Alternatively, you can use pipes from specific module(s) like `NglrxNumberPipesModule` or `NglrxStringPipesModule`.

## Usage of Pipes

Pipes can be used in your component's *template*

```html
{{ 'This-is-a-string' | length }}
<!-- Returns 16 -->
```

They can also be *chained*

```html
{{ '  Another-string  ' | trim | length }}
<!-- Returns 14 -->
```

Or they can be used within *components* or *services* by calling the `transform` method

```typescript
import { LengthPipe } from '@nglrx/pipes';

@Component({
  providers: [ LengthPipe ]
})
export class YourComponent {
  
  constructor(private lengthPipe: LengthPipe) {
    this.lengthPipe.transform('Yet-another-string'); // Returns 18
  }
}
```


## Library of Pipes

- [String Pipes](#string-pipes)
  - [camelCase](#camelcase)
  - [charAt](#charat)
  - [lowerCase](#lowercase)
  - [padStart](#padstart)
  - [pascalCase](#pascalcase)
  - [sentenceCase](#sentencecase)
  - [slugify](#slugify)
  - [split](#split)
  - [titleCase](#titlecase)
  - [trim](#trim)
  - [trimLeft](#trimleft)
  - [trimRight](#trimright)
  - [upperCase](#uppercase)
- [Number Pipes](#number-pipes)
  - [abs](#abs)
  - [avg](#avg)
  - [max](#max)
  - [min](#min)
  - [sum](#sum)
- [Generic Pipes](#generic-pipes)
  - [length](#length)
  - [reverse](#reverse)


## String Pipes

A collection of pipes exported by `NglrxStringPipesModule`.


### camelCase

Converts a string to camel case and strips hyphens, underscores and whitespaces.

Usage: `string | camelCase`

```html
{{ 'Convert_to camel-case' | camelCase }}
<!-- Returns 'convertToCamelCase' -->
```


### charAt

Returns the character value at given position in a string.

Usage: `string | charAt[:position]`

Range of position is from 0 (default) to n-1, where n is length of the string.

```html
{{ 'This is a sample string.' | charAt:12 }}
<!-- Returns 'm' -->
```


### lowerCase

Converts a given string to lower case.

Usage: `string | lowerCase`

```html
{{ 'Convert TO LoWeR-case' | lowerCase }}
<!-- Returns 'convert to lower-case' -->
```


### padStart

Pads the given string with a fill string so that the resulting string reaches the specified max length. The fill string is prepended to the given string.\
Default fill string is space ' '.

Usage: `string | padStart:maxLength[:fillString]`

```html
{{ This is a test string! | padStart:27:'--' }}
<!-- Returns '-----This is a test string!' -->
```


### pascalCase

Converts a string to pascal case and strips hyphens, underscores and whitespaces.

Usage: `string | pascalCase`

```html
{{ 'convert_to PASCAL-case' | pascalCase }}
<!-- Returns 'ConvertToPascalCase' -->
```


### sentenceCase

Converts a string to sentence case.

Usage: `string | sentenceCase`

```html
{{ 'convert TO Sentence case.' | sentenceCase }}
<!-- Returns 'Convert to sentence case.' -->
```


### slugify

Slugifies a given string with an optional char separator.
Default separator char is hyphen '-'.\
Special characters are stripped from string.

Usage: `string | slugify[:separator]`

```html
{{ 'this_-is__a - string!' | slugify:'_' }}
<!-- Returns 'this_is_a_string' -->
```


### split

Splits a given string into an array of sub-strings using an optional delimiter.\
Default delimiter is space ' '.\
Optionally, you may also specify a limit (integer) on the number of splits.

Usage: `string | split[:delimiter][:limit]`

```html
{{ 'This_is_a_string_separated_with_underscore' | split:'_':4 }}
<!-- Returns ['This', 'is', 'a', 'string'] -->
```


### titleCase

Converts a string to titleCase case.

Usage: `string | titleCase`

```html
{{ 'convert TO title cASE.' | titleCase }}
<!-- Returns 'Convert To Title Case.' -->
```


### trim

Strips the leading and trailing whitespaces from a given string.

Usage: `string | trim`

```html
{{ ' This is a test string!  ' | trim }}
<!-- Returns 'This is a test string!' -->
```


### trimLeft

Strips the leading whitespaces from a given string.

Usage: `string | trimLeft`

```html
{{ ' This is a test string!  ' | trimLeft }}
<!-- Returns 'This is a test string!  ' -->
```


### trimRight

Strips the trailing whitespaces from a given string.

Usage: `string | trimRight`

```html
{{ ' This is a test string!  ' | trimRight }}
<!-- Returns ' This is a test string!' -->
```


### upperCase

Converts a given string to upper case.

Usage: `string | upperCase`

```html
{{ 'Convert TO UpPeR-case.' | upperCase }}
<!-- Returns 'CONVERT TO UPPER-CASE.' -->
```


## Number Pipes

A collection of pipes exported by `NglrxNumberPipesModule`.


### abs

Returns the absolute value of given number.

Usage: `number | abs`

```html
{{ -384 | abs }}
<!-- Returns 384 -->
```


### avg

Returns the average of all numbers in a given array.

Usage: `array | avg`

```html
{{ [10, 45, 200, 5, 92] | avg }}
<!-- Returns 70.4 -->
```


### max

Finds the maximum from an array of numbers.

Usage: `array | max`

```html
{{ [10, 45, 200, 5, 92] | max }}
<!-- Returns 200 -->
```


### min

Finds the minimum from an array of numbers.

Usage: `array | min`

```html
{{ [10, 45, 200, 5, 92] | min }}
<!-- Returns 5 -->
```


### sum

Returns the sum of all numbers in a given array.

Usage: `array | sum`

```html
{{ [10, 45, 200, 5, 92] | sum }}
<!-- Returns 352 -->
```


## Generic Pipes
A collection of pipes exported by `NglrxGenericPipesModule`.


### length

Returns the length of a given string or array.

Usage: `string-OR-array | length`

```html
{{ 'This is a test string!' | length }}
<!-- Returns 22 -->

{{ [10, 45, 200, 50, 92] | length }}
<!-- Returns 5 -->
```


### reverse

Reverses a given string or array (of any type).

Usage: `string-OR-array | reverse`

```html
{{ 'This is a test string!' | reverse }}
<!-- Returns '!gnirts tset a si sihT' -->

{{ ['a', 'b', 'c', 'd', 'e'] | reverse }}
<!-- Returns ['e', 'd', 'c', 'b', 'a'] -->
```

\
For more information on pipes, refer to [Angular - pipes](https://angular.io/guide/pipes) documentation.
