# hosts-util

Parse and stringify hosts file.

## Installation

```sh
npm install hostsUtil --save
```

## API

### parse(string)

```js
const hostsUtil = require('hosts-util')
const hosts = fs.readFileSync('/etc/hosts', 'utf8')

hostsUtil.parse(`
  127.0.0.1   localhost
  192.168.0.1 www.example.com www.example.org
`)
```

equals to

```js
{
  localhost: '127.0.0.1',
  'www.example.com': '192.168.0.1',
  'www.example.org': '192.168.0.1',
}
```

## License

MIT
