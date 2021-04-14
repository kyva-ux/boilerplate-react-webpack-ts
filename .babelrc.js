module.exports = (api) => {
	const mode = process.env.NODE_ENV ?? 'production'

	// This caches the Babel config by environment.
	api.cache.using(() => mode)
	return {
		presets: [
			[
				'@babel/preset-env',
				{
					targets: {
						browsers: ['>1%', 'last 4 versions', 'not ie < 9']
					},
					useBuiltIns: 'usage',
					debug: false,
					corejs: 3
				}
			],
			'@babel/preset-react',
			'@babel/preset-typescript'
		]
	}
}
