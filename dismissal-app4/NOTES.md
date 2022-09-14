# MERN Stack video notes 
(https://youtu.be/mrHNSanmqQ4)

# DAO = data access object. 
Allows you to access tables in your database.

# How to start backend and frontend

You need first go to dismissal-app4/backend and run `nodemon start`. This will connect to the online MongoDB server.

Then you need to start the frontend React by going to dismissal-app4/frontend and run the command `npm start`

Now your browser show be displaying a webpage on localhost port 3000. If you click on the Restaurant link you should see all the restaurants listed there and you should be able to search as well.

# How to access Mongo Atlas DB from Mac
mongosh "mongodb+srv://cluster0.77qzo.mongodb.net/ilm_dismissal" --apiVersion 1 --username mohsin
password = FTpdTxYwJumSK0V2


# MongoDB commands

## To insert single item into a collection
```
Atlas atlas-1u9up2-shard-0 [primary] ilm_dismissal> db.testdb.insertOne({ name: "John" })
{
  acknowledged: true,
  insertedId: ObjectId("632231ace2e8980c824addab")
}
```