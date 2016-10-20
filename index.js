function isUndefined(val) {
  return typeof val === 'undefined'
}

function isString(val) {
  return typeof val === 'string'
}

function isObject(val) {
  return val !== null && typeof val === 'object'
}

function parse(hosts, opt) {
  if (!isString(hosts)) {
    throw new Error('Parse\'s first param should be a string')
  }

  if (!isObject(opt)) {
    opt = {}
  }

  return hosts.split('\n')
    .filter(function (str) { // remove blank line
      return /\s*/.test(str)
    })
    .map(function (line) {
      return line.trim().split(/\s+/)
    })
    .reduce(function (obj, line) {
      var ip = line[0]
      var names = line.slice(1)
      var nameObj = names.reduce(function (ob, name) {
        return Object.assign(ob, { [name]: ip })
      }, {})

      return Object.assign(obj, nameObj)
    }, {})
}

function stringify(json, opt) {
  if (!isObject(json)) {
    throw new Error('Stringify\'s first param should be an object')
  }

  if (!isObject(opt)) {
    opt = {}
  }

  if (isUndefined(opt.seperate)) {
    opt.seperate = ' '
  }

  return Object.keys(json)
    .map(function (key) {
      return json[key] + opt.seperate + key
    })
    .join('\n')
}

exports.parse = parse
exports.stringify = stringify
