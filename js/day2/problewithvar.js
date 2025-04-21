let married = true;

// Var is global scoped
if (married) {
  let noOfChildrens = 2;
  console.log("I have" + noOfChildrens + "childrens");
  // block scope variable
} else {
  var noOfChildrens = 0;
  console.log("I have" + noOfChildrens + "children");
}

console.log("Value outside block scope", noOfChildrens);
