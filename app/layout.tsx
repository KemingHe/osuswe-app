import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import type { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';
import type { JSX, ReactNode } from 'react';

import GOOGLE_ANALYTICS_MEASUREMENT_ID from '@/lib/firebase/googleAnalyticsMeasurementId';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'OSUSWE App',
  description:
    'The Ohio State-exclusive SWE experience created by students and allies, for students, with 💖.',
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

export const viewport: Viewport = {
  colorScheme: 'normal', // Use the user's system default color scheme.
  viewportFit: 'cover', // Required for iOS devices.
};

const inter: NextFont = Inter({
  subsets: ['latin'],
  display: 'swap', // Allow for multiple fonts to be used for the app.
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-dvh flex flex-col justify-center items-center circuit-board-pattern`}
      >
        <div className="max-w-[450px] max-h-[950px] w-full h-full relative overflow-x-auto bg-base-100 shadow-lg">
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_MEASUREMENT_ID} />
    </html>
  );
}
