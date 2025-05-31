// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: { port: 5173 },
// })




import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    port: 5173,
    proxy: {
      // Proxy requests to '/images' to the backend server (adjust the URL and port as necessary)
      '/images': 'http://localhost:4000', 
    },
  },
});
