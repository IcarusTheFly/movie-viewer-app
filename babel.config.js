module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      // "@babel/preset-env",
      // "@babel/preset-react"
    ],
    plugins: [
      "@babel/plugin-transform-runtime",
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blocklist": null,
        "allowlist": null,
        "safe": false,
        "allowUndefined": true
      }]
    ]
  };
};