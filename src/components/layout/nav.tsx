'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navList = [
  { path: '/post', label: 'Posts' },
  { path: '/user', label: 'Users' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <ul className="nav-list">
        {navList.map((nav) => (
          <li
            className={`nav-list--item ${nav.path === pathname ? 'nav-list-item_active' : ''}`}
            key={nav.path}
          >
            <Link href={nav.path}>{nav.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
