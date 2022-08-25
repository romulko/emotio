import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

interface Param {
  name: string;
  value: string;
}

export const useDialogueUrlParams = () => {
  const { dialogueId } = useParams<{ dialogueId: string }>();

  const injectParams = useCallback(
    (url: string, params?: Param[]) => {
      let result = url;

      if (dialogueId) {
        result = result.replace(':dialogueId', dialogueId);
      }

      if (params) {
        result = params
          .filter(({ name }) => result.includes(name))
          .reduce((prevValue, { value, name }) => prevValue.replace(name, value), result);
      }

      return result;
    },
    [dialogueId],
  );

  return { dialogueId, injectParams };
};
