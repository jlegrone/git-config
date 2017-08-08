const validateGitVersion = require('validate-git-version')
const { blue, yellow, red, green, reset } = require('chalk')
const { name: moduleName } = require('../package')

const minimumVersion = '2.6.0'

const onInValid = (currentVersion) => console.log(yellow(
`
⚠️  Git version ${red(currentVersion)} is not compatible with ${moduleName}.
   Please upgrade to git ${green(minimumVersion)} or later.
`
))

const onValid = () => console.log(blue(
`
🎉  ${moduleName} install successful!

   Type ${yellow('git aliases')} to view available aliases.
   ${reset('More documentation is available at https://github.com/jlegrone/git-config.')}
`
))

validateGitVersion(`^${minimumVersion}`, onInValid, onValid)
