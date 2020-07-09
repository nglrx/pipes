![npm](https://img.shields.io/npm/v/@nglrx/pipes?label=npm)
![GitHub last commit](https://img.shields.io/github/last-commit/nglrx/pipes)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@nglrx/pipes)
[![Build Status](https://travis-ci.org/nglrx/pipes.svg?branch=master)](https://travis-ci.org/nglrx/pipes)
[![codecov](https://codecov.io/gh/nglrx/pipes/branch/master/graph/badge.svg)](https://codecov.io/gh/nglrx/pipes)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nglrx_pipes&metric=alert_status)](https://sonarcloud.io/dashboard?id=nglrx_pipes)
![GitHub](https://img.shields.io/github/license/nglrx/pipes?color=blue)

# @nglrx/pipes

A collection of pipes for Angular apps.

## Installation

Use [npm](https://www.npmjs.com/) to install  @nglrx/pipes.

```bash
npm i @nglrx/pipes
```

## Import Module

Import module `NglrxPipesModule` to your module for using all pipes.

```typescript
import { NglrxPipesModule } from '@nglrx/pipes';

@NgModule({
  //...
  imports: [
    NglrxPipesModule
  ]
})
export class YourModule { }
```

Alternatively, you can use pipes from specific module(s)

```typescript
import { NglrxNumberPipesModule, NglrxStringPipesModule } from '@nglrx/pipes';

@NgModule({
  //...
  imports: [
    NglrxNumberPipesModule,
    NglrxStringPipesModule
  ]
})
export class YourModule { }
```

## Usage of Pipes

Pipes can be used in your component's *template*

```html
{{ 'This-is-a-string' | length }} <!-- Returns 16 -->
```

They can also be *chained*

```html
{{ '  Another-string  ' | trim | length }} <!-- Returns 14 -->
```

Or they can be used within *components* or *services* by calling the `transform` method

```typescript
import { LengthPipe } from '@nglrx/pipes';

@Component({
  providers: [ LengthPipe ]
})
export class YourComponent {
  
  constructor(private lengthPipe: LengthPipe) {
    this.lengthPipe.transform('Yet-another-string'); // Returns 18
  }
}
```


## Library

- [String Pipes](./src/lib/string/README)   
  1. [camelCase](./src/lib/string/README#camelCase)
  1. [charAt](#char-at)
  1. [lowerCase](#lower-case)
  1. [pascalCase](#pascal-case)
  1. [sentenceCase](#sentence-case)
  1. [slugify](#slugify)
  1. [titleCase](#title-case)
  1. [trim](#trim)
  1. [trimLeft](#trim-left)
  1. [trimRight](#trim-right)
  1. [upperCase](#upper-case)
- [Number](#number)
  1. [max](#max)
  1. [min](#min)
  1. [sum](#sum)
- [Generic](#generic)
  1. [length](#length)
  1. [reverse](#reverse)

For more information on pipes, refer to [Angular - pipes](https://angular.io/guide/pipes) documentation.
