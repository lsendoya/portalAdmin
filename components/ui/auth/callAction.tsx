import Link from 'next/link';
import React from 'react';

interface AccountLinkProps {
  Head: string;
  Path: string;
  Text: string;
}

export const AccountLink: React.FC<AccountLinkProps> = ({
  Path,
  Text,
  Head,
}) => {
  return (
    <div>
      {Head}
      <Link className="px-2 underline font-semibold" href={Path}>
        {Text}
      </Link>
    </div>
  );
};
