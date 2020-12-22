interface ReturnType {
  readonly grade: number;
  readonly class: number;
  readonly number: number;
}

export const convertSchoolNumber = (n: string): ReturnType => {
  const grade = n.slice(0, 1);
  const clazz = n.slice(1, 3);
  const realClass = clazz[0] === '0' ? clazz.replace('0', '') : clazz;
  const number = n.slice(3, 5);
  const realNumber = number[0] === '0' ? number.replace('0', '') : number;

  return {
    grade: parseInt(grade, 10),
    class: parseInt(realClass, 10),
    number: parseInt(realNumber, 10)
  };
};

export const convertClassToDepartment = (clazz: number): [number, number] => {
  let department = 0;
  let realClass = 0;

  if (clazz >= 1 && clazz <= 2) {
    department = 1;
    realClass = clazz;
  }

  if (clazz >= 3 && clazz <= 4) {
    department = 2;
    realClass = clazz - 2;
  }

  if (clazz >= 5 && clazz <= 6) {
    department = 3;
    realClass = clazz - 4;
  }

  if (clazz >= 7 && clazz <= 8) {
    department = 4;
    realClass = clazz - 6;
  }

  if (clazz === 9) {
    department = 5;
    realClass = 1;
  }

  return [department, realClass];
};
