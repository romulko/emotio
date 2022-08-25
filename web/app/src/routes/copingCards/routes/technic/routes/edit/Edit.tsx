import { Button, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { DeleteButton } from '../../../../../../components/buttons/deleteButton';
import { LoadingIndicator } from '../../../../../../components/loadingIndicator';
import { ModalContainer } from '../../../../../../components/modalContainer';
import { useHideHeader } from '../../../../../../hooks/useHideHeader';
import { useTechnic } from '../../../../data/useTechnic';
import { useTechnicMutations } from '../../../../data/useTechnicMutations';
import { ActionContainer } from './Styles';

const { Item } = Form;

export const Edit = () => {
  const { t } = useTranslation();
  const { copingCardTechnic, loaded } = useTechnic();

  const {
    createTechnic,
    createTechnicLoading,
    updateTechnic,
    updateTechnicLoading,
    deleteTechnic,
    deleteTechnicLading,
  } = useTechnicMutations();
  const history = useHistory();

  useHideHeader();

  if (!loaded) {
    return (
      <ModalContainer>
        <LoadingIndicator />
      </ModalContainer>
    );
  }

  const formOnFinishHandler = (values: any) => {
    (copingCardTechnic ? updateTechnic({ ...values }) : createTechnic({ ...values })).then(() => history.goBack());
  };

  const deleteClickHandler = () => deleteTechnic().then(() => history.goBack());

  return (
    <ModalContainer title={t('routes.copingCards.routes.technic.routes.edit.title')}>
      <Form initialValues={copingCardTechnic} onFinish={formOnFinishHandler} layout="vertical">
        <Item label={t('routes.copingCards.routes.technic.routes.edit.name')} name="technicName">
          <Input.TextArea maxLength={100} autoSize={{ minRows: 1, maxRows: 2 }} />
        </Item>

        <Item label={t('routes.copingCards.routes.technic.routes.edit.description')} name="description">
          <Input.TextArea maxLength={10000} autoSize={{ minRows: 5, maxRows: 10 }} />
        </Item>

        <Item label={t('routes.copingCards.routes.technic.routes.edit.howToDescription')} name="howToDescription">
          <Input.TextArea maxLength={10000} autoSize={{ minRows: 5, maxRows: 10 }} />
        </Item>

        <Item>
          <ActionContainer>
            <DeleteButton onClick={deleteClickHandler} disabled={!copingCardTechnic || deleteTechnicLading} />

            <Button
              type="primary"
              shape="round"
              htmlType="submit"
              disabled={createTechnicLoading || updateTechnicLoading}
            >
              {copingCardTechnic ? 'Оновити' : 'Додати'}
            </Button>
          </ActionContainer>
        </Item>
      </Form>
    </ModalContainer>
  );
};
