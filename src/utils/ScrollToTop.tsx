import React, { useEffect, FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';

const ScrollToTop: FunctionComponent = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollToTop;
