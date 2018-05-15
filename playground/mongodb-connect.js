const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();

// console.log(obj);

// var user = {name: 'Alex', age:34};
// var {name} = user;
// console.log(name);

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {

    assert.equal(null, err);
    console.log('Connected to MongoDB server');

    // if (err) {
    //     return console.log('Unable to connect to MongoDB server');
    // }

    const db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert ToDo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // db.collection('Users').insertOne({
    //     name: 'Alex Franco',
    //     age: 34,
    //     location: 'Guanajuato, Gto.'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert User', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();

});