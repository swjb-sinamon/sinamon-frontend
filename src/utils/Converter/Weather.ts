type ReturnType =
  | '🌞해가 쨍쨍'
  | '🌧비가 주륵'
  | '☁흐려요'
  | '⛄눈이 펑펑'
  | '알수없음'
  | '🌙고요한 밤'
  | '☁안개조심!';

const convertWeatherStatusToString = (status: string): ReturnType => {
  const hours = new Date().getHours();
  if (status === 'CLEAR' && hours >= 20 && hours <= 6) {
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
    case 'HAZE':
    case 'MIST':
      return '☁안개조심!';
    default:
      return '알수없음';
  }
};

export default convertWeatherStatusToString;
