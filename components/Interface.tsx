interface location {
  latitude: number;
  longitude: number;
}

interface weather {
  weather: [{ description: string; icon: string }];
  main: { temp: number; humidity: number };
  sys: { country: string };
  name: string;
}

interface forecast_day {
  dt: number;
  main: { temp: number };
  weather: [{ icon: string }];
}

interface forecast {
  city: { name: string };
  list: forecast_day[];
}

export type { location, weather, forecast_day, forecast };
