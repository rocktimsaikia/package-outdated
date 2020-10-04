'use strict';
const readPackages = require('read-packages');
const readLatestVersion = require('latest-version');
const compareVersion = require('compare-versions');
const isEmpty = require('./is-empty');

module.exports = async options => {
	try {
		options = {
			dir: process.cwd(),
			excludedPackages: [],
			preservePrefix: false,
			...options
		};

		const getVersionPrefix = version => version.charAt(0);

		const initialPackages = await readPackages({dir: options.dir, flattenPackages: true});
		const alteredPackages = await readPackages({dir: options.dir, removePrefix: true, flattenPackages: true});

		const packageNames = Object.keys(alteredPackages);

		const outdatedPackages = {};

		for (const name of packageNames) {
			const currentVersionPrefix = getVersionPrefix(initialPackages[name]);
			const currentVersion = alteredPackages[name];
			const latestVersion = await readLatestVersion(name); // eslint-disable-line no-await-in-loop

			if (compareVersion(currentVersion, latestVersion) === -1) {
				const currentVersionPrefixAttached = `${currentVersionPrefix}${currentVersion}`;

				outdatedPackages[name] = {
					current: options.preservePrefix ? currentVersionPrefixAttached : currentVersion,
					latest: latestVersion
				};
			}
		}

		return isEmpty(outdatedPackages) ? null : outdatedPackages;
	} catch (error) {
		console.error(error);
	}
};
