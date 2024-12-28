import Link from 'next/link';
import type { ComponentType, JSX } from 'react';

// biome-ignore format: added alignment for clarity.
export interface BottomNavItemProps {
  href     : string;
  NavIcon  : ComponentType<{ className: string }>;
  label    : string;
  ariaLabel: string;
  isActive : boolean;
}

export function BottomNavItem({
  href,
  NavIcon,
  label,
  ariaLabel,
  isActive,
}: BottomNavItemProps): JSX.Element {
  const getNavItemStyle = (): string =>
    isActive
      ? 'active border-t-4 text-accent font-semibold bg-gradient-to-b from-secondary via-base-100 to-base-100'
      : 'text-primary border-t-2 border-secondary';

  return (
    <Link href={href} className={`${getNavItemStyle()}`} aria-label={ariaLabel}>
      <NavIcon className={isActive ? 'size-6' : 'size-5'} />
      <span className="btm-nav-label">{label}</span>
    </Link>
  );
}
