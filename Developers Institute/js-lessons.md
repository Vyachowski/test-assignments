<!-- Let's imagine that on previous lesson we discussed expressions and variables and the group is familiar with it -->
# First assignment

## Review of previous lesson
We already know about expressions and variables and how to use them. Let's quickly recall the key concepts.

![Illustration of expressions and variables](https://screenifyai.com/wp-content/uploads/2023/11/image-5-1024x629.png)

(Remind about const, let and var);

<<<<<<< HEAD
Do you have any questions about variables and expressions?

## Repetetive operations – how to make it convenient?
For now we know how to print in the console a number or a string.
=======
## Repetetive operations – how to make it convenient?
>>>>>>> refs/remotes/origin/main
However, what if we need to print to the console, for example, all numbers from 1 to 20?

Using the familiar terms, the first thing that comes to mind is to write the following code:
``` js
let i = 1;
console.log(i);

i += 1;
console.log(i);
<<<<<<< HEAD
// And so on 18 more times
=======
// И так еще 18 раз
>>>>>>> refs/remotes/origin/main
```

Will this code work? Yes. Is it a good solution? Following one of the main principles in programming - DRY (Don't Repeat Yourself), and just common sense, definitely no. Moreover, if we suddenly need to print all numbers from 1 to 1_000_000_000_000, we simply physically won't be able to write such code.

## Introducing the for Loop
For such purposes (repetitive operations), the JavaScript language has special statements - loops, which excellently solve such tasks. Specifically, in our situation, we'll need the for statement, which tells JS how many times to execute a certain instruction.

Let's describe the task not by detailing each step, but by stating the number of steps and the action at each of them.

I suggest this: Starting point - number 1, each step increases this value by one, and at each step, we'll print the current value to the console.

Let's write this in JS code::
``` js
for (let i = 0; i < 4; i++) {
  console.log("The current number is " + i) 
}
```

And in this case we can expand this code without any problems, just by changing one loop parameter. For example, let's print all numbers up to 1,000,000:

``` js
for (let i = 0; i < 1_000_000; i++) {
  console.log("The current number is " + i) 
}
```

# Second assignment