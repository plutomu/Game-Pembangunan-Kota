export default {
  // Set the base directory for GitHub pages
  base: '/simcity-threejs-clone',

  // Set the project root directory (relative to the config file)
  root: './src',

  // Set the directory to serve static files from (relative to the root)
  publicDir: './public',

  // Set the build output directory
  build: {
    outDir: '../dist' // Ubah agar 'dist' di root proyek
  },

  // Add server configuration to handle SPA routing
  server: {
    historyApiFallback: true // Redirect all routes to index.html
  },

  // Configure preview server for local testing
  preview: {
    port: 3000,
    strictPort: true
  }
};
