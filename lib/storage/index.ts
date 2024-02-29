export type LocalStorage = {
	key: string
}

export const storageDefaults: LocalStorage = {
	key: 'value',
}

export function getStorageItem<Key extends keyof LocalStorage>(
	key: Key
): Promise<LocalStorage[Key]> {
	return new Promise((resolve, reject) => {
		chrome.storage.local.get([key], (result) => {
			if (chrome.runtime.lastError) {
				return reject(chrome.runtime.lastError)
			}
			return resolve((result as LocalStorage)[key])
		})
	})
}

export function setStorageItem<Key extends keyof LocalStorage>(
	key: Key,
	value: LocalStorage[Key]
): Promise<LocalStorage[Key]> {
	return new Promise((resolve, reject) => {
		chrome.storage.local.set({ [key]: value }, () => {
			if (chrome.runtime.lastError) {
				return reject(chrome.runtime.lastError)
			}
			return resolve(value)
		})
	})
}

export function getStorageData(): Promise<LocalStorage> {
	return new Promise((resolve, reject) => {
		chrome.storage.local.get(null, (result) => {
			if (chrome.runtime.lastError) {
				return reject(chrome.runtime.lastError)
			}

			return resolve(result as LocalStorage)
		})
	})
}

export function setStorageData(data: LocalStorage): Promise<void> {
	return new Promise((resolve, reject) => {
		chrome.storage.local.set(data, () => {
			if (chrome.runtime.lastError) {
				return reject(chrome.runtime.lastError)
			}

			return resolve()
		})
	})
}

export async function initializeStorageWithDefaults(defaults: LocalStorage) {
	const currentStorageData = await getStorageData()
	const newStorageData = Object.assign({}, defaults, currentStorageData)
	await setStorageData(newStorageData)
}
