## Array Pipes

A collection of pipes exported by `NglrxArrayPipesModule`.

  - [combine](#combine)
  - [join](#join)


### combine

Combines an array with other array(s) or single items of same type.

Usage: `array | combine [ : element | array ]...`

```html
{{ ['a', 'b', 'c'] | combine: ['d', 'e']: 'f' }}
<!-- Returns ['a', 'b', 'c', 'd', 'e', 'f'] -->
```


### join

Creates a string by concatenating all the strings in the given array using a separator.\
If unspecified, the default separator is comma `','`.

Usage: `array | join [ : separator ]`

```html
{{ ['This', 'is', 'a', 'string'] | join: '_' }}
<!-- Returns 'This_is_a_string' -->
```
