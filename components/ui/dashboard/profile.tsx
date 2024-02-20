'use client';

import * as React from 'react';
import {Button} from '@/components/ui/button';

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from '@/components/ui/dropdown-menu';
import useLogout from '@/app/hooks/useLogout';
import {useAuthStore} from '@/app/store/auth';

export function DropdownProfile() {
  const user = useAuthStore((state) => state.user);
  const { handleLogout } = useLogout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="text-white bg-transparent hover:bg-neutral-100 hover:text-gray-900 "
        >
          {getName(user?.name || '')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20  shadow-lg rounded-lg py-1 ">
        <DropdownMenuItem
          className=" py-2 text-gray-700 cursor-pointer text-center font-semibold   "
          onClick={handleLogout}
        >
          log off
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const getName = (fullName: string) => fullName.split(' ')[0];
