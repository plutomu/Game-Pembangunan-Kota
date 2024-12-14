export default {
  // Set the base directory for GitHub pages or Vercel (set base path)
  base: '/simcity-threejs-clone/',

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
    historyApiFallback: {
      index: '/index.html' // Pastikan semua rute diarahkan ke index.html
    }
  },

  // Configure preview server for local testing
  preview: {
    port: 3000,
    strictPort: true
  }
};
