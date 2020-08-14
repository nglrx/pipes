## Array Pipes

A collection of pipes exported by `NglrxArrayPipesModule`.

  - [combine](#combine)
  - [copyWithin](#copywithin)
  - [every](#every)
  - [fill](#fill)
  - [join](#join)
  - [map](#map)
  - [some](#some)


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


### every

Checks whether all the elements of the given array satisfy the specified test.

A `callbackFn` function must be specified that accepts up to three arguments. The callbackFn is invoked for each element in the given array until it returns a false, or until the last element of the array.\
Optionally, a reference `thisArg` to an object to which the `this` keyword can refer in the callbackFn function may be passed.

Usage: `array | every : callbackFn`

```html
{{ ['a', 'b', 'c', 'd', 'e'] | every: (n: string) => n !== '' }}
<!-- Returns true -->

{{ [10, 11, 12, 13, 14] | every: (n: number) => n % 2 === 0) }}
<!-- Returns false -->
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


### map

Calls the specified callback function on each element of the given array, and returns an array of results returned by callback function.

A `callbackFn` function must be specified that accepts up to three arguments. The callbackFn is invoked for each element in the given array.\
Optionally, a reference `thisArg` to an object to which the `this` keyword can refer in the callbackFn function may be passed.

Usage: `array | map : callbackFn`

```html
{{ ['a', 'b', 'c', 'd', 'e'] | map: (n: string) => n.toUpperCase() }}
<!-- Returns ['A', 'B', 'C', 'D', 'E'] -->

{{ [1, 2, 3, 4, 5] | every: (n: number) => n * n) }}
<!-- Returns [1, 4, 9, 16, 25] -->
```


### some

Checks whether some the elements of the given array satisfy the specified test.

A `callbackFn` function must be specified that accepts up to three arguments. The callbackFn is invoked for each element in the given array until it returns a true, or until the last element of the array.\
Optionally, a reference `thisArg` to an object to which the `this` keyword can refer in the callbackFn function may be passed.

Usage: `array | some : callbackFn`

```html
{{ ['a', 'b', 'c', 'd', 'e'] | some: (n: string) => n === '' }}
<!-- Returns false -->

{{ [10, 11, 12, 13, 14] | some: (n: number) => n % 2 === 0) }}
<!-- Returns true -->
```
