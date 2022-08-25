import { LoadingIndicator } from '../../../../../../components/loadingIndicator';
import { NoEntryMessage } from '../../../../../../components/noEntryMessage';
import { useCopingCards } from '../../../../data/useCopingCards';
import { CopingCardRenderer } from './components/copingCardRenderer';
import { Container } from './Styles';

export const CopingCardsList = () => {
  const { copingCards, loading } = useCopingCards();

  if (loading) {
    return <LoadingIndicator />;
  }

  if (!copingCards.length) {
    return <NoEntryMessage />;
  }

  return (
    <Container>
      {copingCards.map(value => (
        <CopingCardRenderer key={value._id} copingCard={value} />
      ))}
    </Container>
  );
};
