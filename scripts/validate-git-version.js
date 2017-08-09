import validateGitVersion from 'validate-git-version'
import { blue, yellow, red, green, reset } from 'chalk'
import { name, engines } from '../package'

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
