'use client';

import React from 'react';
import NextLink from 'next/link';

export function Link({ to, href, children, className, onClick, ...props }: any) {
  const destination = href || to || '/';
  return (
    <NextLink href={destination} className={className} onClick={onClick} {...props}>
      {children}
    </NextLink>
  );
}

export default Link;
