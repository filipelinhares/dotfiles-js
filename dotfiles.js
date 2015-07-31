#!/usr/bin/env node

var shell = require('shelljs');
var inquirer = require("inquirer");
var chalk = require('chalk');

var softwaresMisc = [
    'spotify',
    'flash',
    'scudcloud',
    'vlc'
];

var produtivity = [
    'rescuetime',
    'scudcloud',
    'tomighty',
    'desktime',
    'dropbox',
    'ZSH',
    'oh-my-zsh',
    'linuxbrew'
];

// # ------------ Text Editors

var textEditorsPPA = {
    atom:    'ppa:webupd8team/atom',
    sublime: 'ppa:webupd8team/sublime-text-3'
};

var textEditors = {
    atom:    'atom',
    sublime: 'sublime-text',
    gvim:    'gnome-vim'
};

var code = [
  'git',
  'nvm',
  'rbenv',
  'ruby-build',
  'rbenv-each',
  'curl',
  'postgress'
];

var coolThings = [
  'base16color',
  'font-monaco',
  'avocode',
  'pixeluvo',
  'monroe-theme'
];


var dotfiles = [
  'vimrc',
  'gvim',
  'alias',
  'gitconfig',
  'zshrc'
];

var browsers = [
    'opera',
    'opera-next',
    'chrominium',
    'chrome-unstable',
    'firefox',
    'firefox-nightly'
];


var examples = [
    'opera'
];


var addPPA = function (ppas, source) {
  ppas.forEach(function (ppa) {
    if (source.hasOwnProperty(ppa)) {
      shell.echo('Adding to ppa ' + ppa);
    }
  });
};

inquirer.prompt({
  name: 'text-editors',
  message: 'what do you want?',
  type: 'checkbox',
  choices: ['vim', 'sublime', 'atom']
}, function (answers) {
    addPPA(answers['text-editors'], textEditorsPPA);
});
