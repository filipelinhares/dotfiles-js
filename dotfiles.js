#!/usr/bin/env node

var util   = require('./src/util');
var aptGet = require('./softwares/apt-get');
var clones = require('./softwares/git-clone');
var wget   = require('./softwares/wget');

util.question('apt-get', aptGet.choices).then(function (answers) {
  util.addPPA(answers['apt-get'], aptGet.ppa);
  util.addKey(answers['apt-get'], aptGet.key);
  util.aptGetInstall(answers['apt-get'], aptGet.softwares);

  // # Returning new question
  return util.question('wget', wget.choices);

}).then(function (answers) {
    util.installWithWget(answers['wget'], wget.url);

  return util.question('git-clone', clones.choices);
}).then(function (answers) {
  util.gitClone(answers['git-clone'], clones.repos);
});


