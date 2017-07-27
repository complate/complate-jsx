let config = {
	manifest: false,
	bundles: [{
		entryPoint: "./views/index.jsx",
		target: "./dist/bundle.js",
		extensions: [".jsx"],
		moduleName: "render",
		transpiler: {
			features: ["es2015", "jsx"],
			jsx: { pragma: "createElement" }
		}
	}]
};

module.exports = {
	js: config
};
