# Generic Pipes

A collection of pipes exported by `NglrxGenericPipesModule`.


## length

Returns the length of a given string or array.

Usage: `string-OR-array | length`

```html
{{ 'This is a test string!' | length }}
<!-- Returns 22 -->

{{ [10, 45, 200, 50, 92] | length }}
<!-- Returns 5 -->
```


## reverse

Reverses a given string or array (of any type).

Usage: `string-OR-array | reverse`

```html
{{ 'This is a test string!' | reverse }}
<!-- Returns '!gnirts tset a si sihT' -->

{{ ['a', 'b', 'c', 'd', 'e'] | reverse }}
<!-- Returns ['e', 'd', 'c', 'b', 'a'] -->
```
