## Array Pipes

A collection of pipes exported by `NglrxArrayPipesModule`.

  - [combine](#combine)
  - [copyWithin](#copywithin)
  - [fill](#fill)
  - [join](#join)


### combine

Combines an array with other array(s) or single items of same type.

Usage: `array | combine [ : element | array ]...`

```html
{{ ['a', 'b', 'c'] | combine: ['d', 'e']: 'f' }}
<!-- Returns ['a', 'b', 'c', 'd', 'e', 'f'] -->
```


### copyWithin

Copies the portion of array marked by start and end to position specified by `target` within the same array.

If `start` is not specified then it copies from the beginning of array. If `end` is not specified then it copies till the end of array.\
Negative values of start and end are treated as length + start/end.

Usage: `array | copyWithin : target [ : start ] [ : end ]`

```html
{{ [1, 2, 3, 4, 5, 6] | copyWithin: 4: 1: -3 }}
<!-- Returns [1, 2, 3, 4, 2, 3] -->
```


### fill

Fills the portion of array marked by start and end with specified `value` of same type as array.

If `start` is not specified then it fills from the beginning of array. If `end` is not specified then it fills till the end of array.\
Negative values of start and end are treated as length + start/end.

Usage: `array | fill : value [ : start ] [ : end ]`

```html
{{ ['a', 'b', 'c', 'd', 'e', 'f'] | fill: '-': 2: -2 }}
<!-- Returns ['a', 'b', '-', '-', 'e', 'f'] -->
```


### join

Creates a string by concatenating all the strings in the given array using a separator.\
If unspecified, the default separator is comma `','`.

Usage: `array | join [ : separator ]`

```html
{{ ['This', 'is', 'a', 'string'] | join: '_' }}
<!-- Returns 'This_is_a_string' -->
```
