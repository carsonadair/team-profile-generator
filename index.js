// Html generator will go here
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const Directory = path.resolve(__dirname, "dist");
const distPathway = path.join(Directory, "index.html");

const generatefile = require("./src/generatefile.js");
