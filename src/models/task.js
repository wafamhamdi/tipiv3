const  mongoose= require('mongoose') ;
const schema =mongoose.shema ;
const taskshema=new shema
({ 
     name:string,
     description:string,

     name_personal:
     {
     name:shema.personal.objectid

     },
     name_project:
     {
     name:shema.project.objectid

     }
     }); 
const task =mongoose.model('task', reportshema); 
module.exports=task;