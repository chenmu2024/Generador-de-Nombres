'use client';

import React from 'react';
import NextLink from 'next/link';

export function Link({ to, href, children, className, onClick, prefetch = false, ...props }: any) {
  const destination = href || to || '/';
  const isInternal =
    typeof destination === 'string' &&
    destination.startsWith('/') &&
    !destination.startsWith('//');

  if (!isInternal) {
    return (
      <a href={destination} className={className} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={destination}
      prefetch={prefetch}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </NextLink>
  );
}

export default Link;
