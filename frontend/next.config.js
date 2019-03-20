/* https://github.com/zeit/next.js */ 
// const fs = require('fs')
// const { join } = require('path')
// const { promisify } = require('util')
// const copyFile = promisify(fs.copyFile)

module.exports = {
  exportPathMap: () => ({
    '../../app/templates': { page: '/' }
  }),
  distDir: '/static'
}

// module.exports = {
//   exportPathMap: async function (
//     defaultPathMap = exportPathMap = () => {
//       return {
//         '/templates': { page: '/' },
//       }
//     }, 
//     { dev, dir, outDir, distDir, buildId } ) {
//     if (dev) {
//       return defaultPathMap
//     }
//     // This will copy robots.txt from your project root into the out directory
//     await copyFile(join(dir, '/static'), join(outDir, 'index.html'), join(distDir, '/static'))
//     return defaultPathMap
//   }
// }