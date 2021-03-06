/* global describe it */
var assert = require('assert')
var key = require('..')

describe('music-key/parse', function () {
  it('case agnostic', function () {
    assert.deepEqual(key.parse('C major'), { tonic: 'C', mode: 'major', alt: 1 })
    assert.deepEqual(key.parse('C Major'), { tonic: 'C', mode: 'major', alt: 1 })
    assert.deepEqual(key.parse('C MAJOR'), { tonic: 'C', mode: 'major', alt: 1 })
  })
  it('tonics are normalized', function () {
    assert.deepEqual(key.parse('fx major'), { tonic: 'F##', mode: 'major', alt: 1 })
  })
  it('major by default', function () {
    assert.deepEqual(key.parse('C'), { tonic: 'C', mode: 'major', alt: 1 })
  })
  it('without tonic', function () {
    assert.deepEqual(key.parse('major'), { tonic: false, mode: 'major', alt: 1 })
    assert.deepEqual(key.parse('DORIAN'), { tonic: false, mode: 'dorian', alt: 2 })
  })
  it('invalid name', function () {
    assert.deepEqual(key.parse('blah major'), null)
    assert.deepEqual(key.parse('blah'), null)
    assert.deepEqual(key.parse('C bebop'), null)
    assert.deepEqual(key.parse(), null)
  })
})
