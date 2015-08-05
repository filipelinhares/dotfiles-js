
var repos = {
  'rbenv': {
    url:  'https://github.com/sstephenson/rbenv.git',
    dest: '~/.rbenv'
  },
  'ruby-build':{
    url:  'https://github.com/sstephenson/ruby-build.git',
    dest: '~/.rbenv/plugins/ruby-build'
  },
  'rbenv-each':{
    url:  'https://github.com/rbenv/rbenv-each.git',
    dest: '~/.rbenv/plugins/rbenv-each'
  },
  'Base 16 shell':{
    url:  'https://github.com/chriskempson/base16-shell.git',
    dest: '~/.config/base16-shell'
  },
  'Linuxbrew': {
    url:  'https://github.com/Homebrew/linuxbrew.git',
    dest: '~/.linuxbrew'
  }
};

var choices = [
  'rbenv',
  'ruby-build',
  'rbenv-each',
  'Base 16 shell',
  'Linuxbrew'
];

module.exports = {
  choices: choices,
  repos:   repos
};
