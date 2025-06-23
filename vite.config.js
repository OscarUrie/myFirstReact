import {defineConfig} from 'vite'
import {VitePWA} from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({//Plugin para crear una PWA
            devOptions: {
                enabled: true
            },
            injectRegister: 'auto',
            includeAssets: ["vite.svg", "apple-touch-icon.png"],
            manifest: {
                name: 'My First ReactPWA',
                short_name: 'ReactPWA',
                description: 'First PWA using React',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: '.public/vite.svg',
                        sizes: '192x192',
                        type: 'image/svg+xml'
                    }
                ]
            },
            //registerType: 'autoUpdate' para actualizar la PWA
        })
    ],
})
