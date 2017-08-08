const validateGitVersion = require('validate-git-version')
const { blue, yellow } = require('chalk')
const { name: moduleName } = require('../package')

const minimumVersion = '2.6.0'

validateGitVersion(
  `^${minimumVersion}`,
  (currentVersion) => console.log(yellow(
    `⚠️  Git version ${currentVersion} is not compatible with ${moduleName}. Please upgrade to git ${minimumVersion} or later.`
  )),
  (currentVersion) => console.log(blue(
    `🎉  Git version ${currentVersion} is compatible with ${moduleName}.`
  ))
)
