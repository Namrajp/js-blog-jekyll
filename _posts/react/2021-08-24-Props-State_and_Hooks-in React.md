---
layout: post
---

# Intro to props and State in React

Components is an isolated piece of interface. A blog website has sidebar and list of posts. Each post and list of posts are components. They are composed of other components.
Functional and Class components are there, first one is popular.

Example functional component:

```jsx
const BlogPostExcerpt = () => {
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  );
};
```

Class based component

```jsx
import React, { Component } from "react";

class BlogPostExcerpt extends Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <p>Description</p>
      </div>
    );
  }
}
```

## Props They are way to pass properties to components from top component to its every child.

```jsx
const BlogPostExcerpt = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
```

We can pass props in similar to HTML ATTRIBUTES, when we initialize it.

```jsx
const desc = 'A description'
//...
<BlogPostExcerpt title="A blog post" description={desc} />
```

## Children : A special prop. any value passed to body like something here

```jsx
<BlogPostExcerpt title="A blog post" description="{desc}">
  Something
</BlogPostExcerpt>
```

````jsx
<ChildComponent />
<ChildComponent color=green />
class ChildComponent = props => {
  console.log(props.color)
}```

## State Management
Two important Hooks in React are useState(0) and useEffect()

```js
useEffect(() => {
  getData()
})
````

We can add into that array a list of variables,

```jsx
let name, address;

useEffect(() => {
  getData();
}, [name, address]);
```
