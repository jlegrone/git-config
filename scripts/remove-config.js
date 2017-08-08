const { exec } = require('child_process')

exec(
  'sed -i.backup "/jlegrone.gitconfig/d" ~/.gitconfig',
  (err, stdout, stderr) => {
    const error = err || stderr
    if (error) {
      throw new Error(error)
    }
  }
)
