import React from 'react';
import Link from 'next/link';
import { Nav } from './Nav';
import Image from 'next/image';
import { Button } from '@radix-ui/themes';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>  
      <div className='container mx-auto flex justify-between items-center'>
        <Link className='flex' href='/'>
          <Image src="/altoc.png" alt='altocloud logo' width={50} height={50}/>
          <h1 className="text-4xl font-semibold">
            altoCloud<span className="text-accent">.</span>
          </h1>
        </Link>
        <Nav/>
        <Button className='bg-accent border text-white py-2 px-4 rounded-full'>Contact Us</Button>
      </div>
    </header>
  )
}

export default Header