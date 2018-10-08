# Autogit Plugin - Pull

A plugin for pulling from a remote.

## Install

```sh
npm install --save autogit-plugin-pull
```

## Usage

#### Options

This plugin uses the following options object:

```js
{
  remote: 'origin', // The remote to pull from
  branch: '' // The branch to pull from, if not set the current branch will be used
}
```

#### Configuration

Add this plugin to a command:

```js
const pull = require ( 'autogit-plugin-pull' );

module.exports = {
  commands: {
    'my-command': [
      pull ({ /* YOUR OPTIONS */ })
    ]
  }
}
```

## License

MIT © Fabio Spampinato
