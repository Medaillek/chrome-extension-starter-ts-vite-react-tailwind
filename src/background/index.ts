import { getStorageItem } from '@/lib/storage'
import { registerContentScript, unregisterContentScript } from './helpers'
import { ExtensionMessage } from './types'

//@ts-ignore
import anyName from '@/src/content-scripts/index?script'

chrome.runtime.onMessage.addListener(
	async (message: ExtensionMessage, sender, sendResponse) => {
		switch (message.action) {
			case 'registerContentScript':
				await registerContentScript([
					{
						id: message.scriptName,
						js: [anyName],
						runAt: 'document_end',
						matches: ['http://*/*', 'https://*/*'],
					},
				])
				break
			case 'unregisterContentScript':
				await unregisterContentScript([message.scriptName])
				break
			case 'getStorageItem':
				const storageItem = await getStorageItem(message.key)
				console.log(storageItem)
				break
		}
	}
)
