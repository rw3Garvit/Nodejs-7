const { adminSchema } = require("../models");

const addAdmin = (body) => {
  return adminSchema.create(body);
};

const findAdminByEmail = (email) => {
  return adminSchema.findOne({ email });
};

const deleteAdmin = (id) => {
  return adminSchema.findByIdAndDelete(id);
};

module.exports = { addAdmin, findAdminByEmail, deleteAdmin };
