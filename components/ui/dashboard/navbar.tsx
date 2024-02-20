import React from 'react';
import {DropdownProfile} from '@/components/ui/dashboard/profile';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
      <Link
        className="text-2xl font-bold hover:text-gray-300 transition duration-200 ease-in-out"
        href={'/'}
      >
        DALAS
      </Link>
      <div className="relative">
        <DropdownProfile />
      </div>
    </nav>
  );
}

export default Navbar;
