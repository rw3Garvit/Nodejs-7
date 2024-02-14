const { studentService } = require("../services")

const addStudent= async (req,res)=>{


    // console.log(req.body);
    const body = req.body

    const student = await studentService.addStudent(body)

    console.log(student,"student");

    res.status(201).json({
        message:'student created success',
        student
    })

}


module.exports={addStudent}