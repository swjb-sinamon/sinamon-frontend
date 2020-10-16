import React from 'react';
import styled from 'styled-components';
import { Heading2 } from '../atomics/Typography/Heading';
import SCREEN_SIZE from '../styles/screen-size';
import BlankLine from '../utils/BlankLine';
import { PrivacySubTitle, PrivacyTitle } from '../atomics/Typography/PrivacyTitle';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;

  padding-top: 1rem;
  padding-left: 1rem;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    width: 600px;
  }

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    width: 350px;
  }
`;

const PrivacyPage: React.FC = () => {
  return (
    <Container>
      <PrivacyTitle>수정과</PrivacyTitle>
      <PrivacySubTitle>개인정보처리방침</PrivacySubTitle>
      <BlankLine gap={20} />
      <div>
        <Heading2>1. 개인정보의 처리 목적</Heading2>
        <p>
          &lt;수정과&gt;(‘sinamon.info’이하 ‘수정과’) 은(는) 다음의 목적을 위하여 개인정보를
          처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
        </p>
        <p>
          - 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별.인증, 회원자격 유지.관리 등
        </p>
      </div>
      <BlankLine gap={10} />
      <div>
        <Heading2>1. 개인정보의 처리 목적</Heading2>
        <p>
          &lt;수정과&gt;(‘sinamon.info’이하 ‘수정과’) 은(는) 다음의 목적을 위하여 개인정보를
          처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
        </p>
        <p>
          - 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별.인증, 회원자격 유지.관리 등
        </p>
      </div>
      <BlankLine gap={10} />
      <div>
        <Heading2>1. 개인정보의 처리 목적</Heading2>
        <p>
          &lt;수정과&gt;(‘sinamon.info’이하 ‘수정과’) 은(는) 다음의 목적을 위하여 개인정보를
          처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
        </p>
        <p>
          - 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별.인증, 회원자격 유지.관리 등
        </p>
      </div>
      <BlankLine gap={10} />
      <div>
        <Heading2>1. 개인정보의 처리 목적</Heading2>
        <p>
          &lt;수정과&gt;(‘sinamon.info’이하 ‘수정과’) 은(는) 다음의 목적을 위하여 개인정보를
          처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
        </p>
        <p>
          - 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별.인증, 회원자격 유지.관리 등
        </p>
      </div>
    </Container>
  );
};

export default PrivacyPage;
