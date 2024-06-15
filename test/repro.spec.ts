import { describe, it } from "vitest";

describe('Repro', () => {

	it('should pass with non-empty snapshot', (context) => {
		const res = 'foo'
		context.expect(res).toMatchFileSnapshot('./not_empty.md')
	})

	it('should pass with empty snapshot', (context) => {
		const res = ''
		context.expect(res).toMatchFileSnapshot('./empty.md')
	})

})
