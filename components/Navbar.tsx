'use client';
import Image from 'next/image';

import Link from 'next/link';
import MobileNav from './MobileNav';
import { navbarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className='flex justify-between items-center fixed h-[70px] z-40 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href='/' className='flex items-center'>
        <Image
          src='/images/logo.png'
          alt='Speedy freight'
          //     className='max-sm:size-10'
          width={80}
          height={80}
        />
      </Link>

      <ul className='hidden gap-1 text-white md:flex'>
        {navbarLinks.map((link, index) => {
          const isActive = pathname === link.route;
          return (
            <li className='flex'>
              <Link
                href={link.route}
                key={index}
                className={cn(
                  'flex rounded items-center px-6 py-2  w-max text-white',
                  {
                    'bg-blue-1': isActive,
                  }
                )}
              >
                <p className='text-md font-semibold'>{link.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='flex-between gap-5'>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
