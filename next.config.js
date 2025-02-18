module.exports = {
  // Add this if you need serverless functions
  output: 'standalone', // or 'export' if you want fully static
  
  // Or for static export (if you don't need server-side features)
  output: 'export',
  trailingSlash: true,
}; 