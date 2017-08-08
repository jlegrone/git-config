const { exec } = require('child_process')

exec(
  `git config --global --add include.path ${process.cwd()}/src/jlegrone.gitconfig`,
  (err, stdout, stderr) => {
    const error = err || stderr
    if (error) {
      throw new Error(error)
    }
  }
)
