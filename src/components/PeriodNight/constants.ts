export const TIME_OPTIONS_HOURS = Array.from({ length: 12 }, (_, i) => ({
  label: `${i < 9 ? `0${i+1}` : i+1}`,
  value: i + 1,
}));

export const TIME_OPTIONS_MINUTES = (() => {
  const times = [];
  for (let minute = 0; minute < 60; minute++) {
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    const label = `${formattedMinute}`;
    const value = `${minute}`;
    times.push({ label, value });
  }
  return times;
})();

export const TIME_OPTIONS_PERIODS = [
  { label: 'AM', value: 'AM' },
  { label: 'PM', value: 'PM' },
];
