module.exports = app => {
    const Employees = require("../controllers/employee.controller.js");
  
    var routes = require("express").Router();
  
    // Create a new Employee
    routes.post("/", Employees.create);
  
    // Retrieve all Employees
    routes.get("/", Employees.findAll);
  
    // Retrieve a single Employee with id
    routes.get("/:id", Employees.findOne);
  
    // Update an Employee with id
    routes.put("/:id", Employees.update);
  
    // Delete an Employee with id
    routes.delete("/:id", Employees.delete);

    app.use('/', routes);
  };