/*
 * Project: is-yarn
 * Version: 0.0.1
 * Author: Akash Nimare
 * Twitter: @meakaakka
 * License: MIT
 * GitHub: https://github.com/akashnimare/is-yarn
 */

'use strict'

const cmd = require('child_process').exec

// function to check if yarn is installed globally
function isyarn () {
  cmd('npm ls | npm list --depth 1 --global yarn', (error) => {
    if (error === null) {
      console.log('true')
    } else {
      console.log('false')
    }
  })
}

// exports
module.exports = {
  isyarn
}

