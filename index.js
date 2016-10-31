function isString(val) {
  return typeof val === 'string'
}

function isObject(val) {
  return val !== null && typeof val === 'object'
}

function parse(hosts) {
  if (!isString(hosts)) {
    throw new Error('Parse\'s first param should be a string')
  }
  return hosts.split('\n')
    .filter(function (str) {
      return /\s*/.test(str) // remove blank line
    })
    .map(function (line) {
      return line.trim()
        .split('#')[0].trim() // remove comment
        .split(/\s+/)
    })
    .reduce(function (obj, line) {
      var ip = line[0]
      var names = line.slice(1)
      names.forEach(function (name) {
        obj[name] = ip
      }, {})

      return obj
    }, {})
}

function stringify(json, opt) {
  if (!isObject(json)) {
    throw new Error('Stringify\'s first param should be an object')
  }

  if (!isObject(opt)) {
    opt = {}
  }

  if (!isString(opt.separator)) {
    opt.separator = ' '
  }

  return Object.keys(json)
    .map(function (key) {
      return json[key] + opt.separator + key
    })
    .join('\n')
}

exports.parse = parse
exports.stringify = stringify
