![npm](https://img.shields.io/npm/v/@nglrx/pipes?label=npm)
![GitHub last commit](https://img.shields.io/github/last-commit/nglrx/pipes)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@nglrx/pipes)
[![Build Status](https://travis-ci.org/nglrx/pipes.svg?branch=master)](https://travis-ci.org/nglrx/pipes)
[![codecov](https://codecov.io/gh/nglrx/pipes/branch/master/graph/badge.svg)](https://codecov.io/gh/nglrx/pipes)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nglrx_pipes&metric=alert_status)](https://sonarcloud.io/dashboard?id=nglrx_pipes)
![npm](https://img.shields.io/npm/dm/@nglrx/pipes)
![GitHub](https://img.shields.io/github/license/nglrx/pipes?color=blue)

# @nglrx/pipes

A library of pipes for Angular apps.

## Installation

Use [npm](https://www.npmjs.com/) to install @nglrx/pipes.

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
{% raw %}{{ 'This-is-a-string' | length }}
<!-- Returns 16 -->{% endraw %}
```

They can also be *chained*

```html
{% raw %}{{ '  Another-string  ' | trim | length }}
<!-- Returns 14 -->{% endraw %}
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
  - [concat](#concat)
  - [lowerCase](#lowercase)
  - [padEnd](#padend)
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
  - [pct](#pct)
  - [pow](#pow)
  - [round](#round)
  - [sqrt](#sqrt)
  - [sum](#sum)
- [Array Pipes](#array-pipes)
  - [combine](#combine)
  - [join](#join)
- [Generic Pipes](#generic-pipes)
  - [length](#length)
  - [reverse](#reverse)
  - [typeOf](#typeof)


## String Pipes

A collection of pipes exported by `NglrxStringPipesModule`.


### camelCase

Converts a string to camel case and strips hyphens, underscores and whitespaces.

Usage: `string | camelCase`

```html
{% raw %}{{ 'Convert_to camel-case' | camelCase }}
<!-- Returns 'convertToCamelCase' -->{% endraw %}
```


### charAt

Returns the character value at given position in a string.

Usage: `string | charAt [ : position ]`

Range of position is from 0 (default) to n-1, where n is length of the string.

```html
{% raw %}{{ 'This is a sample string.' | charAt: 12 }}
<!-- Returns 'm' -->{% endraw %}
```


### concat

Concatenates one or more string(s) to current string at the end.<br />

Usage: `string | concat: string1 [ : string2 ] ...`

```html
{% raw %}{{ 'This' | concat: ' is': ' a': ' string': '!' }}
<!-- Returns 'This is a string!' -->{% endraw %}
```


### lowerCase

Converts a given string to lower case.

Usage: `string | lowerCase`

```html
{% raw %}{{ 'Convert TO LoWeR-case' | lowerCase }}
<!-- Returns 'convert to lower-case' -->{% endraw %}
```


### padEnd

Pads the given string with a fill string so that the resulting string reaches the specified max length. The fill string is appended to the given string.<br />
Default fill string is space `' '`.

Usage: `string | padEnd: maxLength [ : fillString ]`

```html
{% raw %}{{ This is a test string! | padEnd: 29: '---' }}
<!-- Returns 'This is a test string!-------' -->{% endraw %}
```


### padStart

Pads the given string with a fill string so that the resulting string reaches the specified max length. The fill string is prepended to the given string.<br />
Default fill string is space `' '`.

Usage: `string | padStart: maxLength [ : fillString ]`

```html
{% raw %}{{ This is a test string! | padStart: 27: '--' }}
<!-- Returns '-----This is a test string!' -->{% endraw %}
```


### pascalCase

Converts a string to pascal case and strips hyphens, underscores and whitespaces.

Usage: `string | pascalCase`

```html
{% raw %}{{ 'convert_to PASCAL-case' | pascalCase }}
<!-- Returns 'ConvertToPascalCase' -->{% endraw %}
```


### sentenceCase

Converts a string to sentence case.

Usage: `string | sentenceCase`

```html
{% raw %}{{ 'convert TO Sentence case.' | sentenceCase }}
<!-- Returns 'Convert to sentence case.' -->{% endraw %}
```


### slugify

Slugifies a given string with an optional char separator.
Default separator char is hyphen '-'.<br />
Special characters are stripped from string.

Usage: `string | slugify [ : separator ]`

```html
{% raw %}{{ 'this_-is__a - string!' | slugify: '_' }}
<!-- Returns 'this_is_a_string' -->{% endraw %}
```


### split

Splits a given string into an array of sub-strings using an optional delimiter.<br />
Default delimiter is space `' '`.<br />
Optionally, you may also specify a limit (integer) on the number of splits.

Usage: `string | split [ : delimiter ] [ : limit ]`

```html
{% raw %}{{ 'This_is_a_string_separated_with_underscore' | sp lit: '_': 4 }}
<!-- Returns ['This', 'is', 'a', 'string'] -->{% endraw %}
```


### titleCase

Converts a string to titleCase case.

Usage: `string | titleCase`

```html
{% raw %}{{ 'convert TO title cASE.' | titleCase }}
<!-- Returns 'Convert To Title Case.' -->{% endraw %}
```


### trim

Strips the leading and trailing whitespaces from a given string.

Usage: `string | trim`

```html
{% raw %}{{ ' This is a test string!  ' | trim }}
<!-- Returns 'This is a test string!' -->{% endraw %}
```


### trimLeft

Strips the leading whitespaces from a given string.

Usage: `string | trimLeft`

```html
{% raw %}{{ ' This is a test string!  ' | trimLeft }}
<!-- Returns 'This is a test string!  ' -->{% endraw %}
```


### trimRight

Strips the trailing whitespaces from a given string.

Usage: `string | trimRight`

```html
{% raw %}{{ ' This is a test string!  ' | trimRight }}
<!-- Returns ' This is a test string!' -->{% endraw %}
```


### upperCase

Converts a given string to upper case.

Usage: `string | upperCase`

```html
{% raw %}{{ 'Convert TO UpPeR-case.' | upperCase }}
<!-- Returns 'CONVERT TO UPPER-CASE.' -->{% endraw %}
```


## Number Pipes

A collection of pipes exported by `NglrxNumberPipesModule`.


### abs

Returns the absolute value of given number.

Usage: `number | abs`

```html
{% raw %}{{ -384 | abs }}
<!-- Returns 384 -->{% endraw %}
```


### avg

Returns the average of all numbers in a given array.

Usage: `array | avg`

```html
{% raw %}{{ [10, 45, 200, 5, 92] | avg }}
<!-- Returns 70.4 -->{% endraw %}
```


### max

Finds the maximum from an array of numbers.

Usage: `array | max`

```html
{% raw %}{{ [10, 45, 200, 5, 92] | max }}
<!-- Returns 200 -->{% endraw %}
```


### min

Finds the minimum from an array of numbers.

Usage: `array | min`

```html
{% raw %}{{ [10, 45, 200, 5, 92] | min }}
<!-- Returns 5 -->{% endraw %}
```


### pct

Returns how much percent is a number of the given total. If not specified default value is 100.<br />
Optionally, number of decimal places (integer) may be specified to round-off the percentage.

Usage: `number | pct [ : total ] [ : decimalPlaces ]`

```html
{% raw %}{{ 25 | pct: 483: 2 }}
<!-- Returns 5.18 -->{% endraw %}
```


### pow

Returns the value of the base raised to a specified power.<br />
Default value of exponent is 0.

Usage: `base | pow [ : exponent ]`

```html
{% raw %}{{ 4 | pow: 3 }}
<!-- Returns 64 -->{% endraw %}
```


### round

Returns the rounded value of given number. By default the value is rounded to the nearest integer.

It also accepts an optional argument `RoundType` for rounding the value up or down.<br />
`RoundType.Default` = Default rounding as in `Math.round()`<br />
`RoundType.Floor` = Round down as in `Math.floor()`<br />
`RoundType.Ceil` = Round up as in `Math.ceil()`

Optionally, the number of decimal places to which the result should be rounded may also be specified.

Usage: `number | round [ : decimalPlaces] [ : roundType ]`

```html
{% raw %}{{ 1234.56789 | round }}
<!-- Returns 1235 -->

{{ 1234.56789 | round: 3: RoundType.Floor }}
<!-- Returns 1234.567 -->

{{ 9876.54321 | round: 2: RoundType.Ceil }}
<!-- Returns 9876.54 -->{% endraw %}
```


### sqrt

Returns the square root of given number.

Usage: `number | sqrt`

```html
{% raw %}{{ 625 | sqrt }}
<!-- Returns 25 -->{% endraw %}
```


### sum

Returns the sum of all numbers in a given array.

Usage: `array | sum`

```html
{% raw %}{{ [10, 45, 200, 5, 92] | sum }}
<!-- Returns 352 -->{% endraw %}
```


## Array Pipes

A collection of pipes exported by `NglrxArrayPipesModule`.


### combine

Combines an array with other array(s) or single items of same type.

Usage: `array | combine [ : element | array ]...`

```html
{% raw %}{{ ['a', 'b', 'c'] | combine: ['d', 'e']: 'f' }}
<!-- Returns ['a', 'b', 'c', 'd', 'e', 'f'] -->{% endraw %}
```


### join

Creates a string by concatenating all the strings in the given array using a separator.<br />
If unspecified, the default separator is comma `','`.

Usage: `array | join [ : separator ]`

```html
{% raw %}{{ ['This', 'is', 'a', 'string'] | join: '_' }}
<!-- Returns 'This_is_a_string' -->{% endraw %}
```


## Generic Pipes

A collection of pipes exported by `NglrxGenericPipesModule`.


### length

Returns the length of a given value of any supported type.<br />
Supported data types are string, array, number, boolean, or any data type which has own property 'length'.<br />
For an array the number of elements is returned. For others the number of characters in value is returned.

Usage: `value | length`

```html
{% raw %}{{ 'This is a test string!' | length }}
<!-- Returns 22 -->

{{ [10, 45, 200, 50, 92] | length }}
<!-- Returns 5 -->{% endraw %}
```


### reverse

Reverses a given value of any supported type.<br />
Supported data types are string, array, number, boolean.<br />
For an array the sequence of elements is reversed. For others the sequence of characters in value is reversed.

Usage: `value | reverse`

```html
{% raw %}{{ 'This is a test string!' | reverse }}
<!-- Returns '!gnirts tset a si sihT' -->

{{ ['a', 'b', 'c', 'd', 'e'] | reverse }}
<!-- Returns ['e', 'd', 'c', 'b', 'a'] -->{% endraw %}
```


### typeOf

Returns the type of given value.<br />
Returns the name of the type in string. All types are supported.

Usage: `value | typeOf`

```html
{% raw %}{{ 'This is a test string!' | typeOf }}
<!-- Returns 'string' -->

{{ { foo: 'bar' } | typeOf }}
<!-- Returns 'object' -->{% endraw %}
```

<br />
For more information on pipes, refer to [Angular - pipes](https://angular.io/guide/pipes) documentation.
