
const { studentSchema } = require("../models")


const addStudent =(body)=>{


   
   return studentSchema.create(body)
  

}


const getStudent= () => {

   return studentSchema.find()
 
}


const findUser = (id)=>{

   return studentSchema.findById(id)
}


const findStudent =(firstName)=>{

   // console.log(firstName);

   return studentSchema.findOne({firstName})

}


const deleteStudent =(id)=>{
   return studentSchema.findByIdAndDelete(id)
}

module.exports={addStudent,getStudent,findUser,deleteStudent,findStudent}