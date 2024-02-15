const { studentService } = require("../services");

const addStudent =async (req,res)=>{
    console.log(req.body);

    let body = req.body

    let user = await studentService.addStudent(body)

    // console.log(user,"user");
    res.status(201).json({
        message:"user created success",
        user
    })
}

const getStudent =async (req,res)=>{
   

    let user = await studentService.getStudent()

    res.status(200).json({
        message:'get student success',
        student:user
    })



}



module.exports={addStudent,getStudent}