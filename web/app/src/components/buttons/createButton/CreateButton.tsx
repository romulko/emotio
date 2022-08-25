import { Button } from 'antd';
import { FC } from 'react';

interface Props {
  onClick: () => void;
  text?: string;
}

export const CreateButton: FC<Props> = ({ onClick, text = '+' }) => (
  <Button type="dashed" shape="circle" onClick={onClick}>
    {text}
  </Button>
);
