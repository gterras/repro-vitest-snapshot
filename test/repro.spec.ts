import { describe, it, expect } from "vitest";

describe('Repro', () => {

	it('should pass with non-empty snapshot', async (context) => {
		const res = 'foo'
		await context.expect(res).toMatchFileSnapshot('./not_empty.md')
	})

	it('should pass with empty snapshot', async (context) => {
		const res = ''
		await context.expect(res).toMatchFileSnapshot('./empty.md')
	})

})
