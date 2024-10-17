import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import './src/styles/footer.css';`,
        },
      },
    }
})


// plugins: [react()],
// css: {
//   preprocessorOptions: {
//     css: {
//       additionalData: `@import './src/styles/footer.css';`,
//     },
//   },
// },
