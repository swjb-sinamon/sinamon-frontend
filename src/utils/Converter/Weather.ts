type ReturnType =
  | '🌞해가 쨍쨍'
  | '🌧비가 주륵'
  | '☁흐려요'
  | '⛄눈이 펑펑'
  | '알수없음'
  | '🌙고요한 밤';

const convertWeatherStatusToString = (status: string): ReturnType => {
  if (status === 'CLEAR' && new Date().getHours() >= 20) {
    return '🌙고요한 밤';
  }
  switch (status) {
    case 'CLEAR':
      return '🌞해가 쨍쨍';
    case 'RAIN':
      return '🌧비가 주륵';
    case 'CLOUDS':
      return '☁흐려요';
    case 'SNOW':
      return '⛄눈이 펑펑';
    default:
      return '알수없음';
  }
};

export default convertWeatherStatusToString;
