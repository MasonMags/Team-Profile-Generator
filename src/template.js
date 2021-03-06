function managerTemplate(manager) {
    return `
    <section>
        <div class="card">
            <div class="container">
                <h3> ${manager.name} <h3>
                <h4> Manager <h4>
                <p> ID : ${manager.id} <p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            <div>
        <div>
    </section>
    `
}

function engineerTemplate(engineer) {
    return `
    <section>
        <div class="card">
            <div class="container">
                <h3> ${engineer.name} <h3>
                <h4> Engineer <h4>
                <p> ID : ${engineer.id} <p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="office">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            <div>
        <div>
    </section>
    `
}

function internTemplate(intern) {
    return `
    <section>
        <div class="card">
            <div class="container">
                <h3> ${intern.name} <h3>
                <h4> Intern <h4>
                <p> ID : ${intern.id} <p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school} </p>
            <div>
        <div>
    </section>
    `
}

const generateHTML = function (data) {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = managerTemplate(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = engineerTemplate(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = internTemplate(employee);

            pageArray.push(internCard);
        }
        
    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

const generateTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title> 
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body>
        <header>
            <nav>
                <span class="header">THE TEAM</span>
            </nav>
        </header>
        <main>
                    <!--Team Cards-->
                    ${employeeCards}
        </main>
        
    </body>
    </html>
  
  
  `;
  }

module.exports = managerTemplate; 
module.exports = engineerTemplate; 
module.exports = internTemplate; 
module.exports = generateTeamPage;
module.exports = generateHTML;