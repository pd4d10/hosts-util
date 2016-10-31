# hosts-util

[![Build Status](https://travis-ci.org/pd4d10/hosts-util.svg?branch=master)](https://travis-ci.org/pd4d10/hosts-util)
[![codecov](https://codecov.io/gh/pd4d10/hosts-util/branch/master/graph/badge.svg)](https://codecov.io/gh/pd4d10/hosts-util)
[![npm](https://img.shields.io/npm/v/hosts-util.svg)](https://www.npmjs.com/package/hosts-util)
[![](https://img.shields.io/npm/l/hosts-util.svg)](https://www.npmjs.com/package/hosts-util)

Parse and stringify hosts file.

## Installation

```sh
npm install hosts-util --save
```

## API

### parse(hosts: string)

```js
const hostsUtil = require('hosts-util')
const hosts = fs.readFileSync('/etc/hosts', 'utf8')

hostsUtil.parse(`
  127.0.0.1   localhost
  192.168.0.1 www.example.com www.example.org
`)

// deep equals to

{
  localhost: '127.0.0.1',
  'www.example.com': '192.168.0.1',
  'www.example.org': '192.168.0.1',
}
```

### stringify(data: object, params: object)

```js
const hostsUtil = require('hosts-util')

hostsUtil.stringify({
  localhost: '127.0.0.1',
  'www.example.com': '192.168.0.1',
  'www.example.org': '192.168.0.1',
})

// equals to

// 127.0.0.1 localhost
// 192.168.0.1 www.example.com
// 192.168.0.1 www.example.org

hostsUtil.stringify({
  localhost: '127.0.0.1',
  'www.example.com': '192.168.0.1',
  'www.example.org': '192.168.0.1',
}, {
  separator: '\t' // separator between ip and host name, a space default
})

// equals to

// 127.0.0.1	localhost
// 192.168.0.1	www.example.com
// 192.168.0.1	www.example.org
```

equals to

```js
```

## License

MIT
