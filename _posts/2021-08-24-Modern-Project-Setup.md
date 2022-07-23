---
layout: post
---

# Modern and effective setup for any projects regardless of their size.

- Parcel to bundle our app
  `npm install -g parcel-bundler`
  Create an app.js and `console.log("Hello, World")`
  Run parcel watch app.js
  Parcel wil build our Javascript in dist/app.js file.

- Browser-sync to reload app
  `npm install -g browser-sync`
  Then in root folder, create html:5 html doc with script tag to link app.js aand create a paragraph p with Hello World.
  In same folder run, `browser-sync start --server --files`.
  Now, we have web server running on port 3000, opens browser window.

- Nodemon on global install, `npm run devStart` editing package.json file
  scripts to: `devStart`: "nodemon app.js".
  document.addEventListener("DOMContentLoaded", () => {})
  `document.addEventListener("DOMContentLoaded", () => {}) `
  If we add a form to index.html, and style with tailwind, we can do

```
document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault()
   const username = document.querySelector("input").value
    alert(username)
  })
})
```

```
import axios from "axios"

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form")
  form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const username = document.querySelector("input").value

    const response = await axios.get(`https://api.github.com/users/${username}`)
    console.log(response.data)
  })
})

"browserslist": [
  "since 2017-06"
]

const createCard = (data) => `
  <div>
		test
  </div>
`

`<div id="container" class="mt-10"></div>
const card = createCard(response.data)

document.querySelector("#container").insertAdjacentHTML("beforeend", card)
`
```
