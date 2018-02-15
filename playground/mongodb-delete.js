// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId}= require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Conneceted to mongodb server');
    let dbo=db.db('myDb');

    
    // dbo.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    // dbo.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    // dbo.collection('Todos').findOneAndDelete({
    //     _id: new ObjectId('5a85dd2c986dfe3ee466cd55')}).then((result)=>{
    //     console.log(result);
    // });
   //ObjectId("5a85dd2c986dfe3ee466cd55")
    // dbo.collection('Todos').find({
    //     text:'Eat lunch'
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch Todos')
    // });
    // dbo.collection('Users').deleteMany({name:'Abigail'});
    dbo.collection('Users').findOneAndDelete({
        _id: new ObjectId('5a831ff5986dfe3ee466ae6b')
    }).then((results)=>{
        console.log(JSON.stringify(results,undefined,2)); 
    });

    db.close();
});