import Forecast from "./Forecast";
import Icon from "./Icon";
import { forecast, forecast_day, weather } from "./Interface";

const Weather = ({
  weather,
  forecast,
}: Readonly<{ weather: weather; forecast: forecast }>) => {

  const getHour = (time: number) => {
    const date = new Date(time * 1000);
    return date.getHours();
  }

  const isMid = (hour: number) => (
    (hour > 10 && hour < 14) || hour > 20
  )

  console.log(forecast.list[0].weather[0].icon);

  const getForecast = () =>
    forecast.list.filter((value => isMid(getHour(value.dt)))).reduce((res: forecast_day[][], _, idx: number, arr) => {
      if ((idx & 1) == 0) {
        const x1: forecast_day = {
          dt: arr[idx].dt,
          main: {
            temp: arr[idx].main.temp >> 0,
          },
          weather: [{ icon: arr[idx].weather[0].icon }],
        };
        if (arr[idx + 1]) {
          const x2: forecast_day = {
            dt: arr[idx + 1].dt,
            main: {
              temp: arr[idx + 1].main.temp >> 0,
            },
            weather: [{ icon: arr[idx + 1].weather[0].icon }],
          };
          res.push([x1, x2]);
        }
      }
      return res;
    }, []);

  return (
    <div className="w-full flex flex-col justtify-center items-center px-8 py-32 sm:py-16">
      <Icon
        className="absolute inset-0 top-0 left-0 -z-10 w-full h-full blur-[8rem] invert opacity-25"
        icon={weather.weather[0].icon}
      />
      <h1 className="title-1 text-white">
        {weather.name}{" "}
        <span className="subhead text-white">{weather.sys.country}</span>
      </h1>
      <div className="flex flex-row justify-center items-center py-4">
        <h1 className="text-8xl font-bold text-white">
          {weather.main.temp >> 0}
        </h1>
        <Icon className="w-28 h-28" icon={weather.weather[0].icon} />
      </div>
      <h1 className="footnote text-white">{weather.weather[0].description} </h1>
      <h1 className="footnote text-white">H: {weather.main.humidity}°</h1>
      <div className="w-full flex flex-col gap-2 items-center justify-center pt-32 sm:pt-24">
        <h1 className="text-white/80 font-medium text-sm w-full max-w-96 px-4">
          5-days forecast:
        </h1>
        {getForecast().map((day, idx) => (
          <Forecast key={idx} day={day} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Weather;
