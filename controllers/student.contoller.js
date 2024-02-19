const { studentService } = require("../services");

const addStudent =async (req,res)=>{
    console.log(req.body);

    let body = req.body

    let user = await studentService.addStudent(body)


    res.render('./index',{message:user})

    // // console.log(user,"user");
    // res.status(201).json({
    //     message:"user created success",
    //     user
    // })
}

const getStudent =async (req,res)=>{
   

    let user = await studentService.getStudent()

    res.status(200).json({
        message:'get student success',
        student:user
    })



}



const deleteStudent= async(req,res)=>{
try{


    
    let {id} = req.params;
    console.log(id);

    let studentExist = await studentService.findUser(id)

    if(!studentExist)
    {
        res.status(400).json({message:"user not found"})
    }

    // console.log(studentExist);

    let user = await studentService.deleteStudent(id)
   

    res.status(200).json({message:'user deleted success',user})


}catch(err)
{
    console.log(err,'err');
}
}



module.exports={addStudent,getStudent,deleteStudent}