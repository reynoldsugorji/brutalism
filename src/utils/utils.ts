export const formatXAxis = (value: string = "", range: "7days" | "14days") => {
  if (range !== "7days") {
    const rangeValue = value.split(" ");
    return `${rangeValue[0].slice(0, 3)} ${rangeValue[1]}`;
  }
  return value;
};
