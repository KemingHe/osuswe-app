import Link from 'next/link';
import type { JSX } from 'react';

import {
  PRIVACY_POLICY_LINK,
  TERMS_AND_CONDITIONS_LINK,
} from '@/constants/externalLinkConstants';

export default function LegalNotice(): JSX.Element {
  return (
    <p className="text-center leading-snug text-sm">
      By signing in, you acknowledge that you have read and agree to our&nbsp;
      <Link
        className="link"
        href={PRIVACY_POLICY_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </Link>
      &nbsp;and&nbsp;
      <Link
        className="link"
        href={TERMS_AND_CONDITIONS_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms & Conditions
      </Link>
      .
    </p>
  );
}
