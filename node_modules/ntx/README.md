# ntx

## install

`npm install --save-dev ntx`

## usage

```js
// tasks.js
const { start, r } = require("ntx")
start({
    test: r`mocha ./out/**/*.js`
})
// and `node tasks.js test`
```
