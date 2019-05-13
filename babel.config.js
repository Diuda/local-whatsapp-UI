module.exports = function (api) {
	const presets = ["react-app", "@babel/preset-env", "@babel/preset-react"];
	const plugins = [
		"@babel/plugin-transform-modules-commonjs", 
		"inline-react-svg",
		"transform-class-properties"
	];
  
	/** this is just for minimal working purposes, 
	 * for testing larger applications it is
	 * advisable to cache the transpiled modules in
	 * node_modules/.bin/.cache/@babel/register**/
	api.cache(false); 
  
	return {
		presets, 
		plugins
	}
  };