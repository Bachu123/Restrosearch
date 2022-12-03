let mongoose = require('mongoose')
let URI ="mongodb+srv://mubashir:bachuminu@cluster0.gkxk4k2.mongodb.net/?retryWrites=true&w=majority"
let connectdb =async()=>{
    try{
        let con =await mongoose.connect(URI,{useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("u are connected")
    }

    catch(err){
            console.log(err)
    }
}
module.exports=connectdb