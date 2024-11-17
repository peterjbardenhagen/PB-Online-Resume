import React, { lazy, Suspense } from 'react';

const LazyDocumentMetaTags = lazy(() => import('./DocumentMetaTags'));

const DocumentMetaTags = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDocumentMetaTags {...props} />
  </Suspense>
);

export default DocumentMetaTags;
