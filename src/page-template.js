function pageTemplate(formattedData) {
  function generateEmployees() {
    //     <div class="item">
    //     <div class="item-heading">
    //       <h2>Michael Rodriguez | Manager</h2>
    //       <p>ID: 1</p>
    //     </div>
    //     <p>Email: <a href="mailto:" target="_blank">email@email.com</a></p>
    //     <p>Office Number : 1</p>
    //   </div>
  }

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
        <section>
          <div class="container">
          ${generateEmployees()}
          </div>
          <footer>
            <p><a href="#">GitHub Repository</a></p>
            <br />
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Michael Rodriguez</h3>
          </footer>
        </section>
      </main>
    </body>
  </html>
    `;
}
