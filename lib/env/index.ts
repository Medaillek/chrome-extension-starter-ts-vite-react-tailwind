import { z } from 'zod'

const envSchema = z.object({
	VITE_WEBSITE_URL: z.string().url(),
})

export const env = envSchema.parse({
	VITE_WEBSITE_URL: import.meta.env.VITE_WEBSITE_URL,
})
