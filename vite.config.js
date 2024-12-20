export default {
  // Set the base directory for GitHub pages
  base: '/game-pembangunan-kota/',

  // Set the project root directory (relative to the config file)
  root: 'src',

  // Set the directory to serve static files from (relative to the root)
  publicDir: 'public', // Hapus 'src/' karena root sudah diatur ke 'src'

  // Set the build output directory
  build: {
    outDir: '../dist', // Output build di luar folder 'src', yaitu di root proyek
  }
};
