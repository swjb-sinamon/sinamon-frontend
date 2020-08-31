import React from 'react';
import styled from 'styled-components';
import CheckBox from 'src/atomics/Form/CheckBox';

const UnderLine = styled.span`
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease-in;

  &:hover {
    color: var(--color-button-hover);
  }
`;

const RegisterFooterText: React.FC = () => {
  return (
    <>
      <span>
        <UnderLine>개인정보처리방침</UnderLine> 동의 <CheckBox type="checkbox" />
      </span>
      <br />
      <span>
        <UnderLine>수정과 이용약관</UnderLine> 동의 <CheckBox type="checkbox" />
      </span>
    </>
  );
};

export default RegisterFooterText;
