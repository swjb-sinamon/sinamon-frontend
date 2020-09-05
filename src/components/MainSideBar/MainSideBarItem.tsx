import styled from 'styled-components';

const MainSideBarItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1.2rem 2rem;
  border-bottom: 1px solid var(--color-gray);

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(169, 169, 169, 0.4);
    background-image: linear-gradient(135deg, #fccf31 10%, #f55555 100%);
  }
`;

export default MainSideBarItem;