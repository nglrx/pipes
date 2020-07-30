## Number Pipes

A collection of pipes exported by `NglrxNumberPipesModule`.

  - [abs](#abs)
  - [avg](#avg)
  - [max](#max)
  - [min](#min)
  - [pct](#pct)
  - [pow](#pow)
  - [sqrt](#sqrt)
  - [sum](#sum)


### abs

Returns the absolute value of given number.

Usage: `number | abs`

```html
{{ -384 | abs }}
<!-- Returns 384 -->
```


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


### pct

Returns how much percent is a number of the given total. If not specified default value is 100.\
Optionally, number of decimal places (integer) may be specified to round-off the percentage.

Usage: `number | pct [:total] [:decimalPlaces]`

```html
{{ 25 | pct : 483 : 2 }}
<!-- Returns 5.18 -->
```


### pow

Returns the value of the base raised to a specified power.\
Default value of exponent is 0.

Usage: `base | pow [:exponent]`

```html
{{ 4 | pow: 3 }}
<!-- Returns 64 -->
```


### sqrt

Returns the square root of given number.

Usage: `number | sqrt`

```html
{{ 625 | sqrt }}
<!-- Returns 25 -->
```


### sum

Returns the sum of all numbers in a given array.

Usage: `array | sum`

```html
{{ [10, 45, 200, 5, 92] | sum }}
<!-- Returns 352 -->
```
