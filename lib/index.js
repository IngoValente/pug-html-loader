/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Williams Medina @willyelm
*/
'use strict'
const util = require('loader-utils')
const pug = require('pug')

module.exports = function (source) {

  if (this.cacheable) {
    this.cacheable(true)
  }

  let query = util.parseQuery(this.query)
  let req = util.getRemainingRequest(this)
  let options = Object.assign({
    filename: this.resourcePath,
    pretty: query.pretty || false,
    compileDebug: this.debug || false
  }, query)
  let template = pug.compile(source, options)
  return template(query)
}
