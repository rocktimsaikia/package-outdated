const test = require('ava');
const readOutdated = require('..');

process.chdir(__dirname);

test('check for outdated packages', async t => {
	const expected = {
		'node-encoder': {
			current: '1.0.2',
			latest: '2.0.2'
		},
		ava: {
			current: '2.11.1',
			latest: '3.13.0'
		}
	};
	t.deepEqual(await readOutdated(), expected);
});

test('with option - preservePrefix set to true', async t => {
	const expected = {
		'node-encoder': {
			current: '^1.0.2',
			latest: '2.0.2'
		},
		ava: {
			current: '^2.11.1',
			latest: '3.13.0'
		}
	};
	t.deepEqual(await readOutdated({preservePrefix: true}), expected);
});
