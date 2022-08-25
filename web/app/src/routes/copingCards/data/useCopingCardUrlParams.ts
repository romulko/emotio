import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

type Param = {
  name: string;
  value: string;
};

export const useCopingCardUrlParams = () => {
  const { copingCardId, technicId, doingId } =
    useParams<{ copingCardId: string; technicId: string; doingId: string }>();

  const injectParams = useCallback(
    (url: string, params?: Param[]) => {
      let result = url;

      if (copingCardId) {
        result = result.replace(':copingCardId', copingCardId);
      }

      if (technicId) {
        result = result.replace(':technicId', technicId);
      }

      if (doingId) {
        result = result.replace(':doingId', doingId);
      }

      if (params) {
        result = params
          .filter(({ name }) => result.includes(name))
          .reduce((prevValue, { value, name }) => prevValue.replace(name, value), result);
      }

      return result;
    },
    [copingCardId, technicId, doingId],
  );

  return { copingCardId, technicId, doingId, injectParams };
};
