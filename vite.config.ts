import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import * as path from 'path'

import manifest from './manifest'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'build',
		emptyOutDir: true,
		rollupOptions: {
			output: {
				chunkFileNames: 'assets/chunk-[hash].js',
				entryFileNames: 'assets/[name].hash[hash].js',
			},
		},
	},
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, './') }],
	},
	server: {
		port: 5178,
	},
	plugins: [react(), crx({ manifest })],
	optimizeDeps: {
		esbuildOptions: {
			target: 'esnext',
		},
	},
})
