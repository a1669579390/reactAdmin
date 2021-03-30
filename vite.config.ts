import { defineConfig } from "vite"
const path = require("path")
console.log(__dirname)

export default defineConfig({
  //配置服务器路径
  base: "",
  //路径别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // ...
  server: {
    open: "",
    force: true,
    hmr: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
