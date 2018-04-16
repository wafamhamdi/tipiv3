const  mongoose= require('mongoose') ;
const schema =mongoose.shema ;
const personalshema=new shema
({ 
     name:string, 
    role:string,
    role_master:string
     }); 
const personal=mongoose.model('personal', personalshema); 
module.exports=personal;