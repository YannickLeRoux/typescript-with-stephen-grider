const add = (a: number, b: number): number => {
  return a + b;
};

// destructuring
const logWeather = ({date, weather}: {date: Date; weather: string}) => {
  console.log(date);
  console.log(weather);

}