
// This module is quite special, as it is run in compile time.
// It fetches the current version from `package.json` and export the version!
//

let { version } = require('../../package.json')
module.exports = 'module.exports=' + JSON.stringify(version.replace(/\.0$/, '').replace(/\.0$/, ''))
