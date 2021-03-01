import React from 'react';
import Link from './Link';

export default {
  title: 'components/atoms/Link',
  component: Link,
};

export const Github = () => <Link href="/">Github →</Link>;
export const View = () => (
  <Link href="/" secondary>
    VIEW
  </Link>
);
