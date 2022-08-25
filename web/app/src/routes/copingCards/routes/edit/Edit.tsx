import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { DeleteButton } from '../../../../components/buttons/deleteButton';
import { EmotionChooser } from '../../../../components/emotionChooser';
import { LoadingIndicator } from '../../../../components/loadingIndicator';
import { ModalContainer } from '../../../../components/modalContainer';
import { useHideHeader } from '../../../../hooks/useHideHeader';
import { COPING_CARDS } from '../../../routes.const';
import { useCopingCard } from '../../data/useCopingCard';
import { useCopingCardMutations } from '../../data/useCopingCardMutations';
import { ActionContainer } from './Styles';

const { Item } = Form;

export const Edit = () => {
  const { t } = useTranslation();
  const { copingCard, loaded, copingCardId } = useCopingCard();

  const { copingCardCreate, copingCardCreateLoading, copingCardUpdate, copingCardDelete, copingCardDeleteLoading } =
    useCopingCardMutations();
  const history = useHistory();
  const [selectedEmotionId, setSelectedEmotionId] = useState('');

  useHideHeader();

  useEffect(() => {
    if (!copingCard?.emotionId) {
      return;
    }

    setSelectedEmotionId(copingCard.emotionId);
  }, [copingCard]);

  if (!loaded) {
    return (
      <ModalContainer>
        <LoadingIndicator />
      </ModalContainer>
    );
  }

  const deleteClickHandler = () => copingCardDelete(copingCardId).then(() => history.push(COPING_CARDS));

  const formOnFinishHandler = (values: any) => {
    if (!selectedEmotionId) {
      return;
    }

    (copingCardId
      ? copingCardUpdate({ ...values, _id: copingCardId, emotionId: selectedEmotionId })
      : copingCardCreate({ ...values, emotionId: selectedEmotionId })
    ).then(() => history.goBack());
  };

  return (
    <ModalContainer title={t('routes.copingCards.routes.edit.title')}>
      <Form initialValues={copingCard} onFinish={formOnFinishHandler} layout="vertical">
        <Item label={t('routes.copingCards.routes.edit.emotion')} required valuePropName="selectedValue">
          <EmotionChooser selectedValue={selectedEmotionId} onChange={value => setSelectedEmotionId(value as string)} />
        </Item>

        <Item label={t('routes.copingCards.routes.edit.mind')} name="mind">
          <Input.TextArea maxLength={10000} autoSize={{ minRows: 3, maxRows: 10 }} />
        </Item>

        <Item>
          <ActionContainer>
            <DeleteButton onClick={deleteClickHandler} disabled={!copingCardId || copingCardDeleteLoading} />

            <Button disabled={copingCardCreateLoading} type="primary" shape="round" htmlType="submit">
              {copingCardId ? t('buttons.update') : t('buttons.add')}
            </Button>
          </ActionContainer>
        </Item>
      </Form>
    </ModalContainer>
  );
};
