---
layout: post
---

# YAML Ain't Markup Lang Basics of

person:
name: &name "Namraj"
occupation: "programmer"
age: !!float 36 # 36.0 force a value as float
gpa: !!str 3.5 # "3.5" force a value as str
fav_num: 1e+10
male: true
birthday: 1982-12-06 14:33:23 # ISO 8601
flaws: null

# children of person obj above

# list two ways

hobbies: - hiking - movies - riding bike
movies: ["Dark Knight", "Good Will Hunting"]

# conplex list three ways/obj different formats

friends: - name: "Steph"
age: 22 - { name: "Adam", age: 22 } - name: "joe"
age: 23
description: > # render single line by >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore impedit omnis fuga vel voluptatum, corporis id eveniet iste quis.
signature: | # preserve formatting newline spaces
Namraj
Mercury Media Academy
email - onesimplecode@outlook.com

# anchor a value and define and access using & symbol to define and \* to access

id: \*name #name

base: &base
var1: value1

foo:
<<: \*base # var1: value1 anchoring var1
