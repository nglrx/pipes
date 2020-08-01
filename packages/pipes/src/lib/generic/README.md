## Generic Pipes

A collection of pipes exported by `NglrxGenericPipesModule`.

  - [length](#length)
  - [reverse](#reverse)
  - [typeOf](#typeof)


### length

Returns the length of a given value of any supported type.\
Supported data types are string, array, number, boolean, or any data type which has own property 'length'.\
For an array the number of elements is returned. For others the number of characters in value is returned.

Usage: `value | length`

```html
{{ 'This is a test string!' | length }}
<!-- Returns 22 -->

{{ [10, 45, 200, 50, 92] | length }}
<!-- Returns 5 -->
```


### reverse

Reverses a given value of any supported type.\
Supported data types are string, array, number, boolean.\
For an array the sequence of elements is reversed. For others the sequence of characters in value is reversed.

Usage: `value | reverse`

```html
{{ 'This is a test string!' | reverse }}
<!-- Returns '!gnirts tset a si sihT' -->

{{ ['a', 'b', 'c', 'd', 'e'] | reverse }}
<!-- Returns ['e', 'd', 'c', 'b', 'a'] -->
```


### typeOf

Returns the type of given value.\
Returns the name of the type in string. All types are supported.

Usage: `value | typeOf`

```html
{{ 'This is a test string!' | typeOf }}
<!-- Returns 'string' -->

{{ { foo: 'bar' } | typeOf }}
<!-- Returns 'object' -->
```
