/*
 * Project: is-yarn
 * Version: 0.0.1
 * Author: Akash Nimare
 * Twitter: @meakaakka
 * License: MIT
 * GitHub: https://github.com/akashnimare/is-yarn
 */

'use strict'

const shell = require('shelljs')

// function to check if yarn is installed globally
function isyarn () {
  const pkgINFO = shell.exec('npm ls | npm list --depth 1 --global yarnpkg', {silent: true}).code
  if (pkgINFO === 0) {
    return true
  } else {
    return false
  }
}
// exports
module.exports = {
  isyarn
}

