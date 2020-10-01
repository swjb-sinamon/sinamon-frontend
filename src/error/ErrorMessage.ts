enum ErrorMessage {
  SERVER_ERROR = '오류가 발생하였습니다. 잠시후 다시 시도해주세요.',
  NO_PERMISSION = '권한이 없습니다.',

  USER_NOT_FOUND = '이메일이 존재하지 않거나 비밀번호가 올바르지 않습니다.',
  USER_ALREADY_EXISTS = '이미 존재하는 이메일입니다.',

  SUBJECT_NOT_FOUND = '존재하지 않는 과목입니다.',
  SUBJECT_ALREADY_EXISTS = '이미 존재하는 과목입니다.',

  UMBRELLA_NOT_FOUND = '존재하지 않는 우산입니다.',
  UMBRELLA_ALREADY_EXISTS = '이미 존재하는 우산입니다.',

  ONLINETIMETABLE_NOT_FOUND = '존재하지 않는 온라인 시간표입니다.',

  RENTAL_NOT_FOUND = '존재하지 않는 대여 정보입니다.',
  RENTAL_USER_ALREADY_EXISTS = '이미 대여한 상태입니다.',
  RENTAL_UMBRELLA_ALREADY_EXISTS = '누군가 대여한 우산입니다.',
  RENTAL_EXPIRE = '우산이 연체되었습니다.'
}

export default ErrorMessage;
