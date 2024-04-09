# Second assignment

## Introduction
So, now that you've gained experience and learned various JavaScript constructs, you might have noticed something inconvenient. Let's examine the code example from the previous lesson:

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
Is there any way to make a piece of code reusable? Yes, and it's called a function.

The principle is simple – you declare a function (and describe inside the function what you want to do) and then call the function. Let's rewrite the code:

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

But nothing happened? What is the problem? The problem is that we performed a calculation, but how do we get the result from the function? We need to return it:

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

It works! And works multiple times. But there are still many problems with our functions; it is too rigid. How could I multiply by three? Or how could I use another set of numbers to perform a calculation?

The answer is simple and very convenient: we can define parameters of the function. It is like a placeholders for future variables, that will be passed to the function. Let me show you:

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
Let's revise our new instruments: Now we can declare a function, set the parameters of the function, perform some operations inside, and return it back with the keyword return.

But there is one important thing about functions that you should understand, and it is called scope.

Take a guess: Is the following code possible (tip: variable was declared twice), and what will be the output?
``` js
const name = 'John';

function getName() {
  const name = 'Bill';
  return name;
}

console.log(getName()); // ?
```

Yes, the correct answer is "Bill," and we do not have an error! But why? As far as we know, it is not allowed to declare a variable twice!

The answer is that these variables are in different scopes.

One of them is in a local