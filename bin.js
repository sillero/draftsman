#!/usr/bin/env node

const {
  create,
  list,
  help,
} = require('./lib')

const CWD = process.cwd()
const [ COMMAND, BLUEPRINT, NAME ] = process.argv.slice(2)

console.log('CWD:', CWD)
console.log('Action:', COMMAND, BLUEPRINT, NAME)

switch(COMMAND) {
  case 'c':
  case 'create':
    create(CWD, BLUEPRINT, NAME)
    break

  case 'l':
  case 'ls':
  case 'list':
    list(CWD)
    break

  case 'd':
  case 'del':
  case 'delete':
    // ONLY DELETE FILES
    /// delete(CWD, BLUEPRINT, NAME)
    break

  default:
    help(CWD)
}

