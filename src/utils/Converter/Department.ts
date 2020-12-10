type ReturnType =
  | '컴퓨터전자과'
  | '스마트자동학과'
  | 'IT산업디자인과'
  | 'IT경영정보과'
  | 'IT소프트웨어과'
  | '알수없음';

const convertDepartmentIdToString = (departmentId: string | number): ReturnType => {
  const id = typeof departmentId === 'string' ? parseInt(departmentId, 10) : departmentId;
  switch (id) {
    case 1:
      return '컴퓨터전자과';
    case 2:
      return '스마트자동학과';
    case 3:
      return 'IT산업디자인과';
    case 4:
      return 'IT경영정보과';
    case 5:
      return 'IT소프트웨어과';
    default:
      return '알수없음';
  }
};

export default convertDepartmentIdToString;
