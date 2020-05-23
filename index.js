'use strict';

module.exports = {
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	quoteProps: 'as-needed',
	bracketSpacing: true,
	arrowParens: 'always',
	endOfLine: 'lf',
	overrides: [
		{
			files: '*.json',
			options: {
				parser: 'json',
				tabWidth: 2,
				useTabs: false,
			},
		},
		{
			files: '*.yml',
			options: {
				parser: 'yaml',
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};
