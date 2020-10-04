interface Options {
	/**
	Current working directory.
	@default process.cwd()
	*/
	readonly dir?: string;

	/**
	Preserves the semver `prefix(^*~)` of the current version.
	@default false
	*/
	preservePrefix?: boolean;
}

/**
Returns the outdated packages of a package.json file.

@example
```js
    const readOutdated = require('package-outdated')

    (async()=>{
                console.log(await readOutdated());
                //=> {foo: { current: '1.0.0', latest: '2.0.0' }, ...}

                console.log(await readOutdated({ preservePrefix: true }));
                //=> {foo: { current: '^1.0.0', latest: '2.0.0' }, ...}
    })();
```
*/
declare function _exports(options: Options): Promise<Record<string, string>>;
export = _exports;
