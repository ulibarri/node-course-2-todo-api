const MongoClient = require('mongodb').MongoClient;
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

    dbo.collection('Users').insertOne({
        name:'Carlos',
        age: 41,
        location:'Colima'
    },(err,result)=>{
        if (err){
            return console.log(`Unable to insert User ${err}`);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });


    //var url = "mongodb://localhost:27017/";
    
    // MongoClient.connect(url, function(err, db) {
    //   if (err) throw err;
    //   var dbo = db.db("mydb");
    //   var myobj = { name: "Company Inc", address: "Highway 37" };
    //   dbo.collection("customers").insertOne(myobj, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    //   });
    // });
    db.close();
});