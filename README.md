# pretty-JSON-stringify
## This module is under heavy development, expect many API breaking changes

> Stringify your JS objects with unquoted keys, single or double quoted strings and other pretty options

## Usage
```js
prettyStringify(object [,options])
```
### Options
#### quote `string`
The style of quote you want strings wrapped with. `'` or `"`
#### indent `string`
The string to be used for indentation.
`\t`, `  `, or`    `
#### initiaLindent `number`
How many times the entire JSON string should be indented.
0, 1, 2
