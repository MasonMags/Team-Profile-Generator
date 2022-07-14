function managerTemplate(manager) {
    return `
    <div>
        <h3> Name: ${manager.name} <h3>
        <h4> Manager <h4>
    <div>

    <div>
        <p> ID : ${manager.id} <p>
        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="office">Office Number: ${manager.officeNumber}</p>
    <div>
    `
}

function engineerTemplate(engineer) {
    return `
    <div>
        <h3> Name: ${engineer.name} <h3>
        <h4> Engineer <h4>
    <div>

    <div>
        <p> ID : ${engineer.id} <p>
        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="office">Github: <a href="https://github.com/${engineer.github}" </p>
    <div>
    `
}

function internTemplate(intern) {
    return `
    <div>
        <h3> Name: ${intern.name} <h3>
        <h4> Intern <h4>
    <div>

    <div>
        <p> ID : ${intern.id} <p>
        <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="school">School: ${intern.school} </p>
    <div>
    `
}