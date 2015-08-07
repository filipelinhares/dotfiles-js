#!/bin/bash

# Color utilities
blue_bold='\e[1;34m';
reset_color='\e[0m';
bold='\e[1m';


echo -e "${blue_bold} ==> ${reset_color}${bold} Installing GIT"
sudo apt-get install git
sudo apt-get update

echo -e "${blue_bold} ==> ${reset_color}${bold} Installing NVM"
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash
source ~/.nvm/nvm.sh
nvm install stable
nvm use stable


echo -e "${blue_bold} ==> ${reset_color}${bold} Clonning dotfiles"
git clone git@github.com:filipelinhares/dotfiles-js.git ~/dotfiles && cd ~/dotfiles


echo -e "${blue_bold} ==> ${reset_color}${bold} Installing NPM Packages"
npm install

node dotfiles.js
