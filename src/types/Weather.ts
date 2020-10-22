export interface WeatherType {
  readonly weather: string;
  readonly dust: DustType;
}

export interface DustType {
  readonly pm25: number;
  readonly pm10: number;
}
