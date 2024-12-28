import { CheckCircleIcon as CheckOutline } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckSolid } from '@heroicons/react/24/solid';
import type { JSX } from 'react';

import styles from '@/components/homepage/main/MainDevTimelineItem.module.css';

// biome-ignore format: added alignment for clarity.
export interface MainDevTimelineItemProps {
  date      : string;
  milestone : string;
  isReached : boolean;
  isFirst  ?: boolean;
  isLast   ?: boolean;
}

export function MainDevTimelineItem({
  date,
  milestone,
  isReached,
  isFirst = false,
  isLast = false,
}: MainDevTimelineItemProps): JSX.Element {
  const getTextStyle = (): string =>
    isReached ? 'text-accent' : 'text-primary';
  const getBgStyle = (): string => (isReached ? 'bg-accent' : 'bg-primary');

  return (
    <li className={styles['timeline-item']}>
      {isFirst ? null : <hr className={getBgStyle()} />}
      <div className={`timeline-start ${getTextStyle()}`}>{milestone}</div>
      <div className="timeline-middle">
        {isReached ? (
          <CheckSolid className={`${getTextStyle()} size-6`} />
        ) : (
          <CheckOutline className={`${getTextStyle()} size-6`} />
        )}
      </div>
      <div className={`timeline-end ${getTextStyle()}`}>{date}</div>
      {isLast ? null : <hr className={getBgStyle()} />}
    </li>
  );
}
