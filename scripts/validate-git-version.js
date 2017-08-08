const validateGitVersion = require('validate-git-version')
const { blue, yellow, red, green, reset } = require('chalk')
const { name, engines } = require('../package')

const onInValid = (currentVersion) => console.log(yellow(
`⚠️  Git version ${red(currentVersion)} is not compatible with ${name}.
   Please upgrade to git ${green(engines.git)}.
`
))

const onValid = () => console.log(blue(
`🎉  ${name} install successful!

   Type ${yellow('git aliases')} to view available aliases.
   ${reset('More documentation is available at https://github.com/jlegrone/git-config.')}
`
))

validateGitVersion(engines.git, onInValid, onValid)
