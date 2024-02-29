import { waitForElm } from '@/lib/DOM'

waitForElm<HTMLBodyElement>('body').then((elem) => {
	console.log('Content script loaded programmatically.')
	console.log('Body:', elem)
})

export {}
