const{default:mongoose}=require('mongoose');
const { stringify } = require('querystring');

let schema = new mongoose.Schema(
    {
        name:  {type:String, required:true, unique:true},
        email:{type:String},
        no_of_person:{type:Number},
        date:{type:Date},
        message:{type:String}
  })
let reservation=new mongoose.model("reservation",schema)


 let saveDoc=()=>{
    let r2=new reservation({
        name:"Ayush",
        email:"Ayush2@gmail.com",
        no_of_person:"90",
        date:   23/6/2004,
        message:"hello it was good"
    })
    r2.save();
}
module.exports=saveDoc