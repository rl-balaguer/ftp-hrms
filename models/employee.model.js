module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('employee', {
        lastname:{
            type: Sequelize.STRING,
            validate:{
                max: 255
            }
        },
        firstname:{
            type: Sequelize.STRING,
            validate:{
                max: 255
            }
        },
        middlename:{
            type: Sequelize.STRING,
            validate:{
                max: 255
            }
        },
        suffix:{
            type: Sequelize.STRING,
            validate:{
                max: 255
            }
        },
        employee_number:{
            type: Sequelize.STRING,
            unique: true,
            validate:{
                max: 255
            }
        },
        birthdate:{
            type: Sequelize.DATE 
        },
        suffix:{
            type: Sequelize.STRING,
            validate:{
                max: 255
            }
        },
    });
    
    /* 
        Associations
    */
    //Department.hasMany(Employee);
    //Employee.belongsTo(Department);

    return Employee;
}