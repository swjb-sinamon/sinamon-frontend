enum ErrorMessage {
  SERVER_ERROR = '오류가 발생하였습니다. 잠시후 다시 시도해주세요.',
  NO_PERMISSION = '권한이 없습니다.',

  USER_NOT_FOUND = '존재하지 않는 사용자입니다.',
  USER_ALREADY_EXISTS = '이미 존재하는 아이디입니다.',

  SUBJECT_NOT_FOUND = '존재하지 않는 과목입니다.',
  SUBJECT_ALREADY_EXISTS = '이미 존재하는 과목입니다.',

  UMBRELLA_NOT_FOUND = '존재하지 않는 우산입니다.',
  UMBRELLA_ALREADY_EXISTS = '이미 존재하는 우산입니다.',

  ONLINETIMETABLE_NOT_FOUND = '존재하지 않는 온라인 시간표입니다.',

  RENTAL_NOT_FOUND = '존재하지 않는 대여 정보입니다.',
  RENTAL_USER_ALREADY_EXISTS = '이미 우산을 대여한 학생입니다.',
  RENTAL_UMBRELLA_ALREADY_EXISTS = '누군가 대여한 우산입니다.',
  RENTAL_EXPIRE = '우산 대여가 연체된 학생입니다.',

  QRCODE_EXPIRE = 'QR코드 유효기간이 지났습니다.',

  ACTIVATION_CODE_NOT_FOUND = '존재하지 않는 인증코드입니다.',
  ACTIVATION_CODE_USED = '이미 사용된 인증코드입니다.',

  UNIFORM_NOT_FOUND = '존재하지 않는 교복데이 데이터입니다.',
  UNIFORM_NOT_MINUS = '점수를 더 내릴 수 없습니다.',
  UNIFORM_DO_NOT_PLUS = '최대 2점까지만 올릴 수 있습니다.'
}

export default ErrorMessage;
