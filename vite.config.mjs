import { resolve } from 'path'
import { fileURLToPath, URL } from "url";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build'
    },
    server: {
        watch: {
            usePolling: true
        }
    },
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
            { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
            { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
            { find: '@images', replacement: fileURLToPath(new URL('./src/static/images', import.meta.url)) },
            { find: '@images', replacement: fileURLToPath(new URL('./src/static/images/icons', import.meta.url)) },
        ]
    }

})
