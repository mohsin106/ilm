# MERN Stack video notes 
(https://youtu.be/mrHNSanmqQ4)

# How to implement security with MongoDB
https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa0tsUmFJYl9JTE4xY181RC1GZmpiZHpFaDN3Z3xBQ3Jtc0tuc2U4R2JGU3Q4N3RFUWVCVzV2SXlvZ1VNU2psZWRBM0dhTmh2bEswb0NMbUhqcWNQd2FCUW85alNuMGtuSzNhRU5PU0VOYVN5YVNMVW8xQmk4UFhXTGVKRDZKb2VfTl9ZNVRtUWpiZWJlakJkN3FpMA&q=https%3A%2F%2Fwww.mongodb.com%2Fsecurity-best-practices&v=mrHNSanmqQ4

# Backend Architecture
## server.js
- runs express router, and contains parameters on how to route incoming traffic to the backend MongoDB.
- every routes default beginning is `/api/v1/restaurants`
- this file references `restaurants.route.js`

## restaurants.route.js
- recieves routes sent by the `server.js` file and routes the API calls to the appropriate methods inside of the `restaurants.controller.js`
- the "/" route in this file references the "/api/v1/restaurants" route in `server.js`
- a "/id" route in this file means the API call was made to "/api/v1/restaurants/id"
- "/reviews" in this file references the "/api/v1/restaurants/reviews" URL

## restaurants.controller.js
- imports the `restaurantsDAO.js` file
- contains a `RestaurantController` class that has a few methods associated to it.
- recieves data from `restaurants.route.js` and executes the appropriate method.
- when this (`router.route("/").get(RestaurantsCtrl.apiGetRestaurants)`) is called in `restaurants.route.js` the `apiGetRestaurants` method is executed in this file and the data is returned.
- this file imports the `restaurantsDAO.js` Data Access Object file so that it can send DB queries to MongDB and get the results.
- when `apiGetRestaurants` is called in this file it calls `getRestaurants` from the `restaurantsDAO.js` file.
- the `restaurantsDAO.js` file then makes the query inside of MongoDB and returns the results back to this file.
- to pass multiple variables in the URL you can do so like this `http://localhost:5002/api/v1/restaurants?page=2&restaurantsPerPage=3`, this will set the `restaurantsPerPage` const to 3 and the `page` const to 2

## reviews.controller.js
- imports the `reviewsDAO.js` file
- contains a `ReviewsController` class that has a few methods associated to it.
- receives data from `restaurant.route.js` and executes the appropriate method.
- updateReview checks to see if a valid user_id is passed in.
- if it doesn't recognize the user_id then an error in PostMan is thrown ("unable to update review - user may not be original poster")

## restaurantsDAO.js
- this is the data access object file and it allows you to query tables in your Mongo backend database.
- once the `index.js` file make a connection to the DB, it calls the `injectDB` method in this file and passes it the reference to the MongoDB connection.
- this file then uses the `.env` file by calling `process.env.RESTREVIEWS_NS` to get the `RESTREVIEWS_NS` parameter and makes a connection to the DB.
- this file is also used by `restaurants.controller.js` for making queries to the MongoDB

## index.js
- imports `app, mongodb, dotenv, restaurantsDAO.js, reviewsDAO.js`
- this file starts the communication to the MongDB backend via the `server.js`
- makes a reference to MongoDB `MongoClient` and uses this reference to make connection to the MongoDB.
- this file also uses the `.env` file to get parameters for the database.
- this file also calls `injectDB` from `restaurantsDAO.js` to establish a MongoDB connection.
- `injectDB` allows `restaurantsDAO.js` to establish a connection to the MongoDB and `restaurantsDAO.js` holds this connection for subsequent database access requests.

# MongoDB text search
In this tutorial when you want to search for a restaurant by its name, then you first need to create a "text" index inside of the "restaurants" collection.

You log into the WebUI for MongoDB and go to the "restaurants" collection and then click on "CREATE INDEX". The you put "name" for the field and set that equal to "text".

Now you will be able to search for restarants by the name field.


# Frontend Architecture

## services/restaurant.js
Contains all your code that will be used to make API calls to the MongDB backend database.

Imports the `http-command.js` file which uses Axios.

The `RestaurantDataService` class contains the CRUD methods that will be used to get, add, update, and delete data from the database.


## http-common.js
This is our helper file and imports the Axios library.
Contains the `baseURL` to our backend server `http://localhost:5002/api/v1/restaurants`


## components/restaurants-lists.js
Imports the `RestaurantDataService` class from the `services/restaurant.js` file.

After the page renders this component will call the `retrieveRestaurants` function which calls the `RestaurantDataService.getAll()` method to make a get call to retrieve all the restaurants from the database. 

# MongoDB commands

## List your databases
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> show dbs
ilm_dismissal       144.00 KiB
sample_analytics      9.14 MiB
sample_geospatial     1.37 MiB
sample_guides        40.00 KiB
sample_mflix         48.64 MiB
sample_restaurants    7.61 MiB
sample_supplies       1.12 MiB
sample_training      57.27 MiB
sample_weatherdata    2.77 MiB
admin               336.00 KiB
local                 4.40 GiB
```
## List the collections (tables) of your dabase
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> show collections
dismissal
testdb
```
## To insert single item into a collection
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.insertOne({ name: "John" })
{
  acknowledged: true,
  insertedId: ObjectId("632231ace2e8980c824addab")  ## unique id is automatically generated by MongoDB for you.
}
```
## To list all records from your collection
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find()
[
  { _id: ObjectId("62dc64ddea4a4c95888195bf"), name: 'Mohsin' },
  {
    _id: ObjectId("62dc659cea4a4c95888195c0"),      ## unique id is automatically generated by MongoDB for you.
    name: 'Shaan',
    age: 27,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc66d1ea4a4c95888195c1"),
    name: 'Shobi',
    age: 35,
    address: { street: '5 Gibbs Pond Rd' },
    hobbies: [ 'buying shoes' ]
  },
  { _id: ObjectId("62dc66d1ea4a4c95888195c2"), name: 'Deen', age: 11 },
  {
    _id: ObjectId("62dc6856ea4a4c95888195c3"),
    name: 'Shaan2',
    age: 47,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  { _id: ObjectId("632231ace2e8980c824addab"), name: 'John' }
]

```

Every object you store inside MongoDB is called a document.
Documents live inside collections and collections live inside a database.
There are no schemas or columns.

## Add multiple key/value pairs inside on document
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.insertOne({ name: "Nadia", age: 42, address: { street: "123 Main St" }, hobbies: [ "instagram" ] })
{
  acknowledged: true,
  insertedId: ObjectId("63223496e2e8980c824addac")
}
```


## Insert multiple records at once 
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.insertMany([{ name: "Deen" }, { name: "Summer"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("632361fd2f5358d90bf6d3e5"),
    '1': ObjectId("632361fd2f5358d90bf6d3e6")
  }
}
```

## Insert mutliple records with many key/value pairs
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.insertMany([{ name: "Gulshan", age: 75, hobbies: ["sleeping","eating","talking"], address: { street: "123 Main St", city: "Atlanta"} }, { name: "Nia", age: 5, hobbies: ["playing","swimming"], address:{ street: "123 Main St", city: "Atlanta"}} ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("632363f52f5358d90bf6d3e7"),
    '1': ObjectId("632363f52f5358d90bf6d3e8")
  }
}
```

## How to query MongoDB.

### Limit two results
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find().limit(2)
[
  { _id: ObjectId("62dc64ddea4a4c95888195bf"), name: 'Mohsin' },
  {
    _id: ObjectId("62dc659cea4a4c95888195c0"),
    name: 'Shaan',
    age: 27,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  }
]
```

### Sort query result by name and limit to 3 results
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find().sort({ name: 1}).limit(3)
[
  { _id: ObjectId("62dc66d1ea4a4c95888195c2"), name: 'Deen', age: 11 },
  { _id: ObjectId("632361fd2f5358d90bf6d3e5"), name: 'Deen' },
  {
    _id: ObjectId("632363f52f5358d90bf6d3e7"),
    name: 'Gulshan',
    age: 75,
    hobbies: [ 'sleeping', 'eating', 'talking' ],
    address: { street: '123 Main St', city: 'Atlanta' }
  }
]
```

You can use `.sort{ name: -1}` to sort the data in reverse order.

### Sort query result by two parameters (name and age) and limit to 3 results
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find().sort({ name: -1, age: -1}).limit(3)
[
  { _id: ObjectId("632361fd2f5358d90bf6d3e6"), name: 'Summer' },
  {
    _id: ObjectId("62dc66d1ea4a4c95888195c1"),
    name: 'Shobi',
    age: 35,
    address: { street: '5 Gibbs Pond Rd' },
    hobbies: [ 'buying shoes' ]
  },
  {
    _id: ObjectId("62dc68d9ea4a4c95888195c6"),
    name: 'Shobi',
    age: 25,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  }
]
```

### Skip a record
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find().limit(3)
[
  { _id: ObjectId("62dc64ddea4a4c95888195bf"), name: 'Mohsin' },  <=== this record gets skipped below
  {
    _id: ObjectId("62dc659cea4a4c95888195c0"),
    name: 'Shaan',
    age: 27,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc66d1ea4a4c95888195c1"),
    name: 'Shobi',
    age: 35,
    address: { street: '5 Gibbs Pond Rd' },
    hobbies: [ 'buying shoes' ]
  }
]
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find().skip(1).limit(3)
[
  {
    _id: ObjectId("62dc659cea4a4c95888195c0"),
    name: 'Shaan',
    age: 27,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc66d1ea4a4c95888195c1"),
    name: 'Shobi',
    age: 35,
    address: { street: '5 Gibbs Pond Rd' },
    hobbies: [ 'buying shoes' ]
  },
  { _id: ObjectId("62dc66d1ea4a4c95888195c2"), name: 'Deen', age: 11 }  <=== this record gets added to the result
]
```

### Query based on a field value.
Find all records with "Shaan" equal to the `name` field
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ name: "Shaan"})
[
  {
    _id: ObjectId("62dc659cea4a4c95888195c0"),
    name: 'Shaan',
    age: 27,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc687eea4a4c95888195c4"),
    name: 'Shaan',
    age: 57,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc689bea4a4c95888195c5"),
    name: 'Shaan',
    age: 67,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  }
]
```

### Return specific fields based on query result
Show `name` and `hobbies` field where `name` equals "Shaan"
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ name: "Shaan"}, { name: 1, hobbies: 1})
[
  {
    _id: ObjectId("62dc659cea4a4c95888195c0"),
    name: 'Shaan',
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc687eea4a4c95888195c4"),
    name: 'Shaan',
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc689bea4a4c95888195c5"),
    name: 'Shaan',
    hobbies: [ 'botting' ]
  }
]
```
To prevent `_id` from printing in the output you can do this:
`db.testdb.find({ name: "Shaan"}, { name: 1, hobbies: 1, _id: 0})`
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ name: "Shaan"}, { name: 1, hobbies: 1, _id: 0})
[
  { name: 'Shaan', hobbies: [ 'botting' ] },
  { name: 'Shaan', hobbies: [ 'botting' ] },
  { name: 'Shaan', hobbies: [ 'botting' ] }
]
```

