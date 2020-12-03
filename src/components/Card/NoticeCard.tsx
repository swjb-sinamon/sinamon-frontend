import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import CardTitle from '../../atomics/Typography/CardTitle';
import { Heading3 } from '../../atomics/Typography/Heading';
import Api from '../../api';

const StyledNotice = styled.div`
  display: flex;
  height: 60%;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const NoticeCard: React.FC = () => {
  const [notice, setNotice] = useState<string>('');

  useEffect(() => {
    Api.get('/notice').then((res) => {
      if (res.data && res.data.success) setNotice(res.data.data);
    });
  }, []);

  return (
    <Card columnStart={1} columnEnd={4} rowStart={3} rowEnd={4}>
      <CardTitle>
        <span role="img" aria-label="notice">
          📢
        </span>
        알려드려요!
      </CardTitle>
      <StyledNotice>
        <Heading3>{notice}</Heading3>
      </StyledNotice>
    </Card>
  );
};

export default NoticeCard;
