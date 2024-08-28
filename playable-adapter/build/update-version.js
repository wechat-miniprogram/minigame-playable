/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs/promises')
const path = require('path')

async function getVersion() {
  const packageJson = require('../package.json')
  if (!packageJson.version) {
    throw new Error('no version info')
  }
  return packageJson.version
}

async function modifyVersion(version) {
  const targetFilePath = path.resolve(__dirname, '../src/const.ts')
  const fileContent = await fs.readFile(targetFilePath, 'utf-8')
  let newContent = fileContent.replace(/export const VERSION = '(.)*'/, `export const VERSION = '${version}'`)
  newContent = fileContent.replace(/export const UPDATE_TIME = '(.)*'/, `export const UPDATE_TIME = '${new Date().toLocaleString()}'`)
  fs.writeFile(targetFilePath, newContent, 'utf-8');
}

async function main() {
  modifyVersion(await getVersion())
}

main()