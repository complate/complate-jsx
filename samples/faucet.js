let config = {
	targetDir: "dist",
	manifest: false,
	bundles: [{
		entryPoint: "./views/index.jsx",
		extensions: [".jsx"],
		moduleName: "render",
		transpiler: {
			features: ["es2015", "jsx"],
			jsx: {
				"pragma": "createElement"
			}
		}
	}]
};

module.exports = {
	js: config
};
