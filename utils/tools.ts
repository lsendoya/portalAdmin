import {Size} from '@/utils/types/product';

export function maskEmail(email: string): string {
  const regex = /^([^@]+)@([^@.]+)(\.[^.]+)?$/;
  const matches = email.match(regex);
  if (!matches) {
    return email;
  }

  const [, username, domainName, domainExtension] = matches;
  const obscuredUsername =
    username.substring(0, 2) + '*'.repeat(username.length - 5);
  const obscuredDomainName =
    domainName.substring(0, 2) + '*'.repeat(domainName.length - 2);
  return `${obscuredUsername}@${obscuredDomainName}${domainExtension || ''}`;
}

export const transformProductSizeToStrings = (size: Size) => {
  return Object.fromEntries(
    Object.entries(size).map(([key, value]) => [key, String(value)])
  );
};
