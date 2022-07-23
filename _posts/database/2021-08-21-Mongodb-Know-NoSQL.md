---
layout: post
---

# Getting Ready and More Practice

nosql database with data stored into collections, collections is like tables in sql. Data is stored as objects.

## Install

```
brew install mongodb-community
brew services start mongodb-community
mongo
```

location: /usr/local/var/mongodb
start: mongod --config /usr/local/etc/mongod.conf

## Play around

`mongo` starts mongodb program

### Database

`db` show current db test  
`show databases`  
`use department` // use database department

### Collection

`show collections`
`db.person.find() // person is a collection
{ "\_id": ObjectId("5345e4t34543")}

```
db.createCollection('bio')
> db.createCollection('IT Department')
> db.createCollection('users')
{ "ok" : 1 }
> show collections
IT Department
bio
people
users
```

### Methods

#### Inserting data as objects

db.bio.insert({salut: 'Mrs', name: 'Ravina', age: 21})

```
> db.bio.insert({salut: 'Mr', name: 'Rabindra', age: 27, interests:['play golf', 'Swimming','Photography']})
> db.bio.insert({salut: 'Mrs', name: 'Ravina', age: 21})
```

#### Finding data

`> db.bio.find()` finds all data from bio collection of database department

```
> db.bio.find({gender: "Male"})
{ "_id" : ObjectId("60ee6c63d7870ef720aeb55a"), "salut" : "Mr", "name" : "Rabindra", "gender" : "Male", "age" : 27, "interests" : [ "play ludo", "Guitar", "Photography" ] }
```

### update

`> db.bio.update({name: 'Ravina'}, {name: 'Katrina'} `
