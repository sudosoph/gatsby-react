var plugins = [{
      plugin: require('/Users/sophia/Documents/Code/gatsby-react/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/sophia/Documents/Code/gatsby-react/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"semc1mmx","dataset":"production","watchMode":true,"token":"skK1ZlNVFWz181byiQFYhU6Tj7VXa7OTt04TR4zQX8EvVPk5aMcmKIbdQc3fdFzCipOv6gDliCENMXGoU6inB0rYScwqPZWri08ai8mnovtAipI0bSdKv4WvUcCaJcYkt33dzsIPI9qk2n44lGOnvSzgwt9NKGkaMUBQOhAMGU4l4RymS6Ug"},
    },{
      plugin: require('/Users/sophia/Documents/Code/gatsby-react/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
