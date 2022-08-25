import { LoadingIndicator } from '../../../../../../components/loadingIndicator';
import { NoEntryMessage } from '../../../../../../components/noEntryMessage';
import { DialogueType } from '../../../../data/enums';
import { useDialogues } from '../../../../data/useDialogues';
import { DialogueRenderer } from './components/dialogueRenderer';
import { Container } from './Styles';

export const Dialogues = () => {
  const { dialogues, loading } = useDialogues([
    DialogueType.COGNITIVE_RESTRUCTURING,
    DialogueType.DEEP_CONVICTION,
    DialogueType.PROS_CONS,
    DialogueType.WANT,
  ]);

  if (loading) {
    return (
      <Container>
        <LoadingIndicator />
      </Container>
    );
  }

  if (!dialogues.length) {
    return (
      <Container>
        <NoEntryMessage />
      </Container>
    );
  }

  return (
    <Container>
      {dialogues.map(value => (
        <DialogueRenderer key={value._id} dialogue={value} />
      ))}
    </Container>
  );
};
