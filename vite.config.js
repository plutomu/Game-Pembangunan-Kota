import { resolve } from 'path';

export default {
  // Set the base directory for GitHub Pages
  base: '/game-pembangunan-kota/',

  // Set the project root directory (relative to the config file)
  root: 'src',

  // Set the directory to serve static files from (relative to the root)
  publicDir: resolve(__dirname, 'src/public'), // Pastikan path absolut untuk kompatibilitas

  // Set the build output directory
  build: {
    outDir: resolve(__dirname, 'dist'), // Output build di root proyek
    emptyOutDir: true, // Membersihkan folder dist sebelum build baru
  },
};
