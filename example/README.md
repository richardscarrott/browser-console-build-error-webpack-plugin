# example.js

``` javascript
var sayHello = function() {
    console.log('Hello. This file has a syntax error'));
};
```

# output.js

``` javascript
throw new Error('\nERROR in ./example/example.js\nModule parse failed: /Users/Rich/Projects/browser-console-build-error-webpack-plugin/example/example.js Line 2: Unexpected token )\nYou may need an appropriate loader to handle this file type.\n| var sayHello = function() {\n|     console.log('Hello. This file has a syntax error'));\n| };')
```

# Info

```
Hash: a9fb8f88c6cebfe91bfe
Version: webpack 1.5.3
Time: 36ms
   [0] ./example.js -1 [built] [failed]

ERROR in ./example.js
Module parse failed: /Users/Rich/Projects/browser-console-build-error-webpack-plugin/example/example.js Line 2: Unexpected token )
You may need an appropriate loader to handle this file type.
| var sayHello = function() {
|     console.log('Hello. This file has a syntax error'));
| };
```