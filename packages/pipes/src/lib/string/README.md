## String Pipes

A collection of pipes exported by `NglrxStringPipesModule`.

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

Pads the string with a fill string so that the resulting string reaches the specified max length. The fill string is prepended of the current string.\
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
