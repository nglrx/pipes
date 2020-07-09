# @nglrx/pipes

## String Pipes

A collection of pipes exported by `NglrxStringPipesModule`.


### 1. camelCase

Converts a string to camel case and strips hyphens, underscores and whitespaces.

Usage: `string | camelCase`

```html
{{ 'Convert_to camel-case' | camelCase }}
<!-- convertToCamelCase -->
```


### 2. charAt

Returns the character value at given position in a string.

Usage: `string | charAt[:position]`

Range of position is from 0 (default) to n-1, where n is length of the string.

```html
{{ 'This is a sample string.' | charAt:12 }}
<!-- Returns 'm' -->
```


### 3. lowerCase

Converts a given string to lower case.

Usage: `string | lowerCase`

```html
{{ 'Convert TO LoWeR-case' | lowerCase }}
<!-- Returns 'convert to lower-case' -->
```


### 4. pascalCase

Converts a string to pascal case and strips hyphens, underscores and whitespaces.

Usage: `string | pascalCase`

```html
{{ 'convert_to PASCAL-case' | pascalCase }}
<!-- Returns 'ConvertToPascalCase' -->
```


### 5. sentenceCase

Converts a string to sentence case.

Usage: `string | sentenceCase`

```html
{{ 'convert TO Sentence case.' | sentenceCase }}
<!-- Returns 'Convert to sentence case.' -->
```


### 6. slugify

Slugifies a given string with an optional char separator.
Default separator char is hyphen '-'.\
Special characters are stripped from string.

Usage: `string | slugify[:separator]`

```html
{{ 'this_-is__a - string!' | slugify:'_' }}
<!-- Returns 'this_is_a_string' -->
```


### 7. titleCase

Converts a string to titleCase case.

Usage: `string | titleCase`

```html
{{ 'convert TO title cASE.' | titleCase }}
<!-- Returns 'Convert To Title Case.' -->
```


### 8. trim

Strips the leading and trailing whitespaces from a given string.

Usage: `string | trim`

```html
{{ ' This is a test string!  ' | trim }}
<!-- Returns 'This is a test string!' -->
```


### 9. trimLeft

Strips the leading whitespaces from a given string.

Usage: `string | trimLeft`

```html
{{ ' This is a test string!  ' | trimLeft }}
<!-- Returns 'This is a test string!  ' -->
```


### 10. trimRight

Strips the trailing whitespaces from a given string.

Usage: `string | trimRight`

```html
{{ ' This is a test string!  ' | trimRight }}
<!-- Returns ' This is a test string!' -->
```


### 11. upperCase

Converts a given string to upper case.

Usage: `string | upperCase`

```html
{{ 'Convert TO UpPeR-case.' | upperCase }}
<!-- Returns 'CONVERT TO UPPER-CASE.' -->
```
