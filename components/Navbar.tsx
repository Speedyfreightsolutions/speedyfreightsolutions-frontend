import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className='flex-between fixed h-[70px] z-40 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href='/' className='flex items-center'>
        <Image
          src='/images/logo.png'
          alt='Speedy freight'
          className='max-sm:size-10'
          width={80}
          height={80}
        />
      </Link>

      <div className='flex-between gap-5'>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