### Get all the fields except for `age` and `_id`
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ name: "Shaan"}, { age: 0, _id: 0})
[
  {
    name: 'Shaan',
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    name: 'Shaan',
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    name: 'Shaan',
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  }
]
```

## Complex Queries
Complex queries require an object for the field that you want to apply the query to. Example: `db.testdb.find({ name: { $ne: "Shaan"} })`
The conditional operators start with a $. (`$eq, $ne, $gt, $gte, $lt, $lte`)
### Get all users whose name is not equal to "Shaan"
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ name: { $ne: "Shaan"} })
[
  { _id: ObjectId("62dc64ddea4a4c95888195bf"), name: 'Mohsin' },
  {
    _id: ObjectId("62dc66d1ea4a4c95888195c1"),
    name: 'Shobi',
    age: 35,
    address: { street: '5 Gibbs Pond Rd' },
    hobbies: [ 'buying shoes' ]
  },
  { _id: ObjectId("62dc66d1ea4a4c95888195c2"), name: 'Deen', age: 11 },
  {
    _id: ObjectId("62dc6856ea4a4c95888195c3"),
    name: 'Shaan2',
    age: 47,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc68d9ea4a4c95888195c6"),
    name: 'Shobi',
    age: 25,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  }
```

### Get all users whose name is in a list of names
Below query will only return records where the `name` field is equal to "Summer" or "Deen".
You can also use "not-in" conditional like this `$nin: {}`
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ name: { $in: ["Summer","Deen"]} })
[
  { _id: ObjectId("62dc66d1ea4a4c95888195c2"), name: 'Deen', age: 11 },
  { _id: ObjectId("632361fd2f5358d90bf6d3e5"), name: 'Deen' },
  { _id: ObjectId("632361fd2f5358d90bf6d3e6"), name: 'Summer' }
]
```

### Get records where a specific field exists
Over here we're using `$exists` to check if a field exists.
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ age: { $exists: true} })
[
  {
    _id: ObjectId("62dc659cea4a4c95888195c0"),
    name: 'Shaan',
    age: 27,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc66d1ea4a4c95888195c1"),
    name: 'Shobi',
    age: 35,
    address: { street: '5 Gibbs Pond Rd' },
    hobbies: [ 'buying shoes' ]
  }
```
You can do `$exists: false` in the example above to return records that don't have a field name called `age`

