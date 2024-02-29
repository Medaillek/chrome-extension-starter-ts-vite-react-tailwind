import { defineDynamicResource, defineManifest } from '@crxjs/vite-plugin'
import { loadEnv } from 'vite'

export default defineManifest((env) => {
	process.env = { ...process.env, ...loadEnv(env.mode, process.cwd()) }
	return {
		name: 'Default',
		description: 'Default',
		version: '1.0.0',
		manifest_version: 3,
		minimum_chrome_version: '105',
		icons: {
			16: `public/icons/16.png`,
			32: `public/icons/32.png`,
			48: `public/icons/48.png`,
			128: `public/icons/128.png`,
		},
		background: {
			service_worker: 'src/background/index.ts',
			type: 'module',
		},
		action: {
			default_title: 'Open the popup',
			default_popup: 'src/popup/index.html',
		},
		author: 'Kieron AUDIFFREN',

		content_scripts: [
			{
				js: ['src/content-scripts/index.ts'],
				run_at: 'document_end',
				matches: ['http://*/*', 'https://*/*'],
			},
		],

		permissions: [
			'storage',
			'scripting',
			'tabs',
			'webRequest',
			'unlimitedStorage',
		],
		web_accessible_resources: [
			defineDynamicResource({
				matches: ['http://*/*', 'https://*/*'],
			}),
		],
		host_permissions: ['http://*/*', 'https://*/*'],
	}
})
