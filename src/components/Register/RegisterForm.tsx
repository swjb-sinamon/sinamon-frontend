import React from 'react';
import styled from 'styled-components';
import { Label, BlankLine, Input, Select, SCREEN_SIZE, Radio } from 'sinamon-sikhye';

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

interface RegisterFormProps {
  readonly state: [RegisterState, React.Dispatch<React.SetStateAction<RegisterState>>];
}

const RegisterForm: React.FC<RegisterFormProps> = ({ state }) => {
  const [input, setInput] = state;

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    type: keyof RegisterState
  ) => {
    e.persist();

    setInput((current) => ({
      ...current,
      [type]: e.target.value
    }));
  };

  return (
    <GridContainer>
      <div>
        <Label>아이디</Label>
        <Input
          type="text"
          value={input.id}
          onChange={(e) => onInputChange(e, 'id')}
          placeholder="로그인 시 사용할 아이디를 입력해주세요."
        />
        <BlankLine gap={20} />

        <Label>비밀번호</Label>
        <Input
          type="password"
          value={input.password}
          onChange={(e) => onInputChange(e, 'password')}
          placeholder="6자리 이상의 비밀번호를 입력해주세요."
        />
        <BlankLine gap={20} />

        <Label>비밀번호 확인</Label>
        <Input
          type="password"
          value={input.passwordConfirm}
          onChange={(e) => onInputChange(e, 'passwordConfirm')}
          placeholder="비밀번호를 한번 더 입력해주세요."
        />
        <BlankLine gap={20} />

        <Label>실명</Label>
        <Input
          type="text"
          value={input.fullName}
          onChange={(e) => onInputChange(e, 'fullName')}
          placeholder="실명을 입력해주세요."
        />
        <BlankLine gap={20} />

        <Label>인증코드</Label>
        <Input
          type="text"
          value={input.code}
          onChange={(e) => onInputChange(e, 'code')}
          placeholder="인증코드를 입력해주세요."
        />
        <BlankLine gap={20} />
      </div>

      <div>
        <Label>학과</Label>
        <Select value={input.department} onChange={(e) => onInputChange(e, 'department')}>
          <option value="0">자신의 학과를 선택해주세요.</option>
          <option value="1">컴퓨터전자과</option>
          <option value="2">스마트자동학과</option>
          <option value="3">IT산업디자인과</option>
          <option value="4">IT경영정보과</option>
          <option value="5">IT소프트웨어과</option>
        </Select>
        <BlankLine gap={20} />

        <Label>학년</Label>
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
