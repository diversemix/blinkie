// https://github.com/arvydas/blinkstick-node/wiki
/* eslint-disable no-await-in-loop */
const blinkstick = require('blinkstick')
// const usb = require('usb')

const stick = blinkstick.findFirst()
if (!stick) {
  console.error('Cannot find blinkstick')
  process.exit(2)
}

const leds = [0,1,2,3,4,5,6,7]
const channel = 0

const setColorAsync = (color, opts) => (
  new Promise( (resolve, reject) => {
    stick.setColor(color, opts, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        console.error(color, opts, err, result)
        reject(err, result)
      }
    })
  })
)

const allLeds = async (color) => {
  const result = []
  for (let index = 0; index < 8; index += 1) {
    const r = await setColorAsync(`#${color}`, { channel, index })
    result.push(r)
  }
  return result
}

const allLedsOld = async (color) => {
  const resultArray = leds.map( async index => (
    setColorAsync(`#${color}`, { channel, index })
  ))
  await Promise.all(resultArray)
  return resultArray 
}

if (process.argv.length < 3 || !process.argv[2]) {
  console.error('Need to supply a command')
  process.exit(1)
}

const cmd = process.argv[2]

switch (cmd) {
  case 'off' : 
    allLeds("000000")
    break
  default :
    allLeds(cmd)
}
console.log('done')
