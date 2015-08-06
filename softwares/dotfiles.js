
var dotfiles = {
  'vimrc': {
    from: 'vimrc',
    to:   '$HOME/.vimrc'
  },
  'Folder ZSH': {
    from: 'zsh',
    to:   '$HOME/.zsh/'
  },
  'gitconfig': {
    from: 'gitconfig',
    to:   '$HOME/.gitconfig'
  },
  'gitignore': {
    from: 'gitignore_global',
    to:   '$HOME/.gitignore_global'
  },
  'zshrc': {
    from: 'zshrc',
    to:   '$HOME/.zshrc'
  }
};

var choices = [
  'vimrc',
  'Folder ZSH',
  'gitconfig',
  'gitignore',
  'zshrc'
];

module.exports = {
  choices: choices,
  dotfiles: dotfiles
};
