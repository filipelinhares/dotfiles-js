alias myalias='subl $HOME/.zsh/alias.sh'
alias reload='source $HOME/.zshrc'
alias c='clear'
alias subl='subl -a'

alias who='lsof -wni tcp:3000'
alias kill='kill -9'

alias sc='rs'

# Git
alias rebeise='gcm && gl && gco - && g rebase master'
alias up='git-up && git delete-merged-branches'
alias rup='bi && rdm'

# Database Setup
alias db.yml="cp config/database-sample.yml config/database.yml"
alias remakedb="bundle exec rake db:drop db:create db:migrate db:seed"

# Imagemagick alias
alias optjpg="convert -strip -interlace Plane -quality 80"
