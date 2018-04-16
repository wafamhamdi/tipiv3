const  mongoose= require('mongoose') ;
const schema =mongoose.shema ;
const reportshema=new shema
({ 
     type:string,
     name_personal:
     {
     name:shema.personal.objectid

     },
     name_project:
     {
     name:shema.project.objectid

     }
     }); 
const comment =mongoose.model('report', reportshema); 
module.exports=report;