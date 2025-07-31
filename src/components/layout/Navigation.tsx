import Link from 'next/link';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#work' },
  { name: 'Contacts', href: '#contacts' },
];

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light-gray">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 sm:px-10 xl:px-[90px]">
        <Link href="/" className="text-lg font-medium tracking-tight text-dark-gray">
          Hanna Sauquillo
        </Link>
        <nav>
          <ul className="flex items-center space-x-1 md:space-x-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block rounded-full px-3 py-2 text-sm font-medium text-dark-gray transition-colors hover:bg-zinc-200 md:px-4"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
