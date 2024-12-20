import React, { lazy, Suspense } from 'react';

const LazyBackToTop = lazy(() => import('./BackToTop'));

const BackToTop = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBackToTop {...props} />
  </Suspense>
);

export default BackToTop;
