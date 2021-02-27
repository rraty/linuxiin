import React, { Suspense, lazy, ReactPropTypes, FunctionComponent } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export default function withLoadable(importFunc: any): any {
  const Component = lazy(importFunc);
  const LazyLoader: FunctionComponent<ReactPropTypes> = props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
  return LazyLoader;
}
