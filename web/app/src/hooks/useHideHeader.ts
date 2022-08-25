import { useEffect } from 'react';

import { useIsHeaderHiddenMutations } from '../data/useIsHeaderHiddenMutations';

export const useHideHeader = () => {
  const { showHeader, hideHeader } = useIsHeaderHiddenMutations();

  useEffect(() => {
    hideHeader();

    return () => showHeader();
  }, [showHeader, hideHeader]);
};
