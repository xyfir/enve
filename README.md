JSON-parsed environment variables. No dependencies. Parses string values in `process.env` with `JSON.parse()` to `process.enve`.

Used by **[illuminsight](https://www.illuminsight.com)**, **[Ptorx](https://ptorx.com)** and other **[Xyfir](https://www.xyfir.com)** projects.

[![npm version](https://badge.fury.io/js/enve.svg)](https://badge.fury.io/js/enve)
[![Build Status](https://travis-ci.org/xyfir/enve.svg?branch=master)](https://travis-ci.org/xyfir/enve)

Due to its simplicity, this project should not need frequent updates.

# Usage

Let's assume you have an `.env` file with the following data:

```env
STRING_VAR="Hello"
NUMBER_VAR=1234
BOOL_VAR=true
OBJECT_VAR={"foo":"bar"}
ALSO_STRING_VAR=Hello
```

Note that an `.env` file is completely irrelevant to how enve works. This is just an example. How you get the environment variables into your app is up to you.

Also note that the string variables may differ on how they handle quotes based on how your environment variables are passed to your app and how they're parsed _before_ enve gets to them. Just remember, all enve does is pass the value to `JSON.parse()`, if that _fails_ then it falls back to the original string value.

```js
// Only needed in your entry file
import 'enve';
// or...
require('enve');

process.env.STRING_VAR === '"Hello"';
process.enve.STRING_VAR === 'Hello';

process.env.NUMBER_VAR === '1234';
process.enve.NUMBER_VAR === 1234;

process.env.BOOL_VAR === 'true';
process.enve.BOOL_VAR === true;

process.env.OBJECT_VAR === '{"foo":"bar"}';
process.enve.OBJECT_VAR.foo === 'bar';

process.env.ALSO_STRING_VAR === 'Hello';
process.enve.ALSO_STRING_VAR === 'Hello';
```

## TypeScript

enve works fine with TypeScript.

```ts
import 'enve';

declare global {
  namespace NodeJS {
    interface Process {
      enve: {
        foo: string;
        bar: boolean;
        baz: {
          qux: number;
        };
      };
    }
  }
}
```
