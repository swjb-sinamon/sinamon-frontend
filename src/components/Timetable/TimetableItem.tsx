import React from 'react';
import styled from 'styled-components';
import { showToast } from 'sinamon-sikhye';
import { ComciganTimetableType } from '../../types/Payload';

const DayText = styled.p<{ active?: boolean }>`
  font-weight: bold;

  color: ${(props) => (props.active ? 'var(--color-button-hover)' : 'black')};
`;

const SubjectText = styled.p<{ active?: boolean }>`
  font-size: 14px;
  white-space: nowrap;

  font-weight: ${(props) => (props.active ? 'bold' : 'none')};

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

interface TimetableItemProps {
  readonly day: string;
  readonly data: ComciganTimetableType[];
  readonly active?: boolean;
}

const TimetableItem: React.FC<TimetableItemProps> = ({ day, data, active }) => {
  const onClick = (url: string | null) => {
    if (!url) {
      showToast('Zoom 링크가 등록되어 있지 않습니다.', 'danger');
      return;
    }

    window.open(url);
  };

  return (
    <div>
      <DayText active={active}>{day}</DayText>
      {data &&
        data.map((value, index) => (
          <SubjectText
            // eslint-disable-next-line react/no-array-index-key
            key={`${value.weekday}${index}${value.code}`}
            onClick={() => onClick(value.url)}
            active={active}
          >
            {value.subject}
          </SubjectText>
        ))}
    </div>
  );
};

export default TimetableItem;
