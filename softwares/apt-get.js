
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
    'Opera':           'opera',
    'Opera Next':       'opera-next',
    'Chrominium':      'chrominium',
    'Crhome Unstable':  'chrome-unstable',
    'Firefox':         'firefox',
    'Firefox Nightly':  'firefox-nightly',
    'cURL':            'curl',
    'PostgreSQL':        'postgresql',
    'Postgres Contrib': 'postgresql-contrib',
    'Flash':           'flashplugin-installer',
    'VLC':             'vlc',
    'ScudCloud':            'scudcloud',
    'Tomighty':        'tomighty',
    'Atom':            'atom',
    'Sublime Text 3':         'sublime-text',
    'gVim':            'gnome-vim',
    'ZSH':             'zsh'
};


var choices = [
  'Opera',
  'Opera Next',
  'Chrominium',
  'Chrome Unstable',
  'Firefox',
  'Firefox Nightly',
  'cURL',
  'PostgreSQL',
  'Flash plugin',
  'VLC',
  'ScudCloud (Slack app)',
  'Tomighty (Pomodoro app)',
  'Atom',
  'Sublime Text 3',
  'gVim',
  'ZSH'
];


module.exports = {
  choices: choices,
  ppa:     softwaresPPA,
  key:    softwaresKey
}
