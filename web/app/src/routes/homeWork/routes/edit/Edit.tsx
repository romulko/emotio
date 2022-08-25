import { Button, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { DeleteButton } from '../../../../components/buttons/deleteButton';
import { LoadingIndicator } from '../../../../components/loadingIndicator';
import { ModalContainer } from '../../../../components/modalContainer';
import { useHideHeader } from '../../../../hooks/useHideHeader';
import { ActionContainer } from '../../../copingCards/routes/edit/Styles';
import { HOME_WORKS } from '../../../routes.const';
import { useHomeWork } from '../../data/useHomeWork';
import { useHomeWorkMutations } from '../../data/useHomeWorkMutations';

const { Item } = Form;

export const Edit = () => {
  const { t } = useTranslation();
  const { homeWork, loaded, homeWorkId } = useHomeWork();

  const { homeWorkCreate, homeWorkCreateLoading, homeWorkUpdate, homeWorkDelete, homeWorkDeleteLoading } =
    useHomeWorkMutations();
  const history = useHistory();

  useHideHeader();

  if (!loaded) {
    return (
      <ModalContainer>
        <LoadingIndicator />
      </ModalContainer>
    );
  }

  const deleteClickHandler = () => homeWorkDelete(homeWorkId).then(() => history.push(HOME_WORKS));

  const formOnFinishHandler = (values: any) => {
    (homeWorkId ? homeWorkUpdate({ ...values, _id: homeWorkId }) : homeWorkCreate({ ...values })).then(() =>
      history.goBack(),
    );
  };

  return (
    <ModalContainer title={t('routes.homeWork.routes.edit.title')}>
      <Form initialValues={homeWork || {}} onFinish={formOnFinishHandler} layout="vertical">
        <Item label={t('routes.homeWork.routes.edit.whatToDo')} name="whatToDo">
          <Input.TextArea maxLength={10000} autoSize={{ minRows: 3, maxRows: 10 }} />
        </Item>

        <Item label={t('routes.homeWork.routes.edit.whatWeGet')} name="whatWeGet">
          <Input.TextArea maxLength={10000} autoSize={{ minRows: 3, maxRows: 10 }} />
        </Item>

        <Item>
          <ActionContainer>
            <DeleteButton onClick={deleteClickHandler} disabled={!homeWorkId || homeWorkDeleteLoading} />

            <Button disabled={homeWorkCreateLoading} type="primary" shape="round" htmlType="submit">
              {homeWorkId ? t('buttons.update') : t('buttons.add')}
            </Button>
          </ActionContainer>
        </Item>
      </Form>
    </ModalContainer>
  );
};
