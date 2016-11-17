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
