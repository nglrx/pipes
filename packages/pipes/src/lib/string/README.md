## String Pipes

A collection of pipes exported by `NglrxStringPipesModule`.

  - [camelCase](#camelcase)
  - [charAt](#charat)
  - [concat](#concat)
  - [interpolate](#interpolate)
  - [lowerCase](#lowercase)
  - [padEnd](#padend)
  - [padStart](#padstart)
  - [pascalCase](#pascalcase)
  - [repeat](#repeat)
  - [sentenceCase](#sentencecase)
  - [slugify](#slugify)
  - [split](#split)
  - [titleCase](#titlecase)
  - [trim](#trim)
  - [trimLeft](#trimleft)
  - [trimRight](#trimright)
  - [truncate](#truncate)
  - [upperCase](#uppercase)


### camelCase

Converts a string to camel case and strips hyphens, underscores and whitespaces.

Usage: `string | camelCase`

```html
{{ 'Convert_to camel-case' | camelCase }}
<!-- Returns 'convertToCamelCase' -->
```


### charAt

Returns the character value at given position in a string.

Usage: `string | charAt [ : position ]`

Range of position is from 0 (default) to n-1, where n is length of the string.

```html
{{ 'This is a sample string.' | charAt: 12 }}
<!-- Returns 'm' -->
```


### concat

Concatenates one or more string(s) to current string at the end.

Usage: `string | concat: string1 [ : string2 ] ...`

```html
{{ 'This' | concat: ' is': ' a': ' string': '!' }}
<!-- Returns 'This is a string!' -->
```


### interpolate

Replaces marked up parameters surrounded by { and } delimiters in given string with target string values.\
The indices of parameters start from 0 and increment by 1.\
The target string values can be literals or variables and their position should match the index.

Usage: `string | interpolate: string1 [ : string2 ] ...`

```html
{{ 'This {0} an {1} {2}!' | interpolate: 'is': 'interpolated': 'string' }}
<!-- Returns 'This is an interpolated string!' -->
```


### lowerCase

Converts a given string to lower case.

Usage: `string | lowerCase`

```html
{{ 'Convert TO LoWeR-case' | lowerCase }}
<!-- Returns 'convert to lower-case' -->
```


### padEnd

Pads the given string with a fill string so that the resulting string reaches the specified max length. The fill string is appended to the given string.\
Default fill string is space `' '`.

Usage: `string | padEnd: maxLength [ : fillString ]`

```html
{{ This is a test string! | padEnd: 29: '---' }}
<!-- Returns 'This is a test string!-------' -->
```


### padStart

Pads the given string with a fill string so that the resulting string reaches the specified max length. The fill string is prepended to the given string.\
Default fill string is space `' '`.

Usage: `string | padStart: maxLength [ : fillString ]`

```html
{{ This is a test string! | padStart: 27: '--' }}
<!-- Returns '-----This is a test string!' -->
```


### pascalCase

Converts a string to pascal case and strips hyphens, underscores and whitespaces.

Usage: `string | pascalCase`

```html
{{ 'convert_to PASCAL-case' | pascalCase }}
<!-- Returns 'ConvertToPascalCase' -->
```


### repeat

Repeats a given string 'count' number of times separated by an optional delimiter.\
Default count is `1`. Default delimiter is empty string `''`.\
An error is thrown if the value of count is less than 1.

Usage: `string | repeat [ : count ] [ : delimiter ]`

```html
{{ 'Repeated' | repeat: 5: '_' }}
<!-- Returns Repeated_Repeated_Repeated_Repeated_Repeated -->
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

Usage: `string | slugify [ : separator ]`

```html
{{ 'this_-is__a - string!' | slugify: '_' }}
<!-- Returns 'this_is_a_string' -->
```


### split

Splits a given string into an array of sub-strings using an optional delimiter.\
Default delimiter is space `' '`.\
Optionally, you may also specify a limit (integer) on the number of splits.

Usage: `string | split [ : delimiter ] [ : limit ]`

```html
{{ 'This_is_a_string_separated_with_underscore' | split: '_': 4 }}
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


### truncate

Shortens the given string to specified `length` followed by an ellipsis `'...'`.
Optionally, you may also specify a suffix (string).
An error is thrown if the value of `length` is less than 1.

Usage: `string | truncate : length [ : suffix ]`

```html
{{ 'This is a test string!' | truncate : 14 }}
<!-- Returns 'This is a test...' -->
```


### upperCase

Converts a given string to upper case.

Usage: `string | upperCase`

```html
{{ 'Convert TO UpPeR-case.' | upperCase }}
<!-- Returns 'CONVERT TO UPPER-CASE.' -->
```
