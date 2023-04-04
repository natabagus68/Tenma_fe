// vite.config.js
import { defineConfig } from "file:///C:/Users/user/rdl/tenma-frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/user/rdl/tenma-frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/user/rdl/tenma-frontend/node_modules/vite-plugin-pwa/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\user\\rdl\\tenma-frontend";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: false
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: "@domain",
        replacement: path.resolve(__vite_injected_original_dirname, "src/domain")
      },
      { find: "@data", replacement: path.resolve(__vite_injected_original_dirname, "src/data") },
      {
        find: "@presentation",
        replacement: path.resolve(__vite_injected_original_dirname, "src/presentation")
      },
      {
        find: "@repositories",
        replacement: path.resolve(__vite_injected_original_dirname, "src/repositories")
      },
      {
        find: "@features",
        replacement: path.resolve(__vite_injected_original_dirname, "src/features")
      },
      {
        find: "@components",
        replacement: path.resolve(__vite_injected_original_dirname, "src/common/components")
      },
      {
        find: "@common",
        replacement: path.resolve(__vite_injected_original_dirname, "src/common")
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXHJkbFxcXFx0ZW5tYS1mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxyZGxcXFxcdGVubWEtZnJvbnRlbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3VzZXIvcmRsL3Rlbm1hLWZyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICByZWFjdCgpLFxyXG4gICAgICAgIFZpdGVQV0Eoe1xyXG4gICAgICAgICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcclxuICAgICAgICAgICAgZGV2T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaW5kOiBcIkBkb21haW5cIixcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9kb21haW5cIiksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgZmluZDogXCJAZGF0YVwiLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvZGF0YVwiKSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaW5kOiBcIkBwcmVzZW50YXRpb25cIixcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9wcmVzZW50YXRpb25cIiksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpbmQ6IFwiQHJlcG9zaXRvcmllc1wiLFxyXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL3JlcG9zaXRvcmllc1wiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmluZDogXCJAZmVhdHVyZXNcIixcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9mZWF0dXJlc1wiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmluZDogXCJAY29tcG9uZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2NvbW1vbi9jb21wb25lbnRzXCIpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaW5kOiBcIkBjb21tb25cIixcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9jb21tb25cIiksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRSLFNBQVMsb0JBQW9CO0FBQ3pULE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNKLGNBQWM7QUFBQSxNQUNkLFlBQVk7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNiO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0g7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUNyRDtBQUFBLE1BQ0EsRUFBRSxNQUFNLFNBQVMsYUFBYSxLQUFLLFFBQVEsa0NBQVcsVUFBVSxFQUFFO0FBQUEsTUFDbEU7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLE1BQzNEO0FBQUEsTUFDQTtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDM0Q7QUFBQSxNQUNBO0FBQUEsUUFDSSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDdkQ7QUFBQSxNQUNBO0FBQUEsUUFDSSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyx1QkFBdUI7QUFBQSxNQUNoRTtBQUFBLE1BQ0E7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUNyRDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
