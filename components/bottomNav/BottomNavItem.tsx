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
  return (
    <Link
      href={href}
      className={
        isActive
          ? 'active border-t-4 text-accent font-semibold'
          : 'text-primary'
      }
      aria-label={ariaLabel}
    >
      <NavIcon className={isActive ? 'size-6' : 'size-5'} />
      <span className="btm-nav-label">{label}</span>
    </Link>
  );
}
