import React from 'react';
import styled from 'styled-components';
import { Heading2, SCREEN_SIZE, BlankLine, PrivacySubTitle, PrivacyTitle } from 'sinamon-sikhye';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;

  padding: 1rem;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    width: 600px;
  }

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    width: 350px;
  }
`;

const ToSPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>이용약관 - 수정과</title>
      </Helmet>
      <Container>
        <PrivacyTitle>수정과</PrivacyTitle>
        <PrivacySubTitle>이용약관</PrivacySubTitle>
        <BlankLine gap={20} />
        <div>
          <Heading2>1. 목적</Heading2>
          <p>
            본 약관은 수원정보과학고등학교(이하 "수정고") 인트라넷 프로젝트, 수정과(이하 "수정과")를
            이용함에 있어 수정과와 사용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </div>

        <BlankLine gap={10} />
        <div>
          <Heading2>2. 용어 정의</Heading2>
          <p>
            1. "수정과"는 수정고에서 진행하는 인트라넷 프로젝트를 의미합니다.
            <br />
            2. "사용자"는 본 약관을 동의하고 수정과에서 제공하는 서비스를 이용하는 사람을
            의미합니다.
            <br />
            3. "학생"은 수정고에 재학 중인 학생을 의미합니다.
            <br />
            4. "관리자"는 수정과를 관리하고 운영하는 사람을 의미합니다.
          </p>
        </div>

        <BlankLine gap={10} />
        <div>
          <Heading2>3. 회원 정보 관리</Heading2>
          <p>
            1. 수정과 서비스 제공을 위해 개인정보를 받아 회원가입하고 있으며 회원가입 시 별도의
            개인정보처리방침을 동의하게 됩니다.
            <br />
            2. 사용자의 선택에 따라 수정과를 통해 개인정보를 수정할 수 있습니다.
            <br />
            3. 수정고 졸업생 한정하여 수정과 회원탈퇴를 제공합니다.
            <br />
            4. 별도 사유가 있지 않는 한 수정과는 졸업생의 개인정보를 자동으로 탈퇴시킬 수 있습니다.
            <br />
            5. 아래 사유에 해당하는 경우 수정과는 사용자의 서비스 이용 자격을 제한할 수 있습니다.
            <br />- 수정과를 이용하여 법령 또는 이용약관을 위반하는 경우
          </p>
        </div>

        <BlankLine gap={10} />
        <div>
          <Heading2>4. 서비스 제공 및 변경</Heading2>
          <p>
            1. 수정과는 다음과 같은 서비스를 제공하고 있습니다.
            <br />
            - 급식, 학사일정 알림
            <br />
            - 시간표 알림
            <br />
            - 기타 학과에서 진행하는 행사
            <br />
            2. 수정과가 제공하는 서비스는 변경될 수 있으며 모든 서비스는 학교 행사와 연관되어
            있습니다.
          </p>
        </div>

        <BlankLine gap={10} />
        <div>
          <Heading2>5. 사용자의 의무</Heading2>
          <p>
            1. 사용자는 다음과 같은 행위를 하여서는 안 됩니다.
            <br />
            - 신청 또는 변경 시 허위내용의 기재
            <br />
            - 타인의 정보 도용
            <br />
            - 수정과가 게시한 정보의 변경
            <br />
            - 수정과가 금지한 정보의 송신 또는 게시
            <br />
            - 수정과와 기타 제3자의 저작권 등 지식재산권에 대한 침해
            <br />
            - 수정과 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
            <br />
            - 외설 또는 폭력적인 말이나 글, 화상, 음향, 기타 공서양속에 반하는 정보를 공개 또는
            게시하는 행위
            <br />
            - 개인의 이득을 위해 수정과를 악의적으로 사용하는 행위
            <br />
            - 이 외 기타 불법적인 행위
            <br />
            2. 수정과가 제공하는 서비스는 변경될 수 있습니다.
          </p>
        </div>

        <BlankLine gap={10} />
        <div>
          <Heading2>6. 수정과의 의무</Heading2>
          <p>
            - 수정과는 관련 법령을 준수하고 이 약관에서 금지하거나 미풍양속에 반하는 행위를 하지
            않습니다.
            <br />
            - 안정적인 서비스를 제공하기 위하여 최선의 노력을 다합니다.
            <br />
            - 해결 불가능한 결함 및 장애 등 부득이한 사유가 없는 한 수리 또는 복구하도록 최선의
            노력을 다합니다.
            <br />
            - 수정과는 사용자의 개인정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않고 이를
            보호하기 위하여 노력합니다.
            <br />- 사용자의 개인정보보호 및 사용에 대해서는 관련 법령 및 개인정보처리방침에
            따릅니다.
          </p>
        </div>

        <BlankLine gap={10} />
        <div>
          <Heading2>7. 면책조항</Heading2>
          <p>
            1. 사용자가 이용약관을 위반함으로 인하여 수정과가 사용자 또는 제3자에 대하여 책임을
            부담하게 되고, 이로써 수정과에게 손해가 발생하게 되는 경우, 사용자는 수정과에게 발생하는
            모든 손해를 배상하여야 하며, 수정과의 책임이 면제됩니다.
            <br />
            2. 수정과는 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
            <br />
            3. 수정과는 이용자의 귀책 사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지
            않습니다.
            <br />
            4. 수정과의 데이터 제공으로 인한 문제는 책임을 지지 않습니다.
          </p>
        </div>

        <BlankLine gap={10} />
        <div>
          <Heading2>8. 약관 개정</Heading2>
          <p>
            1. 수정과가 약관을 개정하는 경우 사용자에게 7일 이전에 공지합니다.
            <br />
            2. 사용자는 변경된 약관을 거부할 권리가 있습니다. 만약 7일 이내에 거부 의사를 표시하지
            않는 경우에는 동의하는 것으로 간주합니다.
            <br />
            3. 변경된 약관 거부 시 수정과 이용이 제한될 수 있습니다.
          </p>
        </div>

        <BlankLine gap={10} />
        <div>
          <Heading2>A. 부칙</Heading2>
          <p>- 시행 날짜: 2020년 11월 23일</p>
          <p>- 2차 공고 날짜: 2021년 3월 31일</p>
          <p>- 2차 시행 날짜: 2021년 4월 8일</p>
        </div>
      </Container>
    </>
  );
};

export default ToSPage;
