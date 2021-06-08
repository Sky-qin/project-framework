export default {
  entry: "./src/index.js",
  env: {
    development: {
      extraBabelPlugins: [
        [
          "import",
          { libraryName: "antd", libraryDirectory: "es", style: "css" },
        ],
      ],
      disableCSSModules: true,
      // publicPath: "/",
    },
    production: {
      extraBabelPlugins: [
        [
          "import",
          { libraryName: "antd", libraryDirectory: "es", style: "css" },
        ],
      ],
      disableCSSModules: true,
      // publicPath: "/pad4/dist/",
    },
  },
  define: {
    "process.env": {
      API_EVN: process.env.API_EVN,
    },
  },
};
