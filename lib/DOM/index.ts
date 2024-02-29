/**
 * @param selector The CSS selector to query
 * @returns The first element that matches the selector
 * @description return document.querySelector() always trusted and throws an error if no element is present. ** Only use on trusted elements or elements that must be present **
 */
export function qsStrict<T extends HTMLElement>(selector: string): T {
	const e = document.querySelector<T>(selector)
	if (!e) {
		throw new Error(`No element ${selector} found on the page`)
	}
	return e
}
/**
 * @description return document.querySelector() without any check
 * @param selector The CSS selector to query
 * @returns The first element that matches the selector
 */
export function qsLight<T extends HTMLElement>(selector: string): T | null {
	return document.querySelector<T>(selector)
}

/**
 * @param selector The CSS selector to wait for
 * @returns A promise that resolves when the element is found
 * @description Wait for an element to be present in the DOM
 */
export function waitForElm<E extends Element>(selector: string): Promise<E> {
	return new Promise((resolve) => {
		if (document.querySelector<E>(selector)) {
			return resolve(document.querySelector(selector) as E)
		}

		const observer = new MutationObserver(() => {
			if (document.querySelector<E>(selector)) {
				observer.disconnect()
				resolve(document.querySelector(selector) as E)
			}
		})

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		})
	})
}

/**
 * @param ms The number of milliseconds to wait
 * @returns A promise that resolves after the specified time
 * @description Wait for a specified amount of time
 */
export const sleep = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms))
