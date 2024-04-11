# First assignment

## Introduction

We arte familiar now with for loop

``` python
n = 4
for i in range(0, n):
    print(i)
```

It is a good solution when we know how many iterations we will perform. But let's imagine that we want to get a user's name, and we need to ask for it until we get a proper string.

## The While Loop

In situations like the one described above, where the number of iterations is not known beforehand, we can use a while loop. A while loop continues executing a block of code as long as a specified condition is true.

Here's how we can use a while loop to prompt the user for their name until they provide a non-empty string:

``` python
name = ""
while name == "":
    name = input("Please enter your name: ")
```

In this example:

* We initialize the variable name with an empty string.
* We use a while loop with the condition name == "" to repeatedly prompt the user for their name until they enter a non-empty string.
* Inside the loop, we use the input() function to get the user's input and assign it to the variable name.
* The loop continues until the user enters a non-empty string, at which point the condition name == "" becomes false, and the loop exits.

### Other benefit – additional flow control

Another benefit of using a while loop is the additional flow control it provides. Unlike for loops, which have a predetermined number of iterations based on a range or sequence, while loops allow for more dynamic control over the loop's execution flow.

Consider the following code snippet:

``` python
current_number = 1
while current_number <= 5:
    print(current_number)
    current_number += 1
print("Finished")
```

The loop continues as long as the specified condition remains true, allowing for dynamic and adaptable behavior in your code.
