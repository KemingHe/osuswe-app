import * as routeConstants from '@/constants/routeConstants';

describe('(frontend) route constants', () => {
  it('matches the latest snapshot', () => {
    expect(routeConstants).toMatchSnapshot();
  });
});
