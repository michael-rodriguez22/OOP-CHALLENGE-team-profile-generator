function pageTemplate(formattedData) {
  //   last line for each employee role
  const lastLine = {
    manager: ({ officeNumber }) => `<p>Office Number: ${officeNumber}</p>`,
    engineer: ({ github }) =>
      `<p>GitHub: <a href="https://www.github.com/${github}" target="_blank">https://www.github.com/${github}</a></p>`,
    intern: ({ school }) => `<p>School: ${school}</p>`,
  }

  //   iterate through empmloyees array, add employee item to html string to be placed in employee container
  let employeeHTML = ""
  formattedData.forEach(employee => {
    employeeHTML += `
    <div class="item">
      <div class="item-heading">
        <h2>${employee.name} | ${employee.role}</h2>
        <p>ID: ${employee.id}</p>
      </div>
      <p>Email: <a href="mailto:${employee.email}" target="_blank">${
      employee.email
    }</a></p>
      ${lastLine[employee.role.toLowerCase()](employee)}
    </div>`
  })

  //   return html string with dynamically generated employee items
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile Generator</title>
        </head>
        <body>
        <header>
            <h1>Team Profile Generator</h1>
        </header>
        <main>
            <div class="container">
            ${employeeHTML}
            </div>
            <footer>
                <p><a href="https://github.com/michael-rodriguez22/OOP-CHALLENGE-team-profile-generator" target="_blank">GitHub Repository</a></p>
                <br />
                <p>&copy; ${new Date().getFullYear()} by Michael Rodriguez</p>
            </footer>
        </main>
        </body>
    </html>`
}

module.exports = pageTemplate
