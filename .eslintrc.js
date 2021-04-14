const path = require('path')

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	env: {
		browser: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint'
	],
	parserOptions: {
		project: path.resolve(__dirname, 'tsconfig.json'),
		tsconfigRootDir: __dirname,
		ecmaVersion: 2018,
		sourceTypes: 'module',
		ecmaFeatures: {
			jsx: true
		},
		rules: {
			'@typescript-eslint/explicit-function-return-type': 'off'
		}
	}
}
