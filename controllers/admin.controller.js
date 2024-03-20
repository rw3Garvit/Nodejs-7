const path = require("path");
const { createToken } = require("../middlewares/auth");
const { adminService } = require("../services");
const { sendEmail } = require("../services/email.service");
let fs = require("fs");

const addAdmin = async (req, res) => {
  let { email, password } = req.body;
  let profile = req.file.originalname;

  let body = {
    email,
    password,
    profile,
  };

  const admin = await adminService.addAdmin(body);

  //   let testMail = await sendEmail(email, "Test Mail", "Hello this is test mail");
  //   console.log(testMail);

  res.status(200).json({
    message: "admin added success",
    admin,
  });
};

let login = async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log(email);

    let admin = await adminService.findAdminByEmail(email);

    if (!admin) {
      throw new Error("admin not found");
    } else {
      if (password === admin.password) {
        console.log(admin);
        let token = createToken(admin);
        res.cookie("token", token);
        res.status(200).json({ message: "login success", token });
      } else {
        throw new Error("password invalid");
      }
    }
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};

let getProfile = (req, res) => {
  let admin = req.admin;

  res.status(200).json({ message: "profile get success", admin });
};

let deleteAdmin = async (req, res) => {
  let id = req.params.id;

  let admin = await adminService.deleteAdmin(id);

  if (admin) {
    fs.unlinkSync(path.join(__dirname, `../public/images/${admin.profile}`));
    res.status(200).json({
      message: "user deleted",
      admin,
    });
  }
};

module.exports = { addAdmin, login, getProfile, deleteAdmin };
