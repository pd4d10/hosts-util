var assert = require('assert')
var hostsUtil = require('./')

var parse = hostsUtil.parse
var stringify = hostsUtil.stringify

describe('parse', function () {
  it('should throw error when first argument is not a string', function () {
    assert.throws(
      function () {
        parse([])
      },
      /Parse's first param should be a string/
    )
  })

  it('should handle single line', function () {
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

  it('should handle multi hosts in one line', function () {
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

  it('should handle blank line', function () {
    assert.deepEqual(
      parse('127.0.0.1 www.example.com\n\n192.168.0.1 www.example.org'),
      {
        'www.example.com': '127.0.0.1',
        'www.example.org': '192.168.0.1'
      }
    )
  })

  it('should handle comment at start of a line', function () {
    assert.deepEqual(parse('# 127.0.0.1 www.example.com'), {})
  })

  it('should handle comment at middle of a line', function () {
    assert.deepEqual(
      parse('127.0.0.1 www.example.com # www.example.org'),
      {
        'www.example.com': '127.0.0.1',
      }
    )
  })
})

describe('stringify', function () {
  it('should throw error when first argument is not an object', function () {
    assert.throws(
      function () {
        stringify('I am a string')
      },
      /Stringify's first param should be an object/
    )
  })

  it('should handle single hosts', function () {
    assert.equal(
      stringify({
        'www.example.com': '127.0.0.1'
      }),
      '127.0.0.1 www.example.com'
    )
  })

  it('should handle multi hosts', function () {
    assert.equal(
      stringify({
        'www.example.com': '127.0.0.1',
        'www.example.org': '192.168.0.1',
      }),
      '127.0.0.1 www.example.com\n192.168.0.1 www.example.org'
    )
  })

  it('should separator param work', function () {
    assert.equal(
      stringify({
        'www.example.com': '127.0.0.1',
      }, {
        separator: '\t'
      }),
      '127.0.0.1\twww.example.com'
    )
  })
})
