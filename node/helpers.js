const blinkstick = require('blinkstick')
// https://github.com/arvydas/blinkstick-node/wiki
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */

const stick = blinkstick.findFirst()
if (!stick) {
  console.error('Cannot find blinkstick')
  process.exit(2)
}

const channel = 0

const setColorAsync = (color, index) => {
  const opts = { channel, index }
  return new Promise( (resolve, reject) => {
    stick.setColor(color, opts, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        console.error(color, opts, err, result)
        reject(err, result)
      }
    })
  })
}

const allLeds = async (color) => {
  const result = []
  for (let index = 0; index < 8; index += 1) {
    const r = await setColorAsync(`${color}`, index)
    result.push(r)
  }
  return result
}

module.exports = {
  allLeds,
  setColorAsync
}
