import React from 'react';
import styled from 'styled-components';
import BlankLine from 'src/utils/BlankLine';
import Input from 'src/atomics/Form/Input';
import Label from 'src/atomics/Form/Label';
import Radio from 'src/atomics/Form/Radio';
import SCREEN_SIZE from 'src/styles/screen-size';

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

const RegisterForm: React.FC = () => {
  return (
    <GridContainer>
      <div>
        <Label>이메일</Label>
        <Input type="email" />
        <BlankLine gap={20} />

        <Label>비밀번호</Label>
        <Input type="password" />
        <BlankLine gap={20} />

        <Label>비밀번호 확인</Label>
        <Input type="password" />
        <BlankLine gap={20} />

        <Label>실명</Label>
        <Input type="text" />
        <BlankLine gap={20} />
      </div>
      <div>
        <Label>학년 (선생님 가입 시 담당 학년을 선택합니다)</Label>
        <RadioList>
          <Radio type="radio" name="grade" title="1학년" />
          <Radio type="radio" name="grade" title="2학년" />
          <Radio type="radio" name="grade" title="3학년" />
        </RadioList>
        <BlankLine gap={20} />

        <Label>반</Label>
        <RadioList>
          <Radio type="radio" name="class" title="1반" />
          <Radio type="radio" name="class" title="2반" />
          <Radio type="radio" name="class" title="기타" />
        </RadioList>
        <BlankLine gap={20} />

        <Label>번호</Label>
        <Input type="number" min="1" max="30" />
        <BlankLine gap={20} />
      </div>
    </GridContainer>
  );
};

export default RegisterForm;
