import { describe, it, expect, vi } from 'vitest';

import { generateReportData } from './data';

describe('generateReportData(', () => {
    it('should execute logFn if provided', () => {
        const logger = vi.fn();

        logger.mockImplementation(() => {});

        logger.mockClear(() => {});

        generateReportData(logger);

        expect(logger).toBeCalled();
    });
});
