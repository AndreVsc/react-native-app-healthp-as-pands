export const TIME_OPTIONS_HOURS = (() => {
  const times = [];
  const periods = ['AM', 'PM'];

  for (const period of periods) {
    for (let hour = 1; hour <= 12; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        const formattedHour = hour < 10 ? `0${hour}` : hour;
        const formattedMinute = minute < 10 ? `0${minute}` : minute;
        const label = `${formattedHour}:${formattedMinute} ${period}`;
        const value = `${formattedHour}:${formattedMinute} ${period}`;
        times.push({ label, value });
      }
    }
  }

  return times;
})();
