import type { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';
import type { JSX } from 'react';

const didotItalic: NextFont = localFont({
  // NOTE: Not a ts module, must use relative path.
  src: './fonts/Didot-Italic.ttf',
  display: 'swap',
});

export default function MainTitle(): JSX.Element {
  return (
    <div className="w-full flex flex-col bg-secondary p-4 gap-1">
      <h1
        className={`${didotItalic.className} flex flex-col justify-center items-start text-4xl gap-1`}
      >
        <span className="sr-only">Society of Women Engineers</span>
        <span aria-hidden="true">Society of</span>
        <span aria-hidden="true">Women Engineers</span>
      </h1>
      <p className="text-right">at The Ohio State University</p>
    </div>
  );
}
