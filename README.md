# ES6
description of ES6 Features

##let
`let` and `var` are used for scoping.
Variables defined using `let` are scoped within the nearest enclosing block(`{}`).
Variables defined using `var` are scoped within the nearest function block(`function(){};`).

```
var variableScoping = function() {
  var insideFnX = 'inside function var X';

  {
    var varX = 'inside scope var X';
    let letX = 'inside scope let X';

    console.log(insideFnX);  //prints 'inside function var X'
  }

  console.log(insideFnX);  //prints 'inside function var X'
  console.log(varX);  //prints 'inside scope var X'
  console.log(letX);  //throws error
};

variableScoping();
```

In above example, 
`insideFnX` variable is accessible from anywhere within the function `variableScoping`.
Variable `varX` defined using `var` is accessible within the function `variableScoping`, as its scope is limited within the function.
Variable `letX` defined using `let` is accessible only within the block, as its scope is limited the inner block.
