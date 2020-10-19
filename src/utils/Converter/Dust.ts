type ReturnType = '좋음' | '보통' | '나쁨' | '매우나쁨' | '알수없음';
type ColorType = '--color-good' | '--color-fine' | '--color-warn' | '--color-bad';

export const convertPm10ToString = (value: number): [ReturnType, ColorType] => {
  if (value >= 0 && value <= 30) return ['좋음', '--color-good'];
  if (value >= 31 && value <= 80) return ['보통', '--color-fine'];
  if (value >= 81 && value <= 150) return ['나쁨', '--color-warn'];
  if (value >= 151) return ['매우나쁨', '--color-bad'];
  return ['알수없음', '--color-bad'];
};

export const convertPm25ToString = (value: number): [ReturnType, ColorType] => {
  if (value >= 0 && value <= 15) return ['좋음', '--color-good'];
  if (value >= 16 && value <= 50) return ['보통', '--color-fine'];
  if (value >= 51 && value <= 100) return ['나쁨', '--color-warn'];
  if (value >= 101) return ['매우나쁨', '--color-bad'];
  return ['알수없음', '--color-bad'];
};
