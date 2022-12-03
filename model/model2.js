const{default:mongoose}=require('mongoose');
const { stringify } = require('querystring');

let schema = new mongoose.Schema(
    {
        name:  {type:String, required:true, unique:true},
        email:{type:String},
        feedback:{type:String}
  })
let feedback=new mongoose.model("feedback",schema)


 let saveDoc1=()=>{
    let r3=new feedback({
        name:"Ayush",
        email:"Ayush2@gmail.com",
        message:"hello it was good"
    })
    r3.save();
}
module.exports=saveDoc1