const expect = require('expect');
const request=require('supertest');

const {app}=require('./../server');
const {Todo}=require('./../models/todo');

const todos =[{
    text:'pay the electricity bill'
},{
    text: 'pay the cable tv bill'
}];

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos)
    }).then(()=>done());
})

describe('POST /todos',()=>{
    it('Should create a new todo',(done)=>{
        let text='to do test';
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if (err){
                return done(err);
            }
            Todo.find({text}).then((todos)=>{
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=>done(e));
        });
    });
    it('Should not create a Todo with invalid  body data',(done)=>{
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res)=>{
            if (err){
                return done(err);
            }
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(2);
                done();

            }).catch((e)=>done(e));
        });
    });
});
describe('GET /todos',()=>{
    it('Should get all Todos',(done)=>{
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res)=>{
            expect(res.body.todos.length).toBe(2);
        })
        .end(done)
    });
});