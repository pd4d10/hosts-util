# hosts-util

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
