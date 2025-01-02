import crypto from 'node:crypto';

export default function createSHA256Hash(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex').toLowerCase();
}
