import styled from 'styled-components';

const BlankLine = styled.div<{ gap: number }>`
  margin-bottom: ${(props) => props.gap}px;
`;

export default BlankLine;
