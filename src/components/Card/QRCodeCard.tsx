import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import QRCode from 'qrcode.react';
import { Heading2, Heading3 } from '../../atomics/Typography/Heading';
import Card from '../../components/Card';
import GradientQR from '../../assets/Gradient/qr';
import Api from '../../api';
import Modal from '../Modal';
import showToast from '../../utils/Toast';

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

const ModalContent = styled.div`
  text-align: center;

  margin-bottom: -30px;
`;

const QRCodeCard: React.FC = () => {
  const [qrData, setQRData] = useState<object>({});
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
      <Card columnStart={5} columnEnd={6} rowStart={2} rowEnd={3}>
        <Container onClick={onQRCodeClick} tabIndex={0}>
          <GradientQR />
          <div>
            <FontAwesomeIcon icon={faQrcode} size="5x" />
            <Heading3>QR코드 바로가기</Heading3>
          </div>
        </Container>
      </Card>

      <Modal width={350} height={350} name="QRCode" state={openState}>
        <ModalContent>
          <Heading2>우산대여 QR코드</Heading2>
          <p>QR코드를 스캔하여 우산을 대여해보세요.</p>
        </ModalContent>
        <QRCode value={JSON.stringify(qrData)} />
      </Modal>
    </>
  );
};

export default QRCodeCard;
