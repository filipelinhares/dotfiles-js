var shell    = require('shelljs');
var chalk    = require('chalk');
var inquirer = require('inquirer');

exports.addKey = function (keys, source) {
   keys.forEach(function (key) {
    if (source.hasOwnProperty(key)) {
      shell.echo(chalk.bold.yellow('⚠  Adding key ') + source[key].key);
      shell.echo(chalk.bold.yellow('⚠  Adding source ') + source[key].source + chalk.bold.yellow(' to the list ') + source[key].list );
    // shell.exec('wget -qO - ' + source[key].key + ' | sudo apt-key add - &> /dev/null');
    // shell.exec("sudo sh -c \"printf 'deb " + source[key].source + "' >> '/etc/apt/sources.list.d/" + source[key].list + "'\"");
    }
  });

};

exports.gitClone = function (clones, source) {
  var dest = dest || '';
  clones.forEach(function (clone) {
    if (source.hasOwnProperty(clone)) {
      shell.echo(chalk.bold.yellow('⚠ Clonning ') + source[clone].url + ' into ' + source[clone].dest);
      // shell.exec('git clone ' + source[clone].url, source[clone].dest);
      shell.echo(chalk.bold.green('✓ Clonned ') + clone);
    }
  });
};

exports.aptGetCommand = function (command) {
  shell.exec('sudo apt-get ' + command  + ' -qqy --allow-unauthenticated');
};

exports.addPPA = function (ppas, source) {
  ppas.forEach(function (ppa) {
    if (source.hasOwnProperty(ppa)) {
      shell.echo('⚠ Adding to ppa ' + source[ppa]);
      // shell.exec('sudo add-apt-repository -y ' + source[ppa] + ' &> /dev/null');
      shell.echo(chalk.bold.green('✓ Added to ppa ') + source[ppa]);
    }
  });
};

exports.aptGetInstall = function (softwares, source) {
  softwares.forEach(function (software) {
    if (source.hasOwnProperty(software)) {
      shell.echo(chalk.bold.yellow('⚠ Installing ') + source[software]);
      // shell.exec('sudo apt-get install -qqy --allow-unauthenticated ' + source[software]);
      shell.echo(chalk.bold.green('✓ Installed ') + source[software]);
    }
  });
};

exports.installWithWget = function (urls, source) {
  urls.forEach(function (url) {
    if (source.hasOwnProperty(url)) {
      shell.echo(chalk.bold.yellow('⚠ Installing with WGET ') + source[url]);
      // shell.exec('wget -qO- ' + source[url] + ' | bash');
      shell.echo(chalk.bold.green('✓ Installed ') + source[url]);
    }
  });
};

exports.linkTo = function (from, to) {
  shell.exec('rm -rf ' + to);
  shell.exec('ln -s ' + from, to);
};

exports.question = function (name, choices, cb, question) {
  var question = question || 'Mark what do you want';
  return new Promise(function (resolve) {
    inquirer.prompt({
      name: name,
      message: question,
      type: 'checkbox',
      choices: choices
    }, function (answers) {
      resolve(answers);
    });
  });
};
