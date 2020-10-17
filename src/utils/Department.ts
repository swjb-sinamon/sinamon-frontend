type ReturnType =
  | '컴퓨터전자'
  | '스마트자동학'
  | 'IT산업디자인'
  | 'IT경영정보'
  | 'IT소프트웨어'
  | '알수없음';

const convertDepartmentIdToString = (departmentId: string | number): ReturnType => {
  const id = typeof departmentId === 'string' ? parseInt(departmentId, 10) : departmentId;
  switch (id) {
    case 1:
      return '컴퓨터전자';
    case 2:
      return '스마트자동학';
    case 3:
      return 'IT산업디자인';
    case 4:
      return 'IT경영정보';
    case 5:
      return 'IT소프트웨어';
    default:
      return '알수없음';
  }
};

export default convertDepartmentIdToString;
