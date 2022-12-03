let express = require('express')
const port =8000;
let path=require('path')
let app= express();
let ejs=require('ejs')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'../templates/views'))
app.use(express.static(path.join(__dirname,"../public")))
app.get('/',function(req,res){
    return res.render('index')

});
app.get('/contact',function(req,res){
    return res.render('contact')

});
app.get('/product_page',function(req,res){
    return res.render( 'product page')
});
app.get('/about',function(req,res){
    return res.render('about')

});
app.get('/Menu',function(req,res){
    return res.render('Menu')

});
app.get('/reservation',function(req,res){
    return res.render('reservation')

});


app.listen(port,function(err){

if (err){   
    console.log('Error in running the server',err);

}
console.log('yup!My Express is running on serverport :',port);
});
