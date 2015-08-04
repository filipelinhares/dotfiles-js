var shell = require('shelljs');
var chalk = require('chalk');


exports.addKey = function (keys, source) {
   keys.forEach(function (key) {
    if (source.hasOwnProperty(key)) {
      shell.echo(chalk.bold.red('Adding to key ') + source[key].key);
    }
  });

  // shell.exec('wget -qO - ' + key + ' | sudo apt-key add - &> /dev/null');
  // shell.exec("sudo sh -c \"printf 'deb " + pao + "' >> '/etc/apt/sources.list.d/" + list + "'\"");
};

exports.gitClone = function (source, dest) {
  var dest = dest || '';
  shell.exec('git clone ' + source + ' ' + dest);
};


exports.aptGetCommand = function (command) {
  shell.exec('sudo apt-get ' + command);

};

exports.addPPA = function (ppas, source) {
  ppas.forEach(function (ppa) {
    if (source.hasOwnProperty(ppa)) {
      shell.echo('Adding to ppa ' + source[ppa]);
    }
  });
};

exports.aptGetInstall = function (softwares) {
  softwares.forEach(function (software) {
    shell.echo('Installing ' + software)
  });
};

