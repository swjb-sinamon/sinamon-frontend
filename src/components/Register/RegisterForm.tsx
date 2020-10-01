import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import BlankLine from '../../utils/BlankLine';
import Input from '../../atomics/Form/Input';
import Label from '../../atomics/Form/Label';
import Radio from '../../atomics/Form/Radio';
import SCREEN_SIZE from '../../styles/screen-size';

const RadioList = styled.div`
  & input[type='radio'] {
    margin-right: 10px;
  }

  & input[type='radio']:last-child {
    margin-right: 0;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: block;
  }
`;

interface RegisterState {
  readonly email: string;
  readonly password: string;
  readonly passwordConfirm: string;
  readonly fullName: string;
  readonly grade: number;
  readonly class: number;
  readonly number: number;
}

interface RegisterFormProps {
  readonly state: [RegisterState, React.Dispatch<React.SetStateAction<RegisterState>>];
}

const RegisterForm: React.FC<RegisterFormProps> = ({ state }) => {
  const [input, setInput] = state;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: keyof RegisterState) => {
    e.persist();

    setInput((current) => ({
      ...current,
      [type]: e.target.value
    }));
  };

  return (
    <GridContainer>
      <div>
        <Label>이메일</Label>
        <Input type="email" value={input.email} onChange={(e) => onInputChange(e, 'email')} />
        <BlankLine gap={20} />

        <Label>비밀번호</Label>
        <Input
          type="password"
          value={input.password}
          onChange={(e) => onInputChange(e, 'password')}
        />
        <BlankLine gap={20} />

        <Label>비밀번호 확인</Label>
        <Input
          type="password"
          value={input.passwordConfirm}
          onChange={(e) => onInputChange(e, 'passwordConfirm')}
        />
        <BlankLine gap={20} />

        <Label>실명</Label>
        <Input type="text" value={input.fullName} onChange={(e) => onInputChange(e, 'fullName')} />
        <BlankLine gap={20} />
      </div>
      <div>
        <Label>학년 (선생님 가입 시 담당 학년을 선택합니다)</Label>
        <RadioList>
          <Radio
            type="radio"
            name="grade"
            title="1학년"
            value={1}
            onChange={(e) => onInputChange(e, 'grade')}
          />
          <Radio
            type="radio"
            name="grade"
            title="2학년"
            value={2}
            onChange={(e) => onInputChange(e, 'grade')}
          />
          <Radio
            type="radio"
            name="grade"
            title="3학년"
            value={3}
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
            onChange={(e) => onInputChange(e, 'class')}
          />
          <Radio
            type="radio"
            name="class"
            title="2반"
            value={2}
            onChange={(e) => onInputChange(e, 'class')}
          />
          <Radio
            type="radio"
            name="class"
            title="기타"
            value={-1}
            onChange={(e) => onInputChange(e, 'class')}
          />
        </RadioList>
        <BlankLine gap={20} />

        <Label>번호</Label>
        <Input
          type="number"
          min="1"
          max="30"
          value={input.number}
          onChange={(e) => onInputChange(e, 'number')}
        />
        <BlankLine gap={20} />
      </div>
    </GridContainer>
  );
};

export default RegisterForm;
