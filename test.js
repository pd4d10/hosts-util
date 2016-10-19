var assert = require('assert')
var hostsUtil = require('./')

var parse = hostsUtil.parse
var stringify = hostsUtil.stringify

describe('parse', function () {
  it('should', function () {
    assert.deepEqual(
      parse('127.0.0.1 www.example.com'),
      {
        'www.example.com': '127.0.0.1'
      }
    )
  })

  it('should handle multi space', function () {
    assert.deepEqual(
      parse('127.0.0.1    www.example.com'),
      {
        'www.example.com': '127.0.0.1'
      }
    )
  })

  it('should handle multi hosts', function () {
    assert.deepEqual(
      parse('127.0.0.1 www.example.com www.example.org'),
      {
        'www.example.com': '127.0.0.1',
        'www.example.org': '127.0.0.1'
      }
    )
  })

  it('should handle multi line', function () {
    assert.deepEqual(
      parse('127.0.0.1 www.example.com\n192.168.0.1 www.example.org'),
      {
        'www.example.com': '127.0.0.1',
        'www.example.org': '192.168.0.1'
      }
    )
  })
})

describe('stringify', function () {

})
