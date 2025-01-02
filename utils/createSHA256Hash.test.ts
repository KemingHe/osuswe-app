import createSHA256Hash from '@/utils/createSHA256Hash';

describe('createSHA256Hash', () => {
  it('creates an expected SHA256 hash string in lowercase', () => {
    const data: string = 'buckeye.1@osu.edu';
    const expectedHash: string =
      '1b6b6723b16820d3ece21fdf24801e68716fae30fa97d7183356fff78c9ef8e4';
    expect(createSHA256Hash(data)).toBe(expectedHash);

    // And is consistent with the same input.
    expect(createSHA256Hash(data)).toBe(expectedHash);
  });
});
