export interface WeatherType {
  readonly weather: string;
  readonly temp: number;
  readonly dust: DustType;
}

export interface DustType {
  readonly pm25: number;
  readonly pm10: number;
}
