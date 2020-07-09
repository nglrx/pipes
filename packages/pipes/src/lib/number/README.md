# Number Pipes

A collection of pipes exported by `NglrxNumberPipesModule`.


## max

Finds the maximum from an array of numbers.

Usage: `array | max`

```html
{{ [10, 45, 200, 5, 92] | max }}
<!-- Returns 200 -->
```


## min

Finds the minimum from an array of numbers.

Usage: `array | min`

```html
{{ [10, 45, 200, 5, 92] | min }}
<!-- Returns 5 -->
```


## sum

Returns the sum of all numbers in a given array.

Usage: `array | sum`

```html
{{ [10, 45, 200, 5, 92] | sum }}
<!-- Returns 352 -->
```
