import Link from 'next/link';
import type { JSX } from 'react';
import { SocialIcon } from 'react-social-icons';

import {
  LEGAL_DISCLAIMER_LINK,
  OSUSWE_ORG_EVENTS_LINK,
  OSUSWE_ORG_HOME_LINK,
  OSUSWE_ORG_MEMBERSHIP_LINK,
  PRIVACY_POLICY_LINK,
  TERMS_AND_CONDITIONS_LINK,
} from '@/constants/externalLinkConstants';

export default function SSRFooter(): JSX.Element {
  const footerIconStyle: Record<string, string | number> = {
    height: 40,
    width: 40,
  };

  return (
    <footer className="flex-shrink-0 footer bg-base-content text-base-100 leading-tight p-8">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <nav aria-labelledby="osuswe-heading">
        <h6 id="osuswe-heading" className="footer-title">
          OSUSWE
        </h6>
        <Link
          href={OSUSWE_ORG_HOME_LINK}
          className="link link-hover"
          aria-label="Society of Women Engineers at The Ohio State University homepage"
        >
          Home
        </Link>
        <Link
          href={OSUSWE_ORG_EVENTS_LINK}
          className="link link-hover"
          aria-label="Society of Women Engineers at The Ohio State University events"
        >
          Events
        </Link>
        <Link
          href={OSUSWE_ORG_MEMBERSHIP_LINK}
          className="link link-hover link-accent"
          aria-label="Society of Women Engineers at The Ohio State University membership"
        >
          Members
        </Link>
      </nav>
      <nav aria-labelledby="legal-heading">
        <h6 id="legal-heading" className="footer-title">
          Legal
        </h6>
        <Link
          href={LEGAL_DISCLAIMER_LINK}
          className="link link-hover"
          aria-label="Legal disclaimer"
        >
          Disclaimer
        </Link>
        <Link
          href={PRIVACY_POLICY_LINK}
          className="link link-hover"
          aria-label="Privacy policy"
        >
          Privacy Policy
        </Link>
        <Link
          href={TERMS_AND_CONDITIONS_LINK}
          className="link link-hover flex flex-col jusify-center items-start"
          aria-label="Terms and Conditions"
        >
          <span className="sr-only">Terms and Conditions</span>
          <span aria-hidden="true">Terms and</span>
          <span aria-hidden="true">Conditions</span>
        </Link>
      </nav>
      <nav aria-labelledby="social-heading">
        <h6 id="social-heading" className="footer-title">
          Social
        </h6>
        <div className="grid grid-cols-2 gap-4">
          <SocialIcon
            url="mailto:osuswe@gmail.com"
            style={footerIconStyle}
            aria-label="Email OSUSWE"
          />
          <SocialIcon
            url="ohiostateswe.slack.com"
            style={footerIconStyle}
            aria-label="Join OSUSWE on Slack"
          />
          <SocialIcon
            url="https://instagram.com/osuswe"
            style={footerIconStyle}
            aria-label="Follow OSUSWE on Instagram"
          />
          <SocialIcon
            url="https://il.linkedin.com/company/osuswe"
            style={footerIconStyle}
            aria-label="Connect with OSUSWE on LinkedIn"
          />
        </div>
      </nav>
    </footer>
  );
}