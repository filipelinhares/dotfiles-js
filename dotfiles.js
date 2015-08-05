#!/usr/bin/env node

var util  = require('./src/util');
var aptGet = require('./softwares/apt-get');
var clones = require('./softwares/git-clone');

var examples = [
    'opera'
];

util.question('apt-get', aptGet.choices, function (answers) {
  util.addPPA(answers['apt-get'], aptGet.ppa);
  util.addKey(answers['apt-get'], aptGet.key);
}, 'What do you want to install?');

