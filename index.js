const fs = require('fs'); 
const inquirer = require('inquirer');

const tempalte = require('./src/template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const teamArr = [];

function newManager(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter the name of a manager!");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
            validate: userInput => {
                if  (isNaN(userInput)) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } else if (!userInput) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } 
                {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: userInput => {
                if  (isNaN(userInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])

    // .then next
}
