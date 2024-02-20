'use client';
import Link from 'next/link';

interface Props {
  title: string;
  href: string;
  description?: string;
}
const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Productos',
    href: '/dashboard',
    description: 'product section',
  },
  {
    title: 'Inventario',
    href: '/dashboard/inventory',
    description: 'inventory section',
  },
];

export function Navigation() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex  md:flex-row md:space-x-4">
        {components.map(({ href, title }, index) => (
          <MenuItem key={index} title={title} href={href} />
        ))}
      </ul>
    </nav>
  );
}

const MenuItem = ({ href, title }: Props) => {
  return (
    <li className="text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors duration-150">
      <Link
        href={href}
        className="block px-4 py-2 text-base font-medium leading-5 text-center text-neutral-900 dark:text-white hover:text-zinc-800"
      >
        {title}
      </Link>
    </li>
  );
};
