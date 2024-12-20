const path = require('path');

export default {
  // Set the base directory for GitHub Pages
  base: '/game-pembangunan-kota/',

  // Set the project root directory (relative to the config file)
  root: 'src',

  // Set the directory to serve static files from (relative to the root)
  publicDir: path.resolve(__dirname, 'src/public'), // Gunakan path untuk kompatibilitas

  // Set the build output directory
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Output build di root proyek
    emptyOutDir: true, // Membersihkan folder dist sebelum build baru
  },
};
