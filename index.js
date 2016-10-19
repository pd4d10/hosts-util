function parse(hosts) {
  return hosts.split('\n')
    .map(function (x) {
      return x.split(/\s+/)
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

function stringify(json) {
  return Object.keys(json)
    .map(function (key) {
      return json[key] + ' ' +  key
    })
    .join('\n')
}

exports.parse = parse
exports.stringify = stringify
