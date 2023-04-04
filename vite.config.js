import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: false
            }
        }),
    ],
    resolve: {
        alias: [
            {
                find: "@domain",
                replacement: path.resolve(__dirname, "src/domain"),
            },
            { find: "@data", replacement: path.resolve(__dirname, "src/data") },
            {
                find: "@presentation",
                replacement: path.resolve(__dirname, "src/presentation"),
            },
            {
                find: "@repositories",
                replacement: path.resolve(__dirname, "src/repositories"),
            },
            {
                find: "@features",
                replacement: path.resolve(__dirname, "src/features"),
            },
            {
                find: "@components",
                replacement: path.resolve(__dirname, "src/common/components"),
            },
            {
                find: "@common",
                replacement: path.resolve(__dirname, "src/common"),
            },
        ],
    },
});
