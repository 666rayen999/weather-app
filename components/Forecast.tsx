import Icon from "./Icon";
import { forecast_day } from "./Interface";

const Forecast = ({
  day,
  idx,
}: Readonly<{ day: forecast_day[]; idx: number }>) => {
  const days = [
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ] as const;

  const getDay = (time: number) => days[new Date(time * 1000).getDay()];

  return (
    <div className="w-full max-w-96 flex flex-row items-center justify-between gap-8 bg-gray6-dark sm:bg-gray6-dark/50 hover:bg-gray6-dark duration-200 px-6 py-2 rounded-xl">
      <h1 className="subhead text-white">
        {idx == 0 ? "Tomorrow" : getDay(day[0].dt)}
      </h1>
      <div className="flex flex-row w-40 justify-between items-center gap-8">
        <div className="flex flex-row gap-1 justify-center items-center">
          <Icon className="w-8 h-8" icon={day[0].weather[0].icon} />
          <h1 className="body text-gray3-light">{day[0].main.temp}°</h1>
        </div>
        <div className="flex flex-row gap-1 justify-center items-center">
          <h1 className="body text-white">{day[1].main.temp}°</h1>
          <Icon className="w-8 h-8" icon={day[1].weather[0].icon} />
        </div>
      </div>
    </div>
  );
};

export default Forecast;