### Combine multiple queries
Get records where age is greater than 20 and let than 40
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ age: { $gt: 20, $lt: 50} })
[
  {
    _id: ObjectId("62dc659cea4a4c95888195c0"),
    name: 'Shaan',
    age: 27,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc66d1ea4a4c95888195c1"),
    name: 'Shobi',
    age: 35,
    address: { street: '5 Gibbs Pond Rd' },
    hobbies: [ 'buying shoes' ]
  },
  {
    _id: ObjectId("62dc6856ea4a4c95888195c3"),
    name: 'Shaan2',
    age: 47,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  }
```
Same query as above but this time we're adding another AND clause to search for only the records with the `name` field equal to "Shaan"
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ age: { $gt: 20, $lt: 50}, name: "Shaan" })
[
  {
    _id: ObjectId("62dc659cea4a4c95888195c0"),
    name: 'Shaan',
    age: 27,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  }
]
```

### Another way to write the AND query
This query is also using a sort option to sort the results by age.
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ $and: [ { age: { $gt: 20, $lt: 50}}] }).sort({ age: 1})
[
  {
    _id: ObjectId("62dc68d9ea4a4c95888195c6"),
    name: 'Shobi',
    age: 25,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc659cea4a4c95888195c0"),
    name: 'Shaan',
    age: 27,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc66d1ea4a4c95888195c1"),
    name: 'Shobi',
    age: 35,
    address: { street: '5 Gibbs Pond Rd' },
    hobbies: [ 'buying shoes' ]
  }
```

### Or query
Return all records where the `age` is less than or equal to 25 OR `name` is equal to "Shaan"
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ $or: [{ age: { $lte: 25}},{ name: "Shaan"}] })
[
  {
    _id: ObjectId("62dc659cea4a4c95888195c0"),
    name: 'Shaan',
    age: 27,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  { _id: ObjectId("62dc66d1ea4a4c95888195c2"), name: 'Deen', age: 11 },
  {
    _id: ObjectId("62dc687eea4a4c95888195c4"),
    name: 'Shaan',
    age: 57,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc689bea4a4c95888195c5"),
    name: 'Shaan',
    age: 67,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc68d9ea4a4c95888195c6"),
    name: 'Shobi',
    age: 25,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("632363f52f5358d90bf6d3e8"),
    name: 'Nia',
    age: 5,
    hobbies: [ 'playing', 'swimming' ],
    address: { street: '123 Main St', city: 'Atlanta' }
  }
]
```

### NOT query (for negating)
Return all records where the `age` is NOT greater than or equal to 50.
NOT also returns records that don't have the field `age` in them. Only NOT does this.
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ age: {$not: { $lte: 50}} })
[
  { _id: ObjectId("62dc64ddea4a4c95888195bf"), name: 'Mohsin' },
  {
    _id: ObjectId("62dc687eea4a4c95888195c4"),
    name: 'Shaan',
    age: 57,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  {
    _id: ObjectId("62dc689bea4a4c95888195c5"),
    name: 'Shaan',
    age: 67,
    address: { street: '246 Cherry Ln' },
    hobbies: [ 'botting' ]
  },
  { _id: ObjectId("632231ace2e8980c824addab"), name: 'John' },
  { _id: ObjectId("632361fd2f5358d90bf6d3e5"), name: 'Deen' },
  { _id: ObjectId("632361fd2f5358d90bf6d3e6"), name: 'Summer' },
  {
    _id: ObjectId("632363f52f5358d90bf6d3e7"),
    name: 'Gulshan',
    age: 75,
    hobbies: [ 'sleeping', 'eating', 'talking' ],
    address: { street: '123 Main St', city: 'Atlanta' }
  }
]
```

### Using Expressions
You need to use the `$expr:` syntax. You also need to use a `$` infront of each column name, otherwise you will get all the records returned.
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ $expr: { $gt: ["$debt","$balance"] } })
[
  {
    _id: ObjectId("63238d382f5358d90bf6d3e9"),
    name: 'Mohsin',
    balance: 100,
    debt: 200
  }
]
```
Notice `$debt` and `$balance` being used to reference those columns (fields).


### Query nested objects
The address field is a nested object since it has a field called "street" in it.
You can reference the nested "street" object like this:
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find({ "address.street": "123 Main St" })
[
  {
    _id: ObjectId("63223496e2e8980c824addac"),
    name: 'Nadia',
    age: 42,
    address: { street: '123 Main St' },
    hobbies: [ 'instagram' ]
  },
  {
    _id: ObjectId("632363f52f5358d90bf6d3e7"),
    name: 'Gulshan',
    age: 75,
    hobbies: [ 'sleeping', 'eating', 'talking' ],
    address: { street: '123 Main St', city: 'Atlanta' }
  },
  {
    _id: ObjectId("632363f52f5358d90bf6d3e8"),
    name: 'Nia',
    age: 5,
    hobbies: [ 'playing', 'swimming' ],
    address: { street: '123 Main St', city: 'Atlanta' }
  }
]
```
The "street" field was reference using `address.street`


### Find one record
Find one record where the age is less than or equal to 50
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.findOne({ age: { $lte: 50}})
{
  _id: ObjectId("62dc659cea4a4c95888195c0"),
  name: 'Shaan',
  age: 27,
  address: { street: '246 Cherry Ln' },
  hobbies: [ 'botting' ]
}
```

## Count document
If you want to get a count of how many records exists that match your query you can use `.countDocuments()`
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.countDocuments({ age: { $lte: 50}})
7    <======= 7 documents exist that match this query
```

## Updating records
Update one document where the age equals 75 and set it to 76
You need to use the `$set` syntax when updating a field for a record.
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.updateOne({ age: 75 }, { $set: { age: 76 } } )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,      <=== 1 record was updated
  modifiedCount: 1,
  upsertedCount: 0
}
```

### Increment 
You need to use the `$inc` syntax
Increment the age for a specific `_id` by 3
```Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.updateOne({ _id: ObjectId("63223496e2e8980c824addac") }, { $inc: { age: 10 } } )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```
If you specify `age: -10` then the age will decremented by 10.

### Rename a column
You need to use the `$rename` syntax
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.updateOne({ _id: ObjectId("63223496e2e8980c824addac") }, { $rename: { name: "firstName" } } )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find( { _id: ObjectId("63223496e2e8980c824addac")})
[
  {
    _id: ObjectId("63223496e2e8980c824addac"),
    age: 37,
    address: { street: '123 Main St' },
    hobbies: [ 'instagram' ],
    firstName: 'Nadia'
  }
]

```

### Rename all columns. (ex: rename "dateDismissed" to "lastDismissed")
Atlas atlas-1u9up2-shard-0 [primary] ilm> db.students.updateMany({}, { $rename: {dateDismissed: "lastDismissed"}})

## Delete a column
You need to use the `$unset` syntax
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.updateOne({ _id: ObjectId("63223496e2e8980c824addac") }, { $unset: { age: "" } } )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

## Add item to an array object
You need to use the `$push` syntax
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.updateOne({ _id: ObjectId("63223496e2e8980c824addac") }, { $push: { hobbies:"facebook" } } )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find( { _id: ObjectId("63223496e2e8980c824addac")})
[
  {
    _id: ObjectId("63223496e2e8980c824addac"),
    address: { street: '123 Main St' },
    hobbies: [ 'instagram', 'facebook' ],
    name: 'Nadia'
  }
]
```

## Remove item from an array object
You need to use the `$pull` syntax
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.updateOne({ _id: ObjectId("63223496e2e8980c824addac") }, { $pull: { hobbies:"facebook" } } )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.find( { _id: ObjectId("63223496e2e8980c824addac")})
[
  {
    _id: ObjectId("63223496e2e8980c824addac"),
    address: { street: '123 Main St' },
    hobbies: [ 'instagram' ],
    name: 'Nadia'
  }
]
```

## Update many users
Remove the `hobbies` field for every record where the `address` field exists
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.updateMany({ address: { $exists: true}}, { $unset: { $hobbies: ""}} )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 9,
  modifiedCount: 0,
  upsertedCount: 0
}
```
# Update many based on condition
Set the `dismissed` field to `true` if its currently `false`.

Atlas atlas-1u9up2-shard-0 [primary] ilm> db.students.updateMany( {}, [ { $set: { dismissed: { $switch: { branches: [ { case: { $eq: ["$dismissed", false] }, then: true }], default: "" } } } }])
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 7,
  modifiedCount: 7,
  upsertedCount: 0
}

Update `dateDismissed` to `""` if `dismissed` is set to `false`.

 ```
 db.students.updateMany(
    { },
    [
      { $set: { dateDismissed: { $switch: {
                             branches: [
                                 { case: { $eq: [ "$dismissed", false]}, then: ""}
                             ],
                             default: ""
      }}} }
    ]
 )
 ```

# How to start backend and frontend

You need first go to dismissal-app4/backend and run `nodemon start`. This will connect to the online MongoDB server.

Then you need to start the frontend React by going to dismissal-app4/frontend and run the command `npm start`

Now your browser show be displaying a webpage on localhost port 3000. If you click on the Restaurant link you should see all the restaurants listed there and you should be able to search as well.

# How to access Mongo Atlas DB from Mac
mongosh "mongodb+srv://cluster0.77qzo.mongodb.net/ilm_dismissal" --apiVersion 1 --username mohsin
password = FTpdTxYwJumSK0V2


# Mongo DB Realm
MogoDB Realm replaces the "E" & "N" (express and node.js) from the "MERN" stack.
The backend and frontend get hosted in the cloud.