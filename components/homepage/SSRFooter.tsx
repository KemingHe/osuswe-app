import Link from 'next/link';
import type { JSX } from 'react';
import { SocialIcon } from 'react-social-icons';

import {
  LEGAL_DISCLAIMER_LINK,
  OSUSWE_ORG_EMAIL_LINK,
  OSUSWE_ORG_EVENTS_LINK,
  OSUSWE_ORG_HOME_LINK,
  OSUSWE_ORG_INSTAGRAM_LINK,
  OSUSWE_ORG_LINKEDIN_LINK,
  OSUSWE_ORG_MEMBERSHIP_LINK,
  OSUSWE_ORG_SLACK_LINK,
  PRIVACY_POLICY_LINK,
  TERMS_AND_CONDITIONS_LINK,
} from '@/constants/externalLinkConstants';

export default function SSRFooter(): JSX.Element {
  const footerIconStyle: Record<string, string | number> = {
    height: 40,
    width: 40,
  };

  return (
    <footer className="flex-shrink-0 footer bg-base-200 leading-tight p-8">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <nav aria-labelledby="osuswe-heading">
        <h6 id="osuswe-heading" className="footer-title">
          OSUSWE
        </h6>
        <Link
          href={OSUSWE_ORG_HOME_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
          aria-label="Society of Women Engineers at The Ohio State University homepage"
        >
          Home
        </Link>
        <Link
          href={OSUSWE_ORG_EVENTS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
          aria-label="Society of Women Engineers at The Ohio State University events"
        >
          Events
        </Link>
        <Link
          href={OSUSWE_ORG_MEMBERSHIP_LINK}
          target="_blank"
          rel="noopener noreferrer"
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
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
          aria-label="Legal disclaimer"
        >
          Disclaimer
        </Link>
        <Link
          href={PRIVACY_POLICY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
          aria-label="Privacy policy"
        >
          Privacy Policy
        </Link>
        <Link
          href={TERMS_AND_CONDITIONS_LINK}
          target="_blank"
          rel="noopener noreferrer"
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
            url={OSUSWE_ORG_EMAIL_LINK}
            style={footerIconStyle}
            aria-label="Email OSUSWE"
          />
          <SocialIcon
            url={OSUSWE_ORG_SLACK_LINK}
            style={footerIconStyle}
            aria-label="Join OSUSWE on Slack"
          />
          <SocialIcon
            url={OSUSWE_ORG_INSTAGRAM_LINK}
            style={footerIconStyle}
            aria-label="Follow OSUSWE on Instagram"
          />
          <SocialIcon
            url={OSUSWE_ORG_LINKEDIN_LINK}
            style={footerIconStyle}
            aria-label="Connect with OSUSWE on LinkedIn"
          />
        </div>
      </nav>
    </footer>
  );
}
