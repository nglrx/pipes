## Number Pipes

A collection of pipes exported by `NglrxNumberPipesModule`.

  - [avg](#avg)
  - [max](#max)
  - [min](#min)
  - [sum](#sum)


### avg

Returns the average of all numbers in a given array.

Usage: `array | avg`

```html
{{ [10, 45, 200, 5, 92] | avg }}
<!-- Returns 70.4 -->
```


### max

Finds the maximum from an array of numbers.

Usage: `array | max`

```html
{{ [10, 45, 200, 5, 92] | max }}
<!-- Returns 200 -->
```


### min

Finds the minimum from an array of numbers.

Usage: `array | min`

```html
{{ [10, 45, 200, 5, 92] | min }}
<!-- Returns 5 -->
```


### sum

Returns the sum of all numbers in a given array.

Usage: `array | sum`

```html
{{ [10, 45, 200, 5, 92] | sum }}
<!-- Returns 352 -->
```
