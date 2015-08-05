var inquirer = require('inquirer');

var softwaresPPA = {
  'Firefox Nightly': 'ppa:ubuntu-mozilla-daily/ppa',
  'Atom':            'ppa:webupd8team/atom',
  'Sublime Text 3':  'ppa:webupd8team/sublime-text-3',
  'ScudCloud':       'ppa:rael-gc/scudcloud',
  'Tomighty':        'ppa:pwr22/tomighty'
};

var softwaresKey = {
  'Chrome Unstable' : {
    key:    'https://dl-ssl.google.com/linux/linux_signing_key.pub',
    source: 'http://dl.google.com/linux/deb/ stable main',
    list:   'google-chrome.list'
  },
  'Opera': {
    key:    'http://deb.opera.com/archive.key',
    source: 'http://deb.opera.com/opera/ stable non-free',
    list:   'opera.list'
  }
};

var softwares = {
    'Opera':            'opera',
    'Opera Next':       'opera-next',
    'Chrominium':       'chrominium',
    'Crhome Unstable':  'chrome-unstable',
    'Firefox':          'firefox',
    'Firefox Nightly':  'firefox-nightly',
    'cURL':             'curl',
    'ZSH':              'zsh',
    'PostgreSQL':       'postgresql',
    'Postgres Contrib': 'postgresql-contrib',
    'Atom':             'atom',
    'Sublime Text 3':   'sublime-text',
    'gVim':             'gnome-vim',
    'Flash':            'flashplugin-installer',
    'VLC':              'vlc',
    'ScudCloud':        'scudcloud',
    'Tomighty':         'tomighty',
    'Inkscape':         'inkscape',
    'Keepassx':         'keepassx'
};


// # Inquirer.js choices
var choices = [
  new inquirer.Separator('===> Browsers'),
  'Opera',
  'Opera Next',
  'Chrominium',
  'Chrome Unstable',
  'Firefox',
  'Firefox Nightly',
  new inquirer.Separator('==> DB and Command line'),
  'cURL',
  'ZSH',
  'PostgreSQL',
  'Postgres Contrib',
  new inquirer.Separator('===> Text Editors'),
  'Atom',
  'Sublime Text 3',
  'gVim',
  new inquirer.Separator('===> Misc'),
  'Flash plugin',
  'VLC',
  'ScudCloud (Slack app)',
  'Tomighty (Pomodoro app)',
  'Inkscape',
  'Keepassx'
];


module.exports = {
  choices: choices,
  ppa:     softwaresPPA,
  key:    softwaresKey,
  softwares: softwares
}
