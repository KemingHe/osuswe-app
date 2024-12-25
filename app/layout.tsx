import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { JSX, ReactNode } from 'react';

import GOOGLE_ANALYTICS_MEASUREMENT_ID from '@/lib/firebase/googleAnalyticsMeasurementId';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'OSUSWE App',
  description:
    'Free open-source organization management app for the Society of Women Engineers at Ohio State University.',
  generator: 'Next.js',
  applicationName: 'OSUSWE App',
  keywords: [
    'OSUSWE',
    'Ohio State',
    'Society of Women Engineers',
    'Student Organaization',
  ],
  authors: [{ name: 'Keming He', url: 'https://linkedin.com/in/keminghe' }],
  creator: 'Keming He',
  publisher: 'Keming He',
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    title: 'OSUSWE',
  },
};

export const viewport: Viewport =
  // biome-ignore format: added alignment for clarity.
  {
    themeColor : '#ffffff',
    colorScheme: 'only light',
    viewportFit: 'cover',        // Required for iOS devices.
};

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-dvh flex flex-col justify-center items-center circuit-board-pattern`}
      >
        <div className="max-w-sm max-h-[750px] w-full h-full bg-base-100 shadow-lg">
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_MEASUREMENT_ID} />
    </html>
  );
}
