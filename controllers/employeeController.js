const employeeModel = require("../models/employeeModel");

const create = async (req, res) => {
  try {
    const obj = new employeeModel({
      firstName: req.body.fname,
      lastName: req.body.lname,
      email: req.body.email,
      contact: req.body.contact,
      designation: req.body.designation,
    });

    const employee = await obj.save();
    res.status(200).json({ result: employee, message: "Employee successfully created" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const fetch_all = async (req, res) => {
  try {
    const employee = await employeeModel.find();
    res.status(200).json({ result: employee, message: "All employees fetched successfully" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const fetch_one = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await employeeModel.findById(id);
    res.status(200).json({ result: employee, message: "One employee fetched successfully" });
  } catch (error) {
    res.status(500).json({ message: e.message });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await employeeModel.findByIdAndDelete(id);
    res.status(200).json({ result: employee, message: "One employee deleted successfully" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};  

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = {
      firstName: req.body.fname,
      lastName: req.body.lname,
      email: req.body.email,
      contact: req.body.contact,
      designation: req.body.designation,
    };
    const employee = await employeeModel.findByIdAndUpdate(id, data, {new: true});
    res.status(200).json({ result: employee, message: "One employee updated successfully" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { create, fetch_all, fetch_one, destroy, update };