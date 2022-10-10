import { it, expect } from 'vitest';

import writeData from './io';

it('should execute the writeFile method', async () => {
    const testData = 'Test';
    const testFileName = 'test.txt';

    const result = await writeData(testData, testFileName);

    return expect(result).toBeUndefined();
});
