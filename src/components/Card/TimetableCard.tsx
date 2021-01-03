import React from 'react';
import styled from 'styled-components';
import { Card, CardTitle, SCREEN_SIZE } from 'sinamon-sikhye';

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

// const StyledTipText = styled.span`
//   font-size: 14px;
//   color: var(--color-subtext);
//
//   margin-left: 10px;
//   line-height: 2.5;
//
//   @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
//     display: none;
//   }
// `;

const TimeTableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  text-align: center;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
`;

// const MoreButton = styled.button`
//   width: 60px;
//   height: 30px;
//   border: 1px var(--color-gray) solid;
//   border-radius: 50px;
//   background-color: white;
//   cursor: pointer;
//
//   &:hover {
//     background-color: var(--color-gray);
//   }
//
//   @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
//     display: none;
//   }
// `;
//
// const day = ['일', '월', '화', '수', '목', '금', '토'];
// const today = new Date().getDay();

const TimetableCard: React.FC = () => {
  // const [width] = useWindowSize();
  // const tablet = parseInt(SCREEN_SIZE.SCREEN_TABLET.replace('px', ''), 10);
  //
  // const timetable = useTimetable();
  //
  // const TimetableForPC = timetable.map((value, index) => (
  //   <TimetableItem
  //     // eslint-disable-next-line react/no-array-index-key
  //     key={index}
  //     day={`${day[index + 1]}`}
  //     data={value}
  //     active={index + 1 === today}
  //   />
  // ));
  //
  // const TimetableForMobile = () => {
  //   if (today === 0 || today === 6) {
  //     return (
  //       <>
  //         <p>오늘은 주말입니다.</p>
  //         <p>
  //           더 자세한 시간표는{' '}
  //           <NoStyleLink to="/timetable">
  //             <b>
  //               <u>시간표 보기</u>
  //             </b>
  //           </NoStyleLink>{' '}
  //           메뉴를 <br />
  //           이용해주세요.
  //         </p>
  //       </>
  //     );
  //   }
  //
  //   return <TimetableItem day={`${day[today]}`} data={timetable[today - 1]} active />;
  // };

  return (
    <Card columnStart={1} columnEnd={5} rowStart={2} rowEnd={3}>
      <CardHeader>
        <LeftHeader>
          <CardTitle>
            <span role="img" aria-label="clock">
              ⏱
            </span>
            무엇을 배울까?
          </CardTitle>
          {/* <StyledTipText>과목명을 클릭하여 줌에 접속하세요</StyledTipText> */}
        </LeftHeader>

        {/* <NoStyleLink to="/timetable"> */}
        {/*  <MoreButton>더보기</MoreButton> */}
        {/* </NoStyleLink> */}
      </CardHeader>
      <TimeTableContainer>
        {/* {width > tablet ? TimetableForPC : <TimetableForMobile />} */}
      </TimeTableContainer>
      준비중
    </Card>
  );
};

export default TimetableCard;
