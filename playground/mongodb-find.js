// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId}= require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Conneceted to mongodb server');
    let dbo=db.db('myDb');
    // dbo.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if (err){
    //         return console.log(`Unable to insert Todo ${err}`);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    
    dbo.collection('Todos').find({
        _id: new ObjectId('5a7e5a45b3bcb450839b2e71')
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('unable to fetch Todos')
    });
   
    dbo.collection('Todos').find({completed:false}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('unable to fetch Todos')
    });

    dbo.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
    },(err)=>{
        console.log('unable to fetch Todos')
    });

    dbo.collection('Users').find({
        name:'Abigail'
    }).toArray().then((docs)=>{
        console.log('Users');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('unable to fetch Users')
    });
    db.close();
});