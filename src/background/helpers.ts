import { ExtensionMessage } from './types'

export function sendMessageToContentScript(
	id: number | undefined,
	message: ExtensionMessage
) {
	return chrome.tabs.sendMessage(id ?? 0, message)
}

export async function registerContentScript(
	scripts: chrome.scripting.RegisteredContentScript[]
) {
	try {
		await chrome.scripting.registerContentScripts(scripts)
	} catch (e) {}
}

export async function unregisterContentScript(ids: string[] | undefined) {
	try {
		await chrome.scripting.unregisterContentScripts({ ids })
	} catch (e) {}
}
