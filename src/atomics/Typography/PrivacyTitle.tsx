import styled from 'styled-components';
import SCREEN_SIZE from '../../styles/screen-size';
import { Heading1 } from './Heading';

export const PrivacyTitle = styled.h1`
  color: transparent;
  font-size: 3.5rem;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: var(--color-button-hover);
  opacity: 0.7;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    font-size: 3rem;
  }
`;

export const PrivacySubTitle = styled(Heading1)`
  font-size: 2.3rem;
  margin-top: -1.8rem;
  margin-left: 3rem;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    font-size: 1.8rem;
    margin-top: -1.3rem;
    margin-left: 2rem;
  }
`;
