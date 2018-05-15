// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {

    assert.equal(null, err);
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    // db.collection('Todos').find({
    //     _id: new ObjectID('5af9bef042cdff184019e554')
    // })
    //     .toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 4))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count:', count);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find().count().then((count) => {
        console.log('Users count:', count);
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    client.close();

});