## Array Pipes

A collection of pipes exported by `NglrxArrayPipesModule`.

  - [join](#join)


### join

Creates a string by concatenating all the strings in the given array using a separator.\
If unspecified, the default separator is comma `','`.

Usage: `array | join [ : separator ]`

```html
{{ ['This', 'is', 'a', 'string'] | join: '_' }}
<!-- Returns 'This_is_a_string' -->
```
