const { studentService } = require("../services");

const addStudent = async (req, res) => {
    try {

        let body = req.body

        let studentExist = await studentService.findStudent(req.body.firstName)

        if (studentExist) {
            throw new Error('student already exist!')
        }



        let student = await studentService.addStudent(body)
        if (!student) {
            throw new Error('student not added')
        }

        res.status(200).json({ message: "student added success", student })

    } catch (err) {

        res.status(400).json({ success: false, err: err.message })

    }

}

const getStudent = async (req, res) => {
    try {

        let student = await studentService.getStudent()
        if (!student) {
            throw new Error('student not found!')
        }
        res.status(200).json({ message: 'student get success', student })

    } catch (err) {
        res.status(400).json({ success: false, err: err.message })
    }



}



const deleteStudent = async (req, res) => {
    try {



        let { id } = req.params;
        console.log(id);

        let studentExist = await studentService.findUser(id)

        if (!studentExist) {
            res.status(400).json({ message: "user not found" })
        }

        // console.log(studentExist);

        let user = await studentService.deleteStudent(id)


        res.status(200).json({ message: 'user deleted success', user })


    } catch (err) {
        console.log(err, 'err');
    }
}


const updateStudent = async (req, res) => {
    console.log(req.body)
    console.log(req.params);

    let body = req.body
    let { id } = req.params

    let student = await studentService.updateStudent(body, id)

    res.status(200).json({
        message: "student updated success",
        student
    })


}

module.exports = { addStudent, getStudent, deleteStudent, updateStudent }