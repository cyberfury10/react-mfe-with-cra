const { getPlugin, pluginByName } = require("@craco/craco")
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin")
const { ModuleFederationPlugin } = require("webpack").container

const deps = require("./package.json").dependencies
module.exports = {
  // Turn off eslint for builds.
  // We already run lint as a separate step.
  eslint: {
    enable: false,
  },

  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
      plugins: [
        new ModuleFederationPlugin({
          name: "cra",
          filename: "cra.js",
          remotes: {
            'react_webpack_app': "react_webpack_app@http://localhost:4001/react-webpack-app.js",
          },
          exposes: {
            "./component": "./src/expose/component.js",
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
              eager: true,
            },
          },
        }),
        new ExternalTemplateRemotesPlugin(),
      ],
    },
  },

  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          const { isFound, match } = getPlugin(webpackConfig, pluginByName("HtmlWebpackPlugin"))
          if (isFound) {
            const { userOptions } = match
            userOptions.publicPath = "/"
          }
          return webpackConfig
        },
      },
      options: {},
    },
  ],
}
