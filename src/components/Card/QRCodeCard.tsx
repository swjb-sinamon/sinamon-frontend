import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { Heading3 } from '../../atomics/Typography/Heading';
import Card from '../../components/Card';
import GradientQR from '../../assets/Gradient/qr';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);

    & svg * {
      fill: url(#Gradient__QRCode);
    }
  }
`;

const QRCodeCard: React.FC = () => {
  return (
    <Card columnStart={5} columnEnd={6} rowStart={2} rowEnd={3}>
      <Container>
        <GradientQR />
        <div>
          <FontAwesomeIcon icon={faQrcode} size="5x" />
          <Heading3>QR코드 바로가기</Heading3>
        </div>
      </Container>
    </Card>
  );
};

export default QRCodeCard;
