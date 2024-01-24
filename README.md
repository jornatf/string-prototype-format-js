# string-prototype-format-js

![Latest Version](https://img.shields.io/github/v/tag/jornatf/string-prototype-format-js?label=version&style=flat-square)
[![Licence](https://img.shields.io/github/license/jornatf/string-prototype-format-js?label=license&style=flat-square)](LICENCE.md)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/jornatf/string-prototype-format-js/run-tests.yml?branch=master&label=test&style=flat-square)](https://github.com/jornatf/string-prototype-format-js/actions?query=workflow%3Arun-tests+branch%3Amaster)
[![Downloads](https://img.shields.io/npm/dt/string-prototype-format-js?label=downloads&style=flat-square)](https://www.npmjs.com/package/string-prototype-format-js)

**string-prototype-format-js** is a [NPM Package](https://www.npmjs.com/package/string-prototype-format-js) 'String.prototype' extension to format a string replacing variables.

## Installation

```bash
# In your terminal, enter command:
npm install string-prototype-format-js
```

### Usage

#### Example

```javascript
require("string-prototype-format-js");

var str = "Hello I'm % and I'm % years old.";
var formatted = str.format(["John", 24]);

console.log(formatted);
// Output: "Hello I'm John and I'm 24 years old."
```

#### Function notice

```typescript
"string...".format([...args]: string[], varType?: string): string
```

| Params    | Type       | Description                                                      |
| --------- | ---------- | ---------------------------------------------------------------- |
| `args`    | `String[]` | Value of each variable in the same order initiated in the String |
| `varType` | `String`   | Where to put each value (Default: `$`)                           |

## Contributing

If you are interested in this project and want to improve it, fix errors or bugs, **you're welcome to contribute**.

## Credits

- [Jordan Nataf](https://github.com/jornatf)
- [All Contributors](../../contributors)

## Licence

The MIT License (MIT).

> [!Note]
> Please see [License File](LICENSE.md) for more information.
