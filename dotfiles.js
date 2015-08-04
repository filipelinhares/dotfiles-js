#!/usr/bin/env node

var shell = require('shelljs');
var inquirer = require("inquirer");
var util  = require('./src/util');
var aptGet = require('./softwares/apt-get');

var examples = [
    'opera'
];



inquirer.prompt({
  name: 'apt-get',
  message: 'Mark what do you want (toggle with space):',
  type: 'checkbox',
  choices: aptGet.choices
}, function (answers) {
    util.addPPA(answers['apt-get'], aptGet.ppa);
    util.addKey(answers['apt-get'], aptGet.key)
});

