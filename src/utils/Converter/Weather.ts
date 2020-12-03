type ReturnType = '맑음' | '비' | '흐림' | '눈' | '안개' | '알수없음';

const convertWeatherStatusToString = (status: string): ReturnType => {
  switch (status) {
    case 'CLEAR':
      return '맑음';
    case 'RAIN':
      return '비';
    case 'CLOUDS':
      return '흐림';
    case 'SNOW':
      return '눈';
    case 'HAZE':
    case 'MIST':
      return '안개';
    default:
      return '알수없음';
  }
};

export default convertWeatherStatusToString;
