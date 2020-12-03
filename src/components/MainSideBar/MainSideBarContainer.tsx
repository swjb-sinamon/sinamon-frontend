import styled from 'styled-components';
import SCREEN_SIZE from '../../styles/screen-size';

const MainSideBarContainer = styled.div`
  display: grid;
  grid-template-columns: 280px 4fr;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: flex;
    flex-direction: column;
  }
`;

export default MainSideBarContainer;
