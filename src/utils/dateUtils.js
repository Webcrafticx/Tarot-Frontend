export const parseWindowDays = (windowName) => {
  const windowLower = windowName.toLowerCase();
  let availableDays = [];
  
  if (windowLower.includes('mon-wed')) {
    availableDays = [1, 2, 3];
  } else if (windowLower.includes('thu-fri')) {
    availableDays = [4, 5];
  } else if (windowLower.includes('sat-sun')) {
    availableDays = [6, 0];
  } else {
    if (windowLower.includes('mon')) availableDays.push(1);
    if (windowLower.includes('tue')) availableDays.push(2);
    if (windowLower.includes('wed')) availableDays.push(3);
    if (windowLower.includes('thu')) availableDays.push(4);
    if (windowLower.includes('fri')) availableDays.push(5);
    if (windowLower.includes('sat')) availableDays.push(6);
    if (windowLower.includes('sun')) availableDays.push(0);
  }
  
  return availableDays;
};

export const getWindowDateRange = (windowName) => {
  const now = new Date();
  const currentDay = now.getDay();
  
  const availableDays = parseWindowDays(windowName);
  if (availableDays.length === 0) return null;
  
  const maxDayInWindow = Math.max(...availableDays);
  const minDayInWindow = Math.min(...availableDays);
  
  const needNextWeek = currentDay > maxDayInWindow;
  
  let startDate = new Date(now);
  let endDate = new Date(now);
  
  if (needNextWeek) {
    const daysToNextWeekStart = 7 - currentDay + minDayInWindow;
    const daysToNextWeekEnd = 7 - currentDay + maxDayInWindow;
    startDate.setDate(now.getDate() + daysToNextWeekStart);
    endDate.setDate(now.getDate() + daysToNextWeekEnd);
  } else {
    const daysToWindowStart = minDayInWindow - currentDay;
    const daysToWindowEnd = maxDayInWindow - currentDay;
    startDate.setDate(now.getDate() + daysToWindowStart);
    endDate.setDate(now.getDate() + daysToWindowEnd);
  }
  
  // Reset time to beginning of the day
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);
  
  return {
    startDate,
    endDate,
    isNextWeek: needNextWeek,
    isCurrentlyActive: availableDays.includes(currentDay) && !needNextWeek
  };
};

export const formatDateRangeForDisplay = (startDate, endDate) => {
  const startOptions = { 
    weekday: 'short',
    day: 'numeric'
  };
  const endOptions = { 
    weekday: 'short',
    day: 'numeric', 
    month: 'short' 
  };
  
  if (startDate.getMonth() === endDate.getMonth()) {
    const startDay = startDate.toLocaleDateString('en-IN', startOptions);
    const endDay = endDate.toLocaleDateString('en-IN', endOptions);
    return `${startDay} - ${endDay}`;
  } else {
    const startOptions = { 
      weekday: 'short',
      day: 'numeric', 
      month: 'short' 
    };
    const startDay = startDate.toLocaleDateString('en-IN', startOptions);
    const endDay = endDate.toLocaleDateString('en-IN', endOptions);
    return `${startDay} - ${endDay}`;
  }
};

export const formatDatesForPayload = (startDate, endDate) => {
  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    displayDate: formatDateRangeForDisplay(startDate, endDate)
  };
};

export const isWindowCurrentlyAvailable = (windowName) => {
  const windowInfo = getWindowDateRange(windowName);
  return windowInfo ? windowInfo.isCurrentlyActive : false;
};