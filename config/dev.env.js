'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT:'"http://192.168.1.8:8888"',
  APP_ID:'"wx0739baa9f03240c5"'
})
