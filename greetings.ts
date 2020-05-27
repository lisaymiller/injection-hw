function sayHello(word): string {
  //specifies that it will return a string
  //could use any - dynamic type; void - no value; enum - named set of constants
  return "Hello, " + word; //concatitination = add
}

var word = "universe";

document.getElementById("wordReplace").innerHTML = sayHello(word);

//type coming in must be string or number
function genericExample<T extends string | number>(
  num1: T,
  num2: T
): string | number {
  if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + num2;
  } else {
    return (num1 as number) + (num2 as number); //Casting
  }
}

//if string comes in, return concats them together

//if number coming in, return adds the two numbers together

// let result = genericExample(4, 6);
let result = genericExample("4", "4");

console.log(result);
