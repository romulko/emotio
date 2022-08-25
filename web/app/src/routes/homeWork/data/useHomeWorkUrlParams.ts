import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

interface Param {
  name: string;
  value: string;
}

export const useHomeWorkUrlParams = () => {
  const { homeWorkId } = useParams<{ homeWorkId: string }>();

  const injectParams = useCallback(
    (url: string, params?: Param[]) => {
      let result = url;

      if (homeWorkId) {
        result = result.replace(':homeWorkId', homeWorkId);
      }

      if (params) {
        result = params
          .filter(({ name }) => result.includes(name))
          .reduce((prevValue, { value, name }) => prevValue.replace(name, value), result);
      }

      return result;
    },
    [homeWorkId],
  );

  return { homeWorkId, injectParams };
};
