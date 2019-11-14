
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./odkformrenderer.cjs.production.min.js')
} else {
  module.exports = require('./odkformrenderer.cjs.development.js')
}
