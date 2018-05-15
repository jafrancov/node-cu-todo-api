// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {

    assert.equal(null, err);
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);

    // db.collection('Todos').deleteMany({text: 'Taco-Cat'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete document', err);
    // });

    // db.collection('Todos').deleteOne({text: 'Taco-Cat'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete document', err);
    // });

    // db.collection('Todos').findOneAndDelete({text: 'Taco-Cat'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete document', err);
    // });

    // db.collection('Users').deleteMany({name: 'Alex Franco'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete document', err);
    // });

    db.collection('Users').findOneAndDelete({_id: ObjectID("5afb3baca709a05837cbb698")}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete document', err);
    });

    client.close();

});