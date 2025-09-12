import React, { useState, useEffect } from "react";

const StatsCard = ({ title, count, subtitle, icon: Icon }) => {
  return (
    <div
      className="bg-white border rounded-3xl p-5 flex items-center justify-between"
      style={{ borderColor: "#DFEAF2" }}
    >
      <div>
        <h4 className="text-sm font-semibold text-gray-700">{title}</h4>
        <p className="text-4xl font-bold text-black mt-2">{count}</p>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>
      <div className="-mt-16">
        <Icon />
      </div>
    </div>
  );
};

const TotalAppointmentsIcon = () => (
  <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
    <path
      d="M26.6667 9.99999H30C30.5304 9.99999 31.0391 10.2107 31.4142 10.5858C31.7893 10.9609 32 11.4696 32 12V32C32 32.5304 31.7893 33.0391 31.4142 33.4142C31.0391 33.7893 30.5304 34 30 34H10C9.46957 34 8.96086 33.7893 8.58579 33.4142C8.21071 33.0391 8 32.5304 8 32V12C8 11.4696 8.21071 10.9609 8.58579 10.5858C8.96086 10.2107 9.46957 9.99999 10 9.99999H13.3333V7.99999H16V9.99999H24V7.99999H26.6667V9.99999ZM10 32H30V16H10V32ZM13.3333 20H18V24H13.3333V20ZM21.3333 20H26.6667V24H21.3333V20ZM13.3333 26.6667H18V30H13.3333V26.6667ZM21.3333 26.6667H26.6667V30H21.3333V26.6667Z"
      fill="#3C3C3C"
    />
  </svg>
);

const SlotAppointmentsIcon = () => (
  <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
    <path
      d="M20 34C27.732 34 34 27.732 34 20C34 12.268 27.732 6 20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34Z"
      stroke="#3C3C3C"
      strokeWidth="2"
    />
    <path
      d="M20 12V20L25 24"
      stroke="#3C3C3C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Overview = ({ appointments, error }) => {
  const [stats, setStats] = useState({
    total: 0,
    mondayWednesday: 0,
    thursdayFriday: 0,
    saturdaySunday: 0,
  });

  useEffect(() => {
    if (appointments?.length > 0) {
      const mondayWednesdayCount = appointments.filter(
        (a) => a.selectedWindow === "Mon-Wed" || a.selectedWindow === "Monday - Wednesday"
      ).length;
      const thursdayFridayCount = appointments.filter(
        (a) => a.selectedWindow === "Thu-Fri" || a.selectedWindow === "Thursday - Friday"
      ).length;
      const saturdaySundayCount = appointments.filter(
        (a) => a.selectedWindow === "Sat-Sun" || a.selectedWindow === "Saturday - Sunday"
      ).length;

      setStats({
        total: appointments.length,
        mondayWednesday: mondayWednesdayCount,
        thursdayFriday: thursdayFridayCount,
        saturdaySunday: saturdaySundayCount,
      });
    } else {
      // Reset stats when no appointments
      setStats({
        total: 0,
        mondayWednesday: 0,
        thursdayFriday: 0,
        saturdaySunday: 0,
      });
    }
  }, [appointments]);

  if (error)
    return (
      <div className="p-5">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error loading appointments: {error}
        </div>
      </div>
    );

  return (
    <div className="p-5">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Overview</h2>
        <p className="text-sm text-gray-600 mt-1">
          Manage your tarot reading appointments and track performance
        </p>
      </div>

      {/* All Stats in One Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard
          title="Total Appointments"
          count={stats.total}
          subtitle="All scheduled readings"
          icon={TotalAppointmentsIcon}
        />
        <StatsCard
          title="Monday - Wednesday"
          count={stats.mondayWednesday}
          subtitle="Appointments in this slot"
          icon={SlotAppointmentsIcon}
        />
        <StatsCard
          title="Thursday - Friday"
          count={stats.thursdayFriday}
          subtitle="Appointments in this slot"
          icon={SlotAppointmentsIcon}
        />
        <StatsCard
          title="Saturday - Sunday"
          count={stats.saturdaySunday}
          subtitle="Appointments in this slot"
          icon={SlotAppointmentsIcon}
        />
      </div>
    </div>
  );
};

export default Overview;