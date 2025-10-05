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
  const currentDate = now.getDate();
  const currentMonth = now.getMonth();
  
  const availableDays = parseWindowDays(windowName);
  if (availableDays.length === 0) return null;
  
  const isSatSunWindow = windowName.toLowerCase().includes('sat-sun');
  
  let startDate = new Date(now);
  let endDate = new Date(now);
  let isCurrentlyActive = false;
  
  // Calculate start and end dates
  if (isSatSunWindow) {
    // Sat-Sun window logic (same as before)
    if (currentDay === 6) {
      startDate.setDate(currentDate);
      endDate.setDate(currentDate + 1);
      isCurrentlyActive = true;
    } else if (currentDay === 0) {
      startDate.setDate(currentDate - 1);
      endDate.setDate(currentDate);
      isCurrentlyActive = true;
    } else {
      const daysToSaturday = 6 - currentDay;
      startDate.setDate(currentDate + daysToSaturday);
      endDate.setDate(currentDate + daysToSaturday + 1);
      isCurrentlyActive = false;
    }
  } else {
    // For Mon-Wed, Thu-Fri windows
    const minDay = Math.min(...availableDays);
    const maxDay = Math.max(...availableDays);
    
    let daysToStart = minDay - currentDay;
    if (daysToStart <= 0) daysToStart += 7; // Move to next week
    
    const daysToEnd = maxDay - currentDay;
    
    startDate.setDate(currentDate + daysToStart);
    endDate.setDate(currentDate + (daysToEnd <= 0 ? daysToEnd + 7 : daysToEnd));
    isCurrentlyActive = (currentDay >= minDay && currentDay <= maxDay);
  }
  
  // Reset time
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);
  
  // Better next week detection
  const weekDifference = Math.floor((startDate - now) / (7 * 24 * 60 * 60 * 1000));
  const isNextWeek = weekDifference >= 1 || startDate.getMonth() !== currentMonth;
  
  return {
    startDate,
    endDate,
    isNextWeek,
    isCurrentlyActive
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