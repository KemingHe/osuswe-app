import type { JSX } from 'react';

import {
  MainDevTimelineItem,
  type MainDevTimelineItemProps,
} from '@/components/homepage/main/MainDevTimelineItem';

export default function MainDevTimeline(): JSX.Element {
  const timelineItems: MainDevTimelineItemProps[] = [
    {
      date: 'Mid Dec. 2024',
      milestone: 'Project Start',
      isReached: true,
      isFirst: true,
    },
    {
      date: 'Late Dec. 2024',
      milestone: 'Authentication',
      isReached: true,
    },
    {
      date: 'Late Dec. 2024',
      milestone: 'Homepage',
      isReached: true,
    },
    {
      date: 'Late Dec. 2024',
      milestone: 'User Profile',
      isReached: false,
    },
    {
      date: 'Early Jan. 2025',
      milestone: 'Attendance',
      isReached: false,
    },
    {
      date: 'Early Jan. 2025',
      milestone: 'Admin Analytics',
      isReached: false,
    },
    {
      date: 'Mid Jan. 2025',
      milestone: 'Event Dashboard',
      isReached: false,
    },
    {
      date: 'Mid Jan. 2025',
      milestone: 'Spring 2025 Launch',
      isReached: false,
      isLast: true,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center overflow-x-auto gap-4 p-6 bg-secondary">
      <h2 className="font-semibold text-2xl text-center pb-1 border-b-2">
        Development Timeline
      </h2>
      <ul className="timeline timeline-vertical text-sm">
        {timelineItems.map((item) => (
          <MainDevTimelineItem key={item.milestone} {...item} />
        ))}
      </ul>
    </div>
  );
}
