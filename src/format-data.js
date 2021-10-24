const { Engineer, Intern, Manager } = require("../lib")

// take inquirer answers object and create array of Manager, Engineers, and Interns
function formatData(inquirerAnswers) {
  const employeeObjects = new Array()

  employeeObjects.push(
    new Manager(
      inquirerAnswers.managerName,
      inquirerAnswers.managerId,
      inquirerAnswers.managerEmail,
      inquirerAnswers.officeNumber ? inquirerAnswers.officeNumber : "N/A"
    )
  )

  inquirerAnswers.otherEmployees.forEach(employee => {
    return employee.role === "Engineer"
      ? employeeObjects.push(
          new Engineer(
            employee.name,
            employee.id,
            employee.email,
            employee.github
          )
        )
      : employeeObjects.push(
          new Intern(
            employee.name,
            employee.id,
            employee.email,
            employee.school
          )
        )
  })
  return employeeObjects
}

module.exports = formatData
