import { Col } from 'antd';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { CreatedTime } from '../../../../../../../../components/createdTime';
import { Text } from '../../../../../../../../components/text';
import { HOME_WORKS_DETAILS } from '../../../../../../../routes.const';
import { HomeWork } from '../../../../../../data/useHomeWorks';
import { useHomeWorkUrlParams } from '../../../../../../data/useHomeWorkUrlParams';

interface Props {
  homeWork: HomeWork;
}

export const HomeWorkRenderer: FC<Props> = ({ homeWork }) => {
  const history = useHistory();
  const { injectParams } = useHomeWorkUrlParams();

  const textClickHandler = () =>
    history.push(injectParams(HOME_WORKS_DETAILS, [{ name: ':homeWorkId', value: homeWork._id }]));

  return (
    <Col onClick={textClickHandler}>
      <CreatedTime id={homeWork._id} />

      <Text useTruncate onClick={textClickHandler}>
        {homeWork.whatToDo}
      </Text>
    </Col>
  );
};
