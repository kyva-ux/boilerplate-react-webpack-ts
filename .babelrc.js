module.exports = (api) => {
	const mode = process.env.NODE_ENV ?? 'production'

	// This caches the Bable config by environment
	api.cache.using(() => mode)
	return {
		presets: [
			'@babel/preset-env',
			{
				targets: {
					browsers: ['>1%', 'last 4 versions', 'not ie < 9']
				},
				useBuiltIns: 'usage',
				debug: false,
				corejs: 3
			},
			'@babel/preset-typescript'
		],
		plugins: [
			'@babel/proposal-object-rest-spread',
			'@babel/plugin-syntax-dynamic-import'
		].filter(Boolean)
	}
}
