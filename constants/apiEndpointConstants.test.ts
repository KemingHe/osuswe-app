import * as apiEndpointConstants from '@/constants/apiEndpointConstants';

describe('(backend) api endpoint constants', () => {
  it('matches the latest snapshot', () => {
    expect(apiEndpointConstants).toMatchSnapshot();
  });
});
