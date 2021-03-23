import vue from "@vitejs/plugin-vue";
import path from "path";

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "components",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/scss/mixins/index.scss"; 
                @import "@/assets/styles/scss/extends/index.scss";
                @import "@/assets/styles/scss/variables/index.scss";`,
      },
    },
  },
};
