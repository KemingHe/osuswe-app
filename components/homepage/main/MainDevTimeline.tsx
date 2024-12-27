import { CheckCircleIcon as CheckOutline } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckSolid } from '@heroicons/react/24/solid';
import type { JSX } from 'react';

export default function MainDevTimeline(): JSX.Element {
  return (
    <div className="bg-primary flex flex-col items-center justify-center overflow-x-auto gap-4 p-6">
      <h2 className="text-primary-content font-semibold text-2xl text-center pb-1 border-b-2 border-primary-content">
        Development Timeline
      </h2>
      <ul className="timeline timeline-vertical">
        <li className="timeline-item">
          <div className="timeline-start text-accent">Project Start</div>
          <div className="timeline-middle">
            <CheckSolid className="text-accent size-6" />
          </div>
          <hr className="bg-accent" />
        </li>
        <li className="timeline-item">
          <hr className="bg-accent" />
          <div className="timeline-middle">
            <CheckSolid className="text-accent size-6" />
          </div>
          <div className="timeline-end text-accent">Authentication</div>
          <hr className="bg-accent" />
        </li>
        <li className="timeline-item">
          <hr className="bg-accent" />
          <div className="timeline-start text-accent">Homepage</div>
          <div className="timeline-middle">
            <CheckSolid className="text-accent size-6" />
          </div>
          <hr className="bg-accent" />
        </li>
        <li className="timeline-item">
          <hr className="bg-base-300" />
          <div className="timeline-middle">
            <CheckOutline className="text-base-300 size-6" />
          </div>
          <div className="timeline-end text-base-300">User Profile</div>
          <hr className="bg-base-300" />
        </li>
        <li className="timeline-item">
          <hr className="bg-base-300" />
          <div className="timeline-start text-base-300">Attendance</div>
          <div className="timeline-middle">
            <CheckOutline className="text-base-300 size-6" />
          </div>
          <hr className="bg-base-300" />
        </li>
        <li className="timeline-item">
          <hr className="bg-base-300" />
          <div className="timeline-middle">
            <CheckOutline className="text-base-300 size-6" />
          </div>
          <div className="timeline-end text-base-300">Event Analytics</div>
          <hr className="bg-base-300" />
        </li>
        <li className="timeline-item">
          <hr className="bg-base-300" />
          <div className="timeline-middle">
            <CheckOutline className="text-base-300 size-6" />
          </div>
          <div className="timeline-start text-base-300">Spring 2025 Launch</div>
        </li>
      </ul>
    </div>
  );
}
