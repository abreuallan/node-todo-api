// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result.result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });


    db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
      console.log(result.result);
    });


    db.collection('Users').findOne({name: 'Jen'}).then((result) => {
      console.log(result._id);
      console.log(ObjectID(result._id));
      db.collection('Users').deleteOne({_id: ObjectID(result._id)}).then((result) => {
        console.log(result.result);
      });
    });

  // db.close();
});
