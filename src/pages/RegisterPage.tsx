import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ReCaptcha } from 'react-recaptcha-v3';
import { showToast, HugeButton, BlankLine } from 'sinamon-sikhye';
import { Helmet } from 'react-helmet';
import RegisterHeaderText from '../components/Register/RegisterHeaderText';
import RegisterFooterText from '../components/Register/RegisterFooterText';
import RegisterForm from '../components/Register/RegisterForm';
import Api from '../api';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  border-radius: 3px;
  border: 1px solid var(--color-gray);
  padding: 2rem 2rem 2.5rem;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  & > button {
    margin-bottom: 20px;
  }
`;

interface RegisterState {
  readonly id: string;
  readonly password: string;
  readonly passwordConfirm: string;
  readonly fullName: string;
  readonly code: string;
  readonly department: number;
  readonly grade: number;
  readonly class: number;
  readonly number: number;
}

interface CheckState {
  readonly privacy: boolean;
  readonly tos: boolean;
}

const RegisterPage: React.FC = () => {
  const state = useState<RegisterState>({
    id: '',
    password: '',
    passwordConfirm: '',
    fullName: '',
    code: '',
    department: 0,
    grade: 0,
    class: 0,
    number: 1
  });
  const check = useState<CheckState>({
    privacy: false,
    tos: false
  });

  const history = useHistory();

  const validator = (): boolean => {
    const blankCount = Object.values(state[0]).filter(
      (inputValue) =>
        inputValue === 0 ||
        (typeof inputValue === 'string' && (inputValue.trim() === '' || inputValue === '0'))
    );
    if (blankCount.length > 0) {
      showToast('빈칸이 있습니다.', 'danger');
      return false;
    }

    if (state[0].password.length < 6) {
      showToast('비밀번호는 최소 6자리이어야 합니다.', 'danger');
      return false;
    }

    if (state[0].password !== state[0].passwordConfirm) {
      showToast('비밀번호를 다시 확인해주세요.', 'danger');
      return false;
    }

    if (state[0].number < 1 || state[0].number > 30) {
      showToast('학생 번호는 1~30 이내에서만 선택할 수 있습니다.', 'danger');
      return false;
    }

    if (!check[0].privacy || !check[0].tos) {
      showToast('개인정보처리방침 및 이용약관 동의가 필요합니다.', 'danger');
      return false;
    }

    return true;
  };

  const onRegisterClick = async () => {
    if (!validator()) return;

    await Api.post('/auth/register', {
      id: state[0].id,
      password: state[0].password,
      name: state[0].fullName,
      department: state[0].department,
      studentGrade: state[0].grade,
      studentClass: state[0].class,
      studentNumber: state[0].number,
      code: state[0].code
    });

    showToast('회원가입 성공! 로그인 페이지로 이동합니다.', 'success');
    history.push('/login');
  };

  return (
    <>
      <Helmet>
        <title>회원가입 - 수정과</title>
      </Helmet>

      <Container>
        <div>
          <RegisterHeaderText />

          <BlankLine gap={30} />

          <Form>
            <RegisterForm state={state} />
            <RegisterFooterText check={check} />
          </Form>

          <BlankLine gap={30} />

          <ButtonWrapper>
            <HugeButton onClick={onRegisterClick}>회원가입</HugeButton>
          </ButtonWrapper>
        </div>

        <ReCaptcha sitekey={process.env.REACT_APP_RECAPTCHA!} action="register" />
      </Container>
    </>
  );
};

export default RegisterPage;
