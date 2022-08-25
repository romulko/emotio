import { LoadingIndicator } from '../../../../../../components/loadingIndicator';
import { NoEntryMessage } from '../../../../../../components/noEntryMessage';
import { DialogueType } from '../../../../../dialogues/data/enums';
import { useDialogues } from '../../../../../dialogues/data/useDialogues';
import { AbcRenderer } from './components/abcRenderer';
import { Container } from './Styles';

export const AbcList = () => {
  const { dialogues, loading } = useDialogues([DialogueType.ABC]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (!dialogues.length) {
    return <NoEntryMessage />;
  }

  return (
    <Container>
      {dialogues.map(value => (
        <AbcRenderer key={value._id} dialogue={value} />
      ))}
    </Container>
  );
};
