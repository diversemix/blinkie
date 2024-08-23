#!/usr/bin/env node
/* eslint-disable no-console */

const { allLeds, setColorAsync } = require('./helpers')

const SINGLE_COMMAND = 3
const LED_COMMAND = 4

const processLedCommand = (color, led) => {
  setColorAsync(color, led)
}

const processSingleCommand = (color) => {
  allLeds(color)
}

if (process.argv.length < 3 || !process.argv[2]) {
  console.error('Need to supply a command')
  process.exit(1)
}

let color = process.argv[2]
if (color === 'off') color = 'black'
if (color === 'on') color = 'white'

switch (process.argv.length) {
  case SINGLE_COMMAND: 
    processSingleCommand(color)
    break
  case LED_COMMAND: 
    processLedCommand(color, process.argv[3])
    break
  default:
    console.error('Too many arguments')
    process.exit(9)
}

