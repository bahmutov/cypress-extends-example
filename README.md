# cypress-extends-example

This is a small example that implements single level `extends: filename` support in `cypress.json` via plugins file.

See [cypress.json](cypress.json) that has `"extends": "./another-config.json"` pointing at [another-config.json](another-config.json). The plugins file [cypress/plugins/index.js](cypress/plugins/index.js) loads `cypress.json`, finds `extends` key and loads the file, returning the extra config - Cypress merges the returned value automatically.
