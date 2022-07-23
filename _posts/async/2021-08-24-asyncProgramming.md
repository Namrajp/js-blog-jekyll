---
layout: post
---

# Asynchronous Programming

**Asynchronous Programming means running programs without waiting for
execution line by line**. We can move onto next line during execution
if one line accessing data from database or server is taking wait time and we dont want to halt entire program.

Browsers provide API's like setTimeout,promise, async-await,fetch API, Storage API
for Asynchronous programs.These are commonly called by the name [Web API](https://en.wikipedia.org/wiki/Web_API).

In backend there are other api's like [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) api, graphQl api.

## Callbacks and setTimeout function

Callbacks are very useful in application programs.For a simple example,We can use callbacks using setTimeout function. We can see most functions in javascript like:

- forEach, fetch, promises.
- addEventListener, async await.
- map, filter, reduce use callbacks.

```js
setTimeout(function () {
  console.log("Hello");
}, 1000);
setTimeout(function () {
  console.log("It comes later.");
}, 5000);
setTimeout(function () {
  console.log("World");
}, 2000);
```

![Callback in sequence](/images/callback.png)

This prints without any sequence because the timer is synchronous. To display output in sequence, we can do use same code by nesting setTimeout functions into one.

> Point is second setTimeout depends on first and third depends on second.

![Callback in sequence](/images/sequence.png)

```js
setTimeout(function () {
  console.log("Hello");

  setTimeout(function () {
    console.log("It comes sooner.");
    setTimeout(function () {
      console.log("World");
    }, 2000);
  }, 5000);
}, 1000);
```

![Callback in sequence](/images/sequence.png)

More examples of callback using string functions,

```js
function makeUpperCasename(value) {
  console.log(value.toUpperCase());
}
// makeUpperCasename("Johathon");

handleName("Jimmy", makeUpperCasename);
handleName("Jimmy", reverseName);

function reverseName(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, cb) {
  const fullName = `${name} Carter `;
  cb(fullName);
  cb(fullName);
  cb(fullName);
  //  two gotchas, we donot invoke cb in function parameter
  //  and we can pass any functions as cb when we invoke it
  // and any number of time.
}
```

Array functions like forEach, map, filter and reduce callbacks. Event listeners use callbacks too.

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Hello World!");
});
// console.log(btn);
```

## Promise

We define promise using new constructor which takes and a callback as a parameter. We have an arrow function as callback. The callback has two parameters
which are methods of Promise API.

```js
const promise = new Promise((resolve, reject) => {
  // resolve("I am a resolve of promise");
  reject("I am a reject of promise");
});
console.log(promise);
```

We need to call promise after defining. We do that
using handlers '.then' and '.catch'.Both catch and then takes callback functions. We need to handle errors, inside catch method using error parameter, then we print error. We print result if there is no error inside the then method.

```js
promise
  .catch((error) => {
    console.error(error);
  })

  .then((data) => {
    console.log(data);
  });
```

## Async Await

Any function can become async by using async prefix. We call promise
using await afterwards. We can assign response or data as constants.

```js
const getProducts = () => {
  return new Promise((resolve, reject) => {
    resolve("fulfillling promises");
  });
};

const doSomething = async () => {
  const data = await getProducts();
  console.log(data);
};

doSomething();
```

## Fetch API

Fetch provides networking in Browser. We have access to response and
request using fetch. Just a fetch on a url returns a promise. We need
use async function and await to make sense of data returned.

`const result = fetch(url)`  
`console.log(result)`

Calling just fetch returns promise, so we use await and try catch block and enclose everything inside async function. IIFE is immediately invoked function expression that invokes itself.

```js
(async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
```
