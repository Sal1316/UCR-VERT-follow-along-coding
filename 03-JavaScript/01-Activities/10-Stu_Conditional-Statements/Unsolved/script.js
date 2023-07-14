// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x === 51); 
var expression2 = (x === 50);

// Write Your JavaScript Code Here

if(expression1 && expression2) {// true true
      console.log(expression1 + " ✅" + expression2  + " ✅" );
} 
else if(expression1){// true false
      console.log(expression1 + " ✅" + expression2  + " ❌" );
} 
else if(expression2){// false true
      console.log(expression1 + " ❌" + expression2  + " ✅" );
} 
else {// false false
      console.log(expression1 + " ❌" + expression2  + " ❌" );
}

