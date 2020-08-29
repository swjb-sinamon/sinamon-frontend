import React from 'react';
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  & button {
    margin-right: 1rem;
  }

  & button:last-child {
    margin-right: 0;
  }
`;

const ButtonGroup: React.FC = ({ children }) => {
  return <StyledButtonGroup>{children}</StyledButtonGroup>;
};

export default ButtonGroup;
