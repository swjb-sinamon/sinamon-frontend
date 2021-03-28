import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BlankLine,
  Heading1,
  Heading2,
  Heading3,
  Input,
  Label,
  MainSideBarContainer,
  MediumButton,
  SCREEN_SIZE,
  showToast
} from 'sinamon-sikhye';
import { Helmet } from 'react-helmet';
import MainSideBar from '../components/MainSideBar';

const StyledContent = styled.div`
  margin: 3rem;
`;

const StyledParagraph = styled.p`
  margin-bottom: 10px;
  font-weight: bold;

  &:before {
    content: '- ';
  }
`;

const StyledInput = styled(Input)`
  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    width: 100%;
  }
`;

const Highlight = styled.span`
  color: var(--color-button-hover);
`;

const peoples = [
  20511,
  20520,
  20617,
  30325,
  30802,
  30712,
  20605,
  20523,
  30123,
  10917,
  10920,
  30229,
  30118,
  20623,
  20603,
  20620,
  30226,
  20202,
  20923,
  20527,
  20224,
  30915,
  30209,
  20406,
  30925,
  20211,
  10905,
  30117,
  20921,
  20624,
  20413,
  30713,
  30705,
  20526,
  20810,
  10904,
  30125,
  20107,
  20514,
  20517,
  20626,
  20521,
  30617,
  10421,
  10412,
  20903,
  30812,
  30825,
  10317,
  10901,
  20908,
  30208,
  30211,
  30702,
  20314,
  30111,
  30911,
  10922,
  20922,
  30202,
  30217,
  10319,
  30113,
  30201,
  20316,
  30807,
  30212,
  20607,
  10909,
  10413,
  20606,
  10404,
  10907,
  10415,
  30818,
  10911,
  10423,
  20918,
  20506,
  30825,
  20901,
  20502,
  30214,
  30926,
  20904,
  30722,
  30905,
  20509,
  20519,
  20219,
  30122
];

const EventPage: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const onParticipateButton = () => {
    const n = parseInt(input, 10);

    if (peoples[0] === n) {
      showToast('축하드립니다. 보조배터리 상품에 당첨되셨습니다!!', 'success');
    } else if (peoples.includes(n)) {
      showToast('축하드립니다. 간식 상품에 당첨되셨습니다!', 'success');
    } else {
      showToast('당첨자 목록에 없습니다.', 'info');
    }
  };

  return (
    <>
      <Helmet>
        <title>이벤트 - 수정과</title>
      </Helmet>

      <MainSideBarContainer>
        <MainSideBar />

        <StyledContent>
          <Heading1>이벤트</Heading1>
          <Heading3>런칭이벤트 당쳠 여부를 확인할 수 있습니다.</Heading3>

          <BlankLine gap={30} />

          <Heading2>수정과에 가입하고 보조배터리와 간식을 받아가세요!</Heading2>
          <b>
            추첨을 통해 <Highlight>간식(92명)</Highlight>과 <Highlight>보조배터리(1명)</Highlight>를
            드립니다.
          </b>

          <BlankLine gap={30} />

          <StyledParagraph>
            3월 26일(금)까지 가입한 사람은 자동으로 이벤트에 참여가 됩니다.
          </StyledParagraph>
          <StyledParagraph>1월 가입자는 당첨 확률이 상승합니다.</StyledParagraph>
          <StyledParagraph>
            3월 29일에 당첨 여부가 발표되며 아래에서 수동으로 확인할 수 있습니다.
            <br />
            이후 상품을 지급합니다. (지급 방법 추후 안내)
          </StyledParagraph>

          <BlankLine gap={30} />

          <Label htmlFor="e_number">학번을 입력하여 당첨 여부를 확인하세요.</Label>
          <StyledInput
            id="e_number"
            type="number"
            placeholder="ex. 30925"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <BlankLine gap={10} />

          <MediumButton onClick={onParticipateButton}>확인하기</MediumButton>
        </StyledContent>
      </MainSideBarContainer>
    </>
  );
};

export default EventPage;
