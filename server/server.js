let express=require('express');
let bodyParser=require('body-parser');
let {mongoose}= require('./db/mongoose');
let {Todo}=require('./models/todo');
let {User}=require('./models/user');

let app=express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    console.log(req.body);
    let newTodo= new Todo(
    {
        text:req.body.text
    });
    newTodo.save().then((doc)=>{
        res.status(200).send(doc);
    },(err)=>{
        res.status(400).send({err});
    });
});
if(!module.parent){
    app.listen(3000,()=>{
        console.log('server listening on port 3000');
    });
}

module.exports={app};
// let newUser = new User({
//     name:'Rafael Anguiano',
//     email:'rafita@gmail.com'
// });
// newUser.save().then((results)=>{
//     console.log('user added ', newUser);
// },(err)=>{
//     console.log('Unable yo add the new user')
// });