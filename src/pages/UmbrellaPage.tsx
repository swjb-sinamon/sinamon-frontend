import React, { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import {
  MainSideBarContainer,
  BlankLine,
  HugeButton,
  showToast,
  Modal,
  Heading1,
  Heading2,
  Heading3
} from 'sinamon-sikhye';
import MainSideBar from '../components/MainSideBar';
import Api from '../api';

const StyledContent = styled.div`
  margin: 3rem;
`;

const StyledNumber = styled.span`
  font-size: 18px;
  font-weight: bold;

  &:after {
    content: '. ';
  }
`;

const StyledParagraph = styled.p`
  margin-bottom: 10px;
`;

const UmbrellaPage: React.FC = () => {
  const [qrData, setQRData] = useState<string>('');
  const openState = useState<boolean>(false);

  const onQRCodeClick = () => {
    Api.get('/qr').then((res) => {
      if (!res.data.success) {
        showToast('❗ QR코드를 만드는 중에 오류가 발생했습니다.', 'danger');
        return;
      }

      setQRData(res.data.data);
      openState[1](true);
    });
  };

  return (
    <>
      <MainSideBarContainer>
        <MainSideBar />

        <StyledContent>
          <Heading1>우산대여제</Heading1>
          <Heading3>우산을 대여 후 다음날 꼭 반납해주세요!</Heading3>
          <BlankLine gap={30} />

          <div>
            <Heading2>
              <span role="img" aria-label="open umbrella">
                ☔
              </span>
              우산 대여 방법
            </Heading2>
            <BlankLine gap={10} />

            <StyledParagraph>
              <StyledNumber>1</StyledNumber>
              <span>
                메인페이지 QR코드 바로가기 또는 아래 버튼을 통해 <b>QR을 학생회에게 보여주세요!</b>
              </span>
            </StyledParagraph>

            <HugeButton onClick={onQRCodeClick}>QR코드 열기</HugeButton>
            <BlankLine gap={10} />

            <StyledParagraph>
              <StyledNumber>2</StyledNumber>
              <span>
                자동으로 우산이 대여됩니다! 우산은 <b>다음날 반드시 반납</b>해야 돼요.
              </span>
            </StyledParagraph>
          </div>

          <BlankLine gap={30} />

          <div>
            <Heading2>
              <span role="img" aria-label="close umbrella">
                🌂
              </span>
              우산 반납 방법
            </Heading2>
            <BlankLine gap={10} />

            <StyledParagraph>
              <StyledNumber>1</StyledNumber>
              <span>반납할 때도 학생회에게 QR코드를 보여주세요!</span>
            </StyledParagraph>

            <StyledParagraph>
              <StyledNumber>2</StyledNumber>
              <span>
                <b>반납은 다음날 오후 5시까지 가능</b>합니다. 연체 시 영원히 우산대여제를 이용할 수
                없어요.
              </span>
            </StyledParagraph>
          </div>
        </StyledContent>
      </MainSideBarContainer>

      <Modal width={350} height={350} name="QRCode__Umbrella" state={openState}>
        <Heading2>우산대여 QR코드</Heading2>
        <p>QR코드를 스캔하여 우산을 대여해보세요.</p>
        <BlankLine gap={10} />
        <QRCode value={qrData} />
      </Modal>
    </>
  );
};

export default UmbrellaPage;
