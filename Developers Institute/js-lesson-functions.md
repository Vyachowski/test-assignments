# Second assignment

## Introduction
So now guys you are really experienced and you know a lot of JS constructions. But you may notice that something is really discomfortable.

Let take a look at the example of the code from the previous lesson:

``` js
// We need to multiply each number of array by different numbers
const numbers = [1, 2, 3, 4, 5];

const multipliedNumbersByTwo = [];
for (let i = 0; i < numbers.length; i++) {
  multipliedNumbersByTwo.push(numbers[i] * 2);
} // Result: multipliedNumbersByTwo = [2, 4, 6, 8, 10]

const multipliedNumbersByThree = [];
for (let i = 0; i < numbers.length; i++) {
  multipliedNumbersByThree.push(numbers[i] * 3);
} // Result: multipliedNumbersByThree = [3, 6, 9, 12, 15]

const multipliedNumbersByTwenty = [];
for (let i = 0; i < numbers.length; i++) {
  multipliedNumbersByTwenty.push(numbers[i] * 20);
} // Result: multipliedNumbersByTwenty = [20, 40, 60, 80, 100]
```

Do you feel that is something wrong with this code? I do! And you may remember the DRY rule (Do not repeat your self) and it is definetely violated. 

## The function – the building block of any program
Is that any way to make piece of the code reusable? Yes, and it is caleed function.

The principle is simple – you need to declare a function (and dsescribe inside the function what do you want to do) and then call the function. Let's rewrite the code:

``` js
function multiplyByTwo() {
  const numbers = [1, 2, 3, 4, 5];

  let multipliedNumbersByTwo = [];
  for (let i = 0; i < numbers.length; i++) {
    multipliedNumbersByTwo.push(numbers[i] * 2);
  }
}
```

Let's call it and print the result:
``` js
console.log(multiplyByTwo());
```

But nothing happened? What is the problem? The problem need that we performed a calculation, but how to get the result from the function? We need to return it:

``` js
function multiplyByTwo() {
  const numbers = [1, 2, 3, 4, 5];

  let multipliedNumbersByTwo = [];
  for (let i = 0; i < numbers.length; i++) {
    multipliedNumbersByTwo.push(numbers[i] * 2);
  }

  return multipliedNumbersByTwo;
}
```

Let's call it again and print the result:
``` js
console.log(multiplyByTwo());
console.log(multiplyByTwo());
console.log(multiplyByTwo());
```

It works! And works multiple times. But it is still many problems with our functions, it is too rigid. How could I multiply by three? Or how could I use another set of numbers to perform a calculation?

Answer is simple and very convinient, we can define a parameter(s) of the function, let me show:

``` js
function multiplyBy(numbers, multiplier) {
  const multipliedNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    multipliedNumbers.push(numbers[i] * multiplier);
  }

  return multipliedNumbers;
}
```

And let's call it multiply times with different arguments:

``` js
const numbers = [1, 2, 3, 4, 5];

console.log(multiplyBy(number, 2)); //  [2, 4, 6, 8, 10]
console.log(multiplyBy(number, 3)); //  [3, 6, 9, 12, 15]
console.log(multiplyBy(number, 20)); // [20, 40, 60, 80, 100]
```

> Important thing: In essence, arguments are the values received by the function, whereas parameters are the variables used to define the function's behavior.

## Let's make your own function!

> Task: Create your function to get a square of any number. Hints: Declaration, parameters, logic, return.

## Curly braces – important sign
So lets revise our new instruments: Now we can declare a function, set the parameters of the function, perform some operations inside and return it back with keyword return.

But there is one important thing about functions that you should understand and it is called scoope.

Make a guess is that code possible (tip: variable was declared twice) and what will be the output? 
``` js
const name = 'John';

function getName() {
  const name = 'Bill';
  return name;
}

console.log(getName()); // ?
```

Yes, the right answer is Bill and we do not have an error! But why, as far as we now it is not allowed to declare a variable twice!

Answer is that these variables are in different scopes.

One of them is in a local