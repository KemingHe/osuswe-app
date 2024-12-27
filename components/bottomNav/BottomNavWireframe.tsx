import {
  HandRaisedIcon,
  HomeIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import type { JSX } from 'react';

import {
  BottomNavItem,
  type BottomNavItemProps,
} from '@/components/bottomNav/BottomNavItem';
import {
  USER_ATTENDANCE_ROUTE,
  USER_DASHBOARD_ROUTE,
  USER_PROFILE_ROUTE,
} from '@/constants/routeConstants';

export interface BottomNavWireframeProps {
  currentPath: string;
}

export function BottomNavWireframe({
  currentPath,
}: BottomNavWireframeProps): JSX.Element {
  const checkIsAcive = (path: string): boolean => currentPath === path;
  const navItems: BottomNavItemProps[] = [
    {
      href: USER_ATTENDANCE_ROUTE,
      NavIcon: HandRaisedIcon,
      label: 'Attendance',
      ariaLabel: 'Go to user attendance page',
      isActive: checkIsAcive(USER_ATTENDANCE_ROUTE),
    },
    {
      href: USER_DASHBOARD_ROUTE,
      NavIcon: HomeIcon,
      label: 'Dashboard',
      ariaLabel: 'Go to user dashboard page',
      isActive: checkIsAcive(USER_DASHBOARD_ROUTE),
    },
    {
      href: USER_PROFILE_ROUTE,
      NavIcon: UserCircleIcon,
      label: 'Profile',
      ariaLabel: 'Go to user profile page',
      isActive: checkIsAcive(USER_PROFILE_ROUTE),
    },
  ];

  return (
    <div className="btm-nav text-sm border-t relative flex-shrink-0">
      {navItems.map((navItem) => (
        <BottomNavItem key={navItem.label} {...navItem} />
      ))}
    </div>
  );
}
