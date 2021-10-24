const inquirer = require("inquirer")
const { prompts, formatData, pageTemplate } = require("./src")
const fs = require("fs")

function main() {
  // messages to direct user between prompts
  const messages = {
    welcome: `
      ==============================================
                  TEAM PROFILE GENERATOR
      ==============================================
              Please follow the prompts below to  
              generate a new team profile page
      ==============================================
        `,
    employeeAdded: `
      ==============================================
        This employee has been added to your team!          
      ==============================================
       Please answer the questions below to add the
                next employee to your team            
      ==============================================
        `,
    pageGenerated: `
      ==============================================
        Your team has been successfully generated.          
      ==============================================
         Check the dist folder of this repository
        for the index.html file to view your page.            
      ==============================================
        `,
  }

  // welcome message
  console.log(messages.welcome)

  // manager questions
  return inquirer
    .prompt(prompts.manager)
    .then(function otherEmployeesPrompt(managerData) {
      // employee added message
      console.log(messages.employeeAdded)

      // make sure there is an array to store data for other employees
      managerData.otherEmployees ? 0 : (managerData.otherEmployees = [])

      // other employee questions (recursive)
      return inquirer
        .prompt(prompts.otherEmployees)
        .then(employeeData => {
          // add each individual employee to otherEmployees array on managerData
          managerData.otherEmployees.push(employeeData)

          // either continue or format answer data into Employee objects
          return employeeData.nextStep === "Yes, add another employee"
            ? otherEmployeesPrompt(managerData)
            : formatData(managerData)
        })
        .then(formattedData => {
          // generate html string
          const html = pageTemplate(formattedData)

          // use string to write index.html file and send to dist folder!
          fs.writeFile("./dist/index.html", html, err => {
            return err ? console.log(err) : console.log(messages.pageGenerated)
          })
        })
        .catch(err => "")
    })
}

main()
