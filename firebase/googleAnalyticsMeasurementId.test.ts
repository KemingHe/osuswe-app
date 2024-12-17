import isNonEmptyString from '@/utils/isNonEmptyString';

import GOOGLE_ANALYTICS_MEASUREMENT_ID from '@/firebase/googleAnalyticsMeasurementId';

// IMPORTANT: NEVER snapshot process.env in tests. It will expose your secrets.

describe('Google Analytics Measurement ID', () => {
  it('should be a non-empty string', () => {
    expect(isNonEmptyString(GOOGLE_ANALYTICS_MEASUREMENT_ID)).toBe(true);
  });

  it('should match the expected format', () => {
    expect(GOOGLE_ANALYTICS_MEASUREMENT_ID).toMatch(/G-[A-Z0-9]{10}/);
  });
});
