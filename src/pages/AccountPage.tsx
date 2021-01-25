import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BlankLine,
  Heading1,
  Heading3,
  HugeButton,
  Input,
  Label,
  MainSideBarContainer,
  Radio,
  SCREEN_SIZE,
  Select,
  showToast
} from 'sinamon-sikhye';
import { Helmet } from 'react-helmet';
import swal from 'sweetalert';
import MainSideBar from '../components/MainSideBar';
import { useProfile } from '../hooks/useProfile';
import Api from '../api';

const StyledContent = styled.div`
  margin: 3rem;
`;

const StyledInput = styled(Input)`
  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    width: 100%;
  }
`;

const StyledSelect = styled(Select)`
  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    width: 100%;
  }
`;

const RadioList = styled.div`
  & input[type='radio'] {
    margin-right: 10px;
  }

  & input[type='radio']:last-child {
    margin-right: 0;
  }
`;

const RowInputList = styled.div`
  display: flex;
  flex-direction: row;

  & > div {
    margin-right: 20px;
  }

  & > div:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    flex-direction: column;

    & > div {
      margin-right: 0;
      margin-bottom: 20px;
    }

    & > div:last-child {
      margin-bottom: 0;
    }
  }
`;

interface InputState {
  readonly currentPassword: string;
  readonly grade: number;
  readonly clazz: number;
  readonly number: number;
  readonly newPassword: string;
  readonly confirmNewPassword: string;
}

const AccountPage: React.FC = () => {
  const profile = useProfile();
  const [input, setInput] = useState<InputState>({
    currentPassword: '',
    grade: profile ? profile.studentGrade : 0,
    clazz: profile ? profile.studentClass : 0,
    number: profile ? profile.studentNumber : 0,
    newPassword: '',
    confirmNewPassword: ''
  });

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    type: keyof InputState
  ) => {
    e.persist();

    let inputValue: string | number = e.target.value;
    if (type === 'clazz' || type === 'grade') {
      inputValue = parseInt(e.target.value, 10);
    }

    setInput((current) => ({
      ...current,
      [type]: inputValue
    }));
  };

  const validator = (): boolean => {
    if (!input.currentPassword.trim() || !input.grade || !input.clazz || !input.number) {
      showToast('빈칸이 있습니다.', 'danger');
      return false;
    }

    if (input.newPassword && input.newPassword.length < 6) {
      showToast('비밀번호는 최소 6자리이어야 합니다.', 'danger');
      return false;
    }

    if (input.newPassword !== input.confirmNewPassword) {
      showToast('비밀번호를 다시 확인해주세요.', 'danger');
      return false;
    }

    if (input.number < 1 || input.number > 30) {
      showToast('학생 번호는 1~30 이내에서만 선택할 수 있습니다.', 'danger');
      return false;
    }

    if (profile && profile.department === 5 && input.clazz === 2) {
      showToast('IT소프트웨어과는 1반까지 있습니다.', 'danger');
      return false;
    }

    return true;
  };

  const onClick = async () => {
    if (!validator()) return;

    const confirm = await swal({
      title: '정말로 수정하시겠습니까?',
      icon: 'info',
      buttons: ['취소', '수정']
    });

    if (!confirm) return;

    let passwordOption = {};
    if (input.newPassword) {
      passwordOption = {
        newPassword: input.newPassword
      };
    }

    await Api.put('/auth/me', {
      studentGrade: input.grade,
      studentClass: input.clazz,
      studentNumber: input.number,
      currentPassword: input.currentPassword,
      ...passwordOption
    });

    showToast('내 정보가 수정되었습니다.', 'success');

    window.location.reload();
  };

  return (
    <>
      <Helmet>
        <title>내 계정 - 수정과</title>
      </Helmet>

      <MainSideBarContainer>
        <MainSideBar />

        <StyledContent>
          <Heading1>내 계정</Heading1>
          <Heading3>계정 정보를 확인하고 수정해보세요.</Heading3>
          <Heading3>정보 변경을 위해 기존 비밀번호가 필요합니다.</Heading3>
          <BlankLine gap={30} />

          <RowInputList>
            <div>
              <Label>아이디</Label>
              <StyledInput type="text" value={profile ? profile.id : '불러오는 중...'} disabled />
            </div>

            <div>
              <Label>이름</Label>
              <StyledInput type="text" value={profile ? profile.name : '불러오는 중...'} disabled />
            </div>
          </RowInputList>
          <BlankLine gap={20} />

          <Label>학과</Label>
          <StyledSelect value={profile ? profile.department : 0} disabled>
            <option value="0">자신의 학과를 선택해주세요.</option>
            <option value="1">컴퓨터전자과</option>
            <option value="2">스마트자동학과</option>
            <option value="3">IT산업디자인과</option>
            <option value="4">IT경영정보과</option>
            <option value="5">IT소프트웨어과</option>
          </StyledSelect>
          <BlankLine gap={20} />

          <Label>기존 비밀번호</Label>
          <StyledInput
            type="password"
            value={input.currentPassword}
            onChange={(e) => onInputChange(e, 'currentPassword')}
          />
          <BlankLine gap={20} />

          <Label>학년</Label>
          <RadioList>
            <Radio
              type="radio"
              name="grade"
              title="1학년"
              value={1}
              checked={input.grade.toString() === '1'}
              onChange={(e) => onInputChange(e, 'grade')}
            />
            <Radio
              type="radio"
              name="grade"
              title="2학년"
              value={2}
              checked={input.grade.toString() === '2'}
              onChange={(e) => onInputChange(e, 'grade')}
            />
            <Radio
              type="radio"
              name="grade"
              title="3학년"
              value={3}
              checked={input.grade.toString() === '3'}
              onChange={(e) => onInputChange(e, 'grade')}
            />
          </RadioList>
          <BlankLine gap={20} />

          <Label>반</Label>
          <RadioList>
            <Radio
              type="radio"
              name="class"
              title="1반"
              value={1}
              checked={input.clazz.toString() === '1'}
              onChange={(e) => onInputChange(e, 'clazz')}
            />
            <Radio
              type="radio"
              name="class"
              title="2반"
              value={2}
              checked={input.clazz.toString() === '2'}
              onChange={(e) => onInputChange(e, 'clazz')}
            />
          </RadioList>
          <BlankLine gap={20} />

          <Label>번호</Label>
          <StyledInput
            type="number"
            min="1"
            max="30"
            value={input.number}
            onChange={(e) => onInputChange(e, 'number')}
          />
          <BlankLine gap={20} />

          <RowInputList>
            <div>
              <Label>새 비밀번호</Label>
              <StyledInput
                type="password"
                placeholder="비밀번호 수정 필요 시 입력"
                value={input.newPassword}
                onChange={(e) => onInputChange(e, 'newPassword')}
              />
            </div>
            <div>
              <Label>새 비밀번호 확인</Label>
              <StyledInput
                type="password"
                placeholder="비밀번호 수정 필요 시 입력"
                value={input.confirmNewPassword}
                onChange={(e) => onInputChange(e, 'confirmNewPassword')}
              />
            </div>
          </RowInputList>

          <BlankLine gap={30} />

          <HugeButton onClick={onClick}>수정하기</HugeButton>
        </StyledContent>
      </MainSideBarContainer>
    </>
  );
};

export default AccountPage;
