import fs from "node:fs";

const packageJsonUrl = new URL("../package.json", import.meta.url);
const packageJson = JSON.parse(fs.readFileSync(packageJsonUrl, "utf8"));

packageJson.exports = {
	".": {
		import: { types: "./dist/index.d.ts", default: "./dist/index.js" },
		require: { types: "./dist/index.d.cts", default: "./dist/index.cjs" },
	},
};

fs.writeFileSync(
	packageJsonUrl,
	`${JSON.stringify(packageJson, null, "\t")}\n`,
);
