import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BlankLine,
  BodyItem,
  HeaderItem,
  Heading1,
  Heading3,
  HugeButton,
  Label,
  MainSideBarContainer,
  NoStyleA,
  Radio,
  ScaleInput,
  showToast,
  Table,
  TableHead
} from 'sinamon-sikhye';
import MainSideBar from '../components/MainSideBar';
import Api from '../api';
import { useProfile } from '../hooks/useProfile';

const StyledContent = styled.div`
  margin: 3rem;
`;

const StyledNoStyleA = styled(NoStyleA)`
  text-decoration: underline;
  font-size: 16px;
`;

const RadioList = styled.div`
  & > * {
    margin-right: 10px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

const ContestPage: React.FC = () => {
  const [role, setRole] = useState<string>('');
  const [confirm, setConfirm] = useState<boolean>(false);
  const profile = useProfile();

  const onSubmit = () => {
    if (!profile) return;

    if (role === '') {
      showToast('🏅 참여할 역할을 선택해주세요.', 'danger');
      return;
    }

    if (!confirm) {
      showToast('🏅 모든 내용을 읽어주세요.', 'danger');
      return;
    }

    Api.post('/contest', {
      name: profile.name,
      department: profile.department,
      grade: profile.studentGrade,
      class: profile.studentClass,
      number: profile.studentNumber,
      role
    }).then(() => {
      showToast('🏅 참가 신청이 완료되었습니다!', 'success');

      setRole('');
      setConfirm(false);
    });
  };

  return (
    <MainSideBarContainer>
      <MainSideBar />

      <StyledContent>
        <Heading1>학생협업공모전 참여하기</Heading1>
        <Heading3>
          문의:{' '}
          <StyledNoStyleA href={`tel:${process.env.REACT_APP_CT}`}>
            {process.env.REACT_APP_CT}
          </StyledNoStyleA>{' '}
          또는
        </Heading3>
        <Heading3>
          수정고 학생협업공모전 문의방{' '}
          <StyledNoStyleA href={process.env.REACT_APP_CK}>
            {process.env.REACT_APP_CK}
          </StyledNoStyleA>
        </Heading3>
        <Heading3>아래 내용을 꼭! 읽고 참여해주세요.</Heading3>

        <BlankLine gap={30} />

        <Heading3>진행일정 및 유의사항</Heading3>

        <BlankLine gap={10} />

        <Table>
          <TableHead>
            <tr>
              <HeaderItem>1월 29일 ~ 31일</HeaderItem>
              <HeaderItem>3월</HeaderItem>
              <HeaderItem>5월</HeaderItem>
              <HeaderItem>5월말 ~ 6월초</HeaderItem>
              <HeaderItem>6월중순 ~</HeaderItem>
            </tr>
          </TableHead>
          <tbody>
            <BodyItem>
              <td>팀 발표</td>
              <td>중간점검1</td>
              <td>중간점검2</td>
              <td>공모전 마감</td>
              <td>공모전 시상</td>
            </BodyItem>
          </tbody>
        </Table>

        <BlankLine gap={10} />

        <p>선택한 역할에 따라 1학년, 2학년을 섞어 팀이 정해집니다.</p>

        <BlankLine gap={30} />

        <Label>참여하고 싶은 역할을 선택해주세요!</Label>
        <RadioList>
          <Radio
            type="radio"
            name="role"
            title="기획"
            value="IDEA"
            onChange={(e) => setRole(e.target.value)}
          />
          <Radio
            type="radio"
            name="role"
            title="개발"
            value="DEVELOP"
            onChange={(e) => setRole(e.target.value)}
          />
          <Radio
            type="radio"
            name="role"
            title="디자인"
            value="DESIGN"
            onChange={(e) => setRole(e.target.value)}
          />
        </RadioList>

        <BlankLine gap={30} />

        <span>모든 내용을 숙지하였습니다.</span>
        <ScaleInput
          style={{
            marginLeft: 5
          }}
          type="checkbox"
          checked={confirm}
          onChange={(e) => setConfirm((prev) => !prev)}
        />
        <br />
        <BlankLine gap={10} />
        <HugeButton onClick={onSubmit}>참여하기</HugeButton>
      </StyledContent>
    </MainSideBarContainer>
  );
};

export default ContestPage;
