import './remove-config'
import { exec } from 'child_process'

exec('git aliases', (error) => {
  if (error) {
    console.log('git aliases are not installed.')
  } else {
    throw new Error('git aliases are still installed.')
  }
})
