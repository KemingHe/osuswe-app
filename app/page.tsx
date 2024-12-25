'use server';

import type { JSX } from 'react';

export default async function Homepage(): Promise<JSX.Element> {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="btn btn-primary">Primary</div>
      <div className="btn btn-secondary">Secondary</div>
      <div className="btn btn-accent">Accent</div>
      <div className="btn btn-neutral">Neutral</div>
      <div className="btn btn-ghost bg-base-100">Base-100</div>
      <div className="btn btn-ghost bg-base-200">Base-200</div>
    </div>
  );
}
