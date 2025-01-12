import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const sidebarNavs = [
  {
    id: 1,
    title: 'داشبورد',
    icon: <RectangleGroupIcon className="w-5 h-5" />,
    href: '/profile',
  },

  {
    id: 2,
    title: 'پست ها',
    icon: <DocumentTextIcon className="w-5 h-5" />,
    href: '/profile/posts',
  },
  {
    id: 3,
    title: 'نظرات',
    icon: <ChatBubbleBottomCenterIcon className="w-5 h-5" />,
    href: '/profile/comments',
  },
];

export default function SideBarNavs() {
  const router = useRouter();
  return (
    <ul className="space-y-2">
      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={classNames(
                'flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3 px-4',
                {
                  'bg-primary-100/40 !font-bold text-primary-900':
                    router.pathname === nav.href,
                }
              )}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
