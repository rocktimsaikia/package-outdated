# package-outdated ![build](https://travis-ci.com/RocktimSaikia/package-outdated.svg?branch=master) ![license](https://img.shields.io/github/license/rocktimsaikia/package-outdated)

> Returns the outdated packages of a package.json file.

## Install

```bash
npm install package-outdated
```

## Usage

```js
const readOutdated = require('package-outdated')

(async()=>{
        console.log(await readOutdated());
        //=> {foo: { current: '1.0.0', latest: '2.0.0' }, ...}

       console.log(await readOutdated({ preservePrefix: true }));
       //=> {foo: { current: '^1.0.0', latest: '2.0.0' }, ...}
        
})();
```

## API

### readOutdated(options?)

Returns the outdated packages of a package.json file.

#### Options

##### dir

Type: string
Default: process.cwd()

Current working directory.

##### preservePrefix

Type: boolean
Default: false

Preserves the semver `prefix(^*~)` of the current version.

## Realated
- [read-packages](https://github.com/rocktimsaikia/read-packages) - Reads dependencies of a package.json file

## Support

<a href="https://www.buymeacoffee.com/7BdaxfI"><img src="https://user-images.githubusercontent.com/33410545/91206759-48d5d180-e725-11ea-93b5-754d98c007af.png" height="70px"/></a>
