import * as zodMessageConstants from '@/constants/zodMessageConstants';

describe('zodMessageConstants', () => {
  it('matches the latest snapshot', () => {
    expect(zodMessageConstants).toMatchSnapshot();
  });
});
