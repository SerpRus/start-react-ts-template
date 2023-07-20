import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/_vars.scss";
          @import "./src/assets/scss/base/_fonts.scss";
          @import "./src/assets/scss/base/_generic.scss";
          @import "./src/assets/scss/utils/_functions.scss";
          @import "./src/assets/scss/utils/_mixins.scss";
        `,
      },
    },
  },
})
