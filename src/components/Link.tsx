'use client';

import React from 'react';

export function Link({ to, href, children, className, onClick, ...props }: any) {
  const destination = href || to || '/';
  return (
    <a href={destination} className={className} onClick={onClick} {...props}>
      {children}
    </a>
  );
}

export default Link;
