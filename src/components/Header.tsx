import React from 'react';
import Link from 'next/link';
import { Nav } from './Nav';
import Image from 'next/image';
import { Button } from '@radix-ui/themes';
import MobileNav  from './MobileNav';



const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-primary'>  
      <div className='w-full px-4 md:px-10 flex justify-between items-center'>
        <Link className='flex' href='/'>
          <Image src="/altoc.png" alt='altocloud logo' width={50} height={50}/>
          <h1 className="text-4xl font-semibold">
            altoCloud<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Navigation */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
        </div>
        <div className='hidden xl:flex items-center gap-8'><Button className='bg-accent border text-white bg-primary py-2 px-4 rounded-full'>Contact Us</Button></div>
        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav /> 
        </div>
      </div>

    </header>
  )
}

export default Header