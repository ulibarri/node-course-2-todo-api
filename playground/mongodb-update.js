// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId}= require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Conneceted to mongodb server');
    let dbo=db.db('myDb');

    
  
    dbo.collection('Users').findOneAndUpdate(
        {_id: new ObjectId('5a7e8b2f2dce895498ce85e6')},
        { $set: { name : "A.B. Abracus", location : "Toluca"}, $inc : { "age" : 5 } },
        {returnOriginal:false}
    ).then((result)=>{
        console.log(result);
    });


   //ObjectId("5a85dd2c986dfe3ee466cd55")
    // dbo.collection('Todos').find({
    //     text:'Eat lunch'
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch Todos')
    // });

    db.close();
});