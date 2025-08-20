import { describe, it, expect } from 'vitest';
import * as lib from './index.js';

describe('Library Exports', () => {
	it('exports Neko component', () => {
		expect(lib.Neko).toBeDefined();
		expect(typeof lib.Neko).toBe('function');
	});
});
