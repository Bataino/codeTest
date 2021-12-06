module.exports = {
    pwa: {
      workboxOptions: {
        skipWaiting: true,
        clientsClaim: true,
        exclude: [/_redirects/]
      }
    }
  }
