import * as loadingMessageConstants from '@/constants/loadingMessageConstants';

describe('loadingMessageConstants', () => {
  it('matches latest snapshot', () => {
    expect(loadingMessageConstants).toMatchSnapshot();
  });
});
