import { GA4React } from 'ga-4-react';
import { GA4ReactResolveInterface } from 'ga-4-react/src/models/gtagModels';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { GOOGLE_ANALYTIC_ID } from '../config';
import { IS_PRODUCTION } from '../utils/app.utils';

export const useTracking = () => {
  const { listen } = useHistory();
  const ga4Ref = useRef<GA4ReactResolveInterface | undefined>();

  useEffect(() => {
    if (IS_PRODUCTION && !ga4Ref.current) {
      new GA4React(GOOGLE_ANALYTIC_ID).initialize().then(result => (ga4Ref.current = result));
    }

    return IS_PRODUCTION
      ? listen(location => {
          ga4Ref.current?.pageview(location.pathname);
          ga4Ref.current?.gtag('event', 'pageview', location.pathname);
        })
      : undefined;
  }, [listen]);
};
