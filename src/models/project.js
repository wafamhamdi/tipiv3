const  mongoose= require('mongoose') ;
const schema =mongoose.shema ;
const projectshema=new shema
({ 
     name:string, 
     description:string,
     name_team_leader:
     {
     name:shema.personal.objectid

     }
     }); 
const comment =mongoose.model('project', projectshema); 
module.exports=project;