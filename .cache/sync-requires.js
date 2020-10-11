const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("./dev-404-page.js.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("../src/pages/404.js.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("../src/pages/index.js")))
}

