// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const { join, resolve, dirname } = require('path')
const fs = require('fs')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  console.log('plugins config is')
  console.log(config)
  // the config does NOT give you unknown keys - only the keys the Cypress understands
  // so we can't just read key "extends". Instead we need to read cypress.json
  // TODO pass config filename via "config"!
  const configFilename = join(__dirname, '..', '..', 'cypress.json')
  const loadedConfig = require(configFilename)
  console.log('cypress config file values', loadedConfig)
  if (loadedConfig.extends) {
    const extendsFilename = resolve(dirname(configFilename), loadedConfig.extends)
    console.log('Cypress config extends', extendsFilename)
    const loadedExtends = require(extendsFilename)
    console.log('returning loaded extends')
    console.log(loadedExtends)

    return loadedExtends
  }
}
