import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ScaleInput } from 'sinamon-sikhye';

const UnderLineLink = styled(Link)`
  text-decoration: underline;
  color: #333333;
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
        <UnderLineLink to="/privacy" target="_blank">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          개인정보처리방침
        </UnderLineLink>{' '}
        동의 (필수)
        <ScaleInput
          style={{
            marginLeft: 5
          }}
          type="checkbox"
          checked={input.privacy}
          onChange={(e) => onInputChange(e, 'privacy')}
        />
      </span>
      <br />
      <span>
        <UnderLineLink to="/tos" target="_blank">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          수정과 이용약관
        </UnderLineLink>{' '}
        동의 (필수)
        <ScaleInput
          style={{
            marginLeft: 5
          }}
          type="checkbox"
          checked={input.tos}
          onChange={(e) => onInputChange(e, 'tos')}
        />
      </span>
    </>
  );
};

export default RegisterFooterText;
