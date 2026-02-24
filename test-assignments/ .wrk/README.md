# Test task for .wrk

## Description

Library and CLI application for checking is a website was made with WordPress.

## Getting Started

### Dependencies

* Node.js
* NPM Package Manager as a part of Node.js

### Installing

* Clone a GitHub files

* Run in a root directory of the project
```sh
npm i
```
* And than execute
```sh
npm link
```
to run project via command line easily
* After your work with a project you can perform
```sh
npm remove -g check-wordpress
```
to uninstall package from the npm global dependencies

### Executing program

You can run the project with (in every case – without square brackets):

```sh
make check link=[link]
```
or just executing the file itself

```sh
bin/checkWordpress.js [link]
```

or with command line if you install the package globally

```sh
check-wordpress [link]
```
___
