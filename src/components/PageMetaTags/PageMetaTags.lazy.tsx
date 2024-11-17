import React, { lazy, Suspense } from 'react';

const LazyPageMetaTags = lazy(() => import('./PageMetaTags'));

const PageMetaTags = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPageMetaTags {...props} />
  </Suspense>
);

export default PageMetaTags;
