import { it, expect } from 'vitest';

import writeData from './io';

it('should execute the writeFile method', () => {
    const testData = 'Test';
    const testFileName = 'test.txt';

    return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});
