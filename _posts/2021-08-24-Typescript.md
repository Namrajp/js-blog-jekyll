---
layout: post
---

# Why learn Typescript?

- This _reduces the overall errors_ in your code because TS will warn you when you wrongfully use a certain type. It reduces runtime errors and because of static code analysis, so fewer errors and less testing.
- Type annotations can act like \__code documentation_.This makes code more readable and makes it easier for others and for us to understand what the code is supposed to do.
- **IDEs** can provide more specific and _smarter IntelliSense_ when they know exactly what types of data you are processing.

# Typescript Intro

- Extension: Typescript file extension is `.ts`

- Compile: Browser cannot understand typescript. So any `.ts` file needs to be compiled to javascript. Command `tsc --init ` can create tsconfig.json file in the root directory of the project has **compileOptions** key for _configuration_. Unused **compileOptions** can be deleted or commented.

- Install: Typescript can be installed globally or locally using

```
npm install -g typescript
npm install --save-dev typescript
```

## Built-in Types

All primitives types like string, number, boolean has built-in types.

Any variable can be assigned types to specify its data type.

```ts
const myName: string = "Namraj";
const myAge: number = 75;
```

Assigning type after declaring variables is called **type annotations**.

Its not even necessary , typescript infers the type of variable based on it usage.

Following is also valid typescript code.

`const myNamr = 'Jonathan'; `
// myName is inferred as `type string `  
In TypeScript, every variable whose type cannot be inferred becomes implicitly the type `any`.

By default null | undefined can be assigned to any variable but TypeScript comes with the strictNullChecks compiler option which does not allow assigning both to a variable.

## Arrays in Typescript

- string[] or number[]  
  similar syntax is Array<number> or Array<string>

## Union Types in typescript

const someValue: number | string = value;

## Functions can also receive type annotations.

Functions can only receive specified parameters in Typescript.

```ts
function introduction(name: string, age: number): string {
  return `Hello, my name is ${name} and I'm {age} years old`;
}
```

We can use `?` operator to specify optional parameters.

```ts
const introduction = (
  name: string,
  age: number,
  job?: string = "developer"
): string =>
  `Hello, my name is ${name} and I'm ${age} years old. I work as a ${job}`;
```

## How to Create Your Own Types in TypeScript

`type Operator = 'multiply' | 'add' | 'divide'; `
Let's now use this knowledge to create a simple calculator program. A user can only enter one of three operations - add, multiply, or divide.

```ts
type Operation = 'multiply' | 'add' | 'divide';

const calculator = (a: number, b:number, op: Operation): number => {
    switch(op) {
        case 'multiply':
            return a * b;
        case 'add':
            return a + b;
        case 'divide':
            if (b === 0) return 'Can't divide by 0;
            return a / b;
        default:
        return 'Operation unknow';
    }
}
```

We can also create custom types using the `interface` keyword. We can extend interface to another `interface`.

```ts
interface Person {
  name: string;
  title: string;
}

interface Engineer extends Person {
  sayHello: (message: string) => void;
}
```

Here, interface Person has two properties name and title, both are of type string.

interface Engineer has same properties and a method. Since Typescript is structurally typed language, both interfaces are of same type.  
We can use our defined interface as :

```ts
const newPerson: Person = {
  name: "Namraj",
  title: "FrontEnd Developer",
};
```

The most notable difference is that defining multiple interfaces with the same name will result in a merged interface. On the other hand, defining multiple types with the same name will result in an error indicating that the name is already declared.
