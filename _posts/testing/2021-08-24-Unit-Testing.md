---
layout: post
---

## Unit Testing with Jest

It’s an open source project maintained by Facebook, and it can test any JavaScript code.

## Setup

```
npm install --dev jest

{
  "scripts": {
    "test": "jest"
  }
}

npm install -g jest
npm run test
```

### Individual tests

To test individual tests, we need to install jest-cli like `npm i -g jest-cli` Then we must run a file using `jest path/to/file.test.js`.  
 Running `npm run test` tests all files within the root folder.

Jest is automatically installed in create-react-app, so if you use that, you don’t need to install Jest.

- Files to test extensions is `test.js`
  uppercase.test.js
  file uppercase.js
- We export a file of functions and import it using require, which do not need `.js` extension.

```js
module.exports = { sum, mul, sub, div };// export functions from math.js
const { sum, mul, sub, div } = require("./math"); //import function to math.test.js
npm run test; // run
jest math.test.js // runs specific file
```

# End to end testing with Cypress

Inside a project

```js
npx create-react-app cypressexample

cd cypressexample

npm install --only=dev cypress
```

## Run the Cypress desktop app

`Run the Cypress desktop app`
Try running the tests in the examples folder or add your own test files to cypress/integration
`npx cypress open`

## Running own tests

Since we installed it inside a React app, I want to make sure the app works as intended.

Delete the examples folder that contains all the tests, in the cypress/integration folder.

Then create a file named first.spec.js:

```js
describe("This test", () => {
  it("is working fine!", () => {
    expect(true).to.equal(true);
  });
});
```

Run command and open Desktop app, run first.spec.js.
`npx cypress open`
