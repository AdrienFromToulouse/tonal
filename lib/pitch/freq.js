'use strict'

var props = require('./props')

/**
 * Get the pitch frequency in hertzs
 *
 * @param {String} pitch - the pitch
 * @param {Integer} tuning - optional tuning, 440 by default
 * @return {Float} - the pitch frequency
 *
 * @example
 * var freq = require('tonal/freq')
 * freq('A4') // => 440
 * freq('A3', 444) // => 222
 */
function freq (pitch, tuning) {
  pitch = props(pitch)
  if (!pitch) return null
  tuning = tuning || 440
  return Math.pow(2, (pitch.midi - 69) / 12) * tuning
}

module.exports = freq