import { LocalStorage } from '@/lib/storage'

/* --------------------------------------- */

const messageActions = [
	'registerContentScript',
	'unregisterContentScript',
	'getStorageItem',
] as const

export type ExtensionMessage =
	| RegisterContentScript
	| GetStorageItem
	| UnregisterContentScript

/* --------------------------------------- */

type MessageAction = (typeof messageActions)[number]

interface RawMessage {
	action: MessageAction
}

/* --------------------------------------- */

interface RegisterContentScript extends RawMessage {
	action: 'registerContentScript'
	scriptName: string
}

interface UnregisterContentScript extends RawMessage {
	action: 'unregisterContentScript'
	scriptName: string
}

interface GetStorageItem extends RawMessage {
	action: 'getStorageItem'
	key: keyof LocalStorage
}
