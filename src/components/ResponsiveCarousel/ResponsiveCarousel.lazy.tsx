import React, { lazy, Suspense } from 'react';

const LazyResponsiveCarousel = lazy(() => import('./ResponsiveCarousel'));

const ResponsiveCarousel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyResponsiveCarousel {...props} />
  </Suspense>
);

export default ResponsiveCarousel;
