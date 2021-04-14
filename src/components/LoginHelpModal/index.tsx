import React, { Dispatch, SetStateAction } from 'react';
import { Heading3, Modal } from 'sinamon-sikhye';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  & > div {
    text-align: left;

    :lang(ko) {
      word-break: keep-all;
    }
  }
`;

interface LoginHelpModalProps {
  readonly open: [boolean, Dispatch<SetStateAction<boolean>>];
}

const LoginHelpModal: React.FC<LoginHelpModalProps> = ({ open }) => {
  return (
    <StyledModal width={450} height={450} name="HelpLogin" state={open}>
      <div>
        <Heading3>회원가입은 어떻게 하나요?</Heading3>
        <p>
          학기초에 인증코드 배부 후 회원가입이 가능합니다. 추가 가입은 IT소프트웨어과만 받고
          있습니다.
        </p>
      </div>

      <br />

      <div>
        <Heading3>인증코드가 필요해요.</Heading3>
        <p>현재는 추가 가입 및 인증코드 발급을 하지 않습니다.</p>
      </div>

      <br />

      <div>
        <Heading3>아이디, 비밀번호를 까먹었어요.</Heading3>
        <p>
          IT소프트웨어과 수정과 동아리를 찾아오셔서 학번, 이름을 알려주시면 아이디를 알려드립니다.{' '}
          <br />
          단, 비밀번호는 확인할 수 없으며 필요 시 기존 계정 탈퇴 후 재가입이 가능합니다.
        </p>
      </div>
    </StyledModal>
  );
};

export default LoginHelpModal;
