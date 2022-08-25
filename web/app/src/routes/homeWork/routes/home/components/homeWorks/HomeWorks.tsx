import { LoadingIndicator } from '../../../../../../components/loadingIndicator';
import { NoEntryMessage } from '../../../../../../components/noEntryMessage';
import { useHomeWorks } from '../../../../data/useHomeWorks';
import { HomeWorkRenderer } from './components/homeWorkRenderer';
import { Container } from './Styles';

export const HomeWorks = () => {
  const { homeWorks, loading } = useHomeWorks();

  if (loading) {
    return (
      <Container>
        <LoadingIndicator />
      </Container>
    );
  }

  if (!homeWorks.length) {
    return (
      <Container>
        <NoEntryMessage />
      </Container>
    );
  }

  return (
    <Container>
      {homeWorks.map(value => (
        <HomeWorkRenderer key={value._id} homeWork={value} />
      ))}
    </Container>
  );
};
