import React from 'react';
import styled from 'styled-components';
import CheckBox from '../../atomics/Form/CheckBox';

const UnderLine = styled.span`
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease-in;

  &:hover {
    color: var(--color-button-hover);
  }
`;

interface CheckState {
  readonly privacy: boolean;
  readonly tos: boolean;
}

interface RegisterFooterTextProps {
  readonly check: [CheckState, React.Dispatch<React.SetStateAction<CheckState>>];
}

const RegisterFooterText: React.FC<RegisterFooterTextProps> = ({ check }) => {
  const [input, setInput] = check;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: keyof CheckState) => {
    e.persist();

    setInput((current) => ({
      ...current,
      [type]: !current[type]
    }));
  };

  return (
    <>
      <span>
        <UnderLine>개인정보처리방침</UnderLine> 동의 (필수){' '}
        <CheckBox
          type="checkbox"
          checked={input.privacy}
          onChange={(e) => onInputChange(e, 'privacy')}
        />
      </span>
      <br />
      <span>
        <UnderLine>수정과 이용약관</UnderLine> 동의 (필수){' '}
        <CheckBox type="checkbox" checked={input.tos} onChange={(e) => onInputChange(e, 'tos')} />
      </span>
    </>
  );
};

export default RegisterFooterText;
