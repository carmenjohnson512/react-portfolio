const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/carmen.johnson/UT-FSF-BOOTCAMP/react-portfolio/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/carmen.johnson/UT-FSF-BOOTCAMP/react-portfolio/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/carmen.johnson/UT-FSF-BOOTCAMP/react-portfolio/src/pages/index.js")))
}

