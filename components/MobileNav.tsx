'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navbarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  // Initialize the usePathname hook

  const pathname = usePathname();
  return (
    <section className='block md:hidden w-full max-w-[265px]'>
      {/* Hamburger menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src='/icons/hamburger.svg'
            width={32}
            height={32}
            alt='Hamburger menu'
            className='cursor-pointer md:hidden'
          />
        </SheetTrigger>

        {/* Speedy Freight's logo */}
        <SheetContent side='right' className='border-none bg-dark-1'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/images/logo.png'
              alt='Speedy Freight'
              width={70}
              height={70}
            />
          </Link>
          <div className='flex h-[calc(100vh-70px)] relative flex-col overflow-y-auto justify-between'>
            <SheetClose asChild>
              <section className='flex h-full absolute right-0 flex-col gap-5 pt-16 text-white'>
                {navbarLinks.map((link, index) => {
                  const isActive = pathname === link.route;
                  return (
                    <SheetClose asChild key={index}>
                      <Link
                        href={link.route}
                        key={index}
                        className={cn(
                          'flex gap-4 rounded items-center justify-end p-4 text-right w-full max-w-60 text-white',
                          {
                            'bg-blue-1': isActive,
                          }
                        )}
                      >
                        <p className='text-md font-semibold'>{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
