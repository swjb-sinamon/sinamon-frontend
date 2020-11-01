import React from 'react';
import Card from '../../components/Card';
import CardTitle from '../../atomics/Typography/CardTitle';

const NoticeCard: React.FC = () => {
  return (
    <Card columnStart={1} columnEnd={4} rowStart={3} rowEnd={4}>
      <CardTitle>
        <span role="img" aria-label="notice">
          📢
        </span>
        알려드려요!
      </CardTitle>
      <p>[공지사항]</p>
    </Card>
  );
};

export default NoticeCard;
