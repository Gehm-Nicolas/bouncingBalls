# bouncingBalls

Simple example of bouncing balls on a web browser, based on a [tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice) from [MDN web docs](https://developer.mozilla.org/en-US/).

<div align="center">
<img src="./bouncingBalls.PNG" alt="bouncing balls" class="center">
</div>

## Built With:

<ul>
    <li><a href="https://classic.yarnpkg.com/en/">yarn</a> - Package manager </li>
    <li><a href="https://nodejs.org/en/">Node.js®</a> - JavaScript runtime platform</li>
    <li> <a href="https://babeljs.io/">babel</a> - JavaScript compiler mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments</li>
    <li><a href="https://webpack.js.org/">webpack</a> - Static module bundler</li>
</ul>

## Getting Started

In order to get your project development dependencies setup, follow the steps

### Download Node.js and yarn

Download and install Node.js from <a href="https://nodejs.org/en/">here</a>.

Install yarn package manager:
```
npm install -g yarn
```

### Setting our development environment

#### Yarn

Access your project's root folder and run the following commands in a terminal in order to setup and install all project's dependencies:
```
yarn init
```

You can just hit enter to answear all the questions. It will fill the fields automatically with default values. This command will create "package.json", in which there wiil be stored all dependencies of the project.

#### Babel

Add babel command line interface:
```
yarn add @babel/cli
```

This command will generate "yarn.lock" file and "node_modules" file.

Add a babel preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s)
```
yarn add @babel/preset-env
yarn add @babel/core
```

Create ".babelrc" file in your project's root folder with the following code inside:
```
{
    "presets": ["@babel/preset-env"]
}
```

#### Webpack

Add webpack:
```
yarn add webpack webpack-cli -D
yarn add babel-loader -D
```

#### Webpack devServer

In order to get a server running:
```
yarn add webpack-dev-server -D
```

### Running the project

In order to run the project just execute the following command in the terminal:
```
yarn dev
```

Then access in your browser this server, as shown at the terminal messages generated with the previous command:
```
http://localhost:8080/
```

## Acknowledgments

This project was made in order to provide personal experience with frontend development and learn how to use <a href="https://classic.yarnpkg.com/en/">yarn</a>, <a href="https://nodejs.org/en/">Node.js®</a>, <a href="https://babeljs.io/">babel</a>, and <a href="https://webpack.js.org/">webpack</a> tools.

## To-do list:
- [x] Collision detection 
- [ ] Implement the score counter
- [ ] Understand why collision detection doesn't work with multiple balls (Does it need threads?)
- [ ] Change ball's directions when a collision is detected
- [ ] Update canvas width and height parameters when window resize event occurs

