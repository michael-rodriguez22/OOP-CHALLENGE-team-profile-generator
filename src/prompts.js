const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const numberRegex = /^[0-9]{1,6}$/

const validate = {
  email: function (passedEmail) {
    return passedEmail.match(emailRegex)
      ? true
      : "Valid email address is required."
  },
  number: function (number) {
    return number.match(numberRegex)
      ? true
      : "Valid number is required. (digits only, 6 digits max)"
  },
}

let prompts = {
  manager: [
    {
      type: "input",
      name: "managerName",
      message: "What is the name of your team's manager? (required)",
      validate: name => (name ? true : "Name is required."),
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email address? (required)",
      validate: email => validate.email(email),
    },
    {
      type: "input",
      name: "managerId",
      message: "Please enter an employee ID number for the manager. (required)",
      validate: id => validate.number(id),
    },
    {
      type: "confirm",
      name: "officeConfirm",
      message: "Does the manager have an office?",
      default: false,
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter the manager's office number. (required)",
      validate: number => validate.number(number),
      when: ({ officeConfirm }) => officeConfirm,
    },
  ],
  otherEmployees: [
    {
      type: "list",
      name: "role",
      message: "What is this employee's role?",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What is this employees name? (required)",
      validate: name => (name ? true : "Name is required."),
    },
    {
      type: "input",
      name: "email",
      message: "What is this employees email address? (required)",
      validate: email => validate.email(email),
    },
    {
      type: "input",
      name: "id",
      message:
        "Please enter an employee ID number for this employee. (required)",
      validate: id => validate.number(id),
    },
    {
      type: "input",
      name: "github",
      message: "What is this employee's GitHub username? (required)",
      validate: github => (github ? true : "GitHub username is required."),
      when: ({ role }) => role === "Engineer",
    },
    {
      type: "input",
      name: "school",
      message: "Where did this employee go to school? (required)",
      validate: school => (school ? true : "Name of school is required."),
      when: ({ role }) => role === "Intern",
    },
    {
      type: "list",
      name: "nextStep",
      message: "Do you have another employee to add?",
      choices: [
        "Yes, add another employee",
        "No, complete team and generate profile page.",
      ],
    },
  ],
}

module.exports = prompts
