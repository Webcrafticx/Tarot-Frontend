import React, { useState, useEffect } from "react";
import { getAvailabilityWindows, setAvailability } from "../../services/window";

const dayMap = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

const expandDays = (range) => {
  if (!range) return [];
  const parts = range.split("-");
  if (parts.length === 1) return [dayMap[parts[0]] || parts[0]];

  const allDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const start = allDays.indexOf(parts[0]);
  const end = allDays.indexOf(parts[1]);

  if (start === -1 || end === -1) return [range];

  let expanded = [];
  if (start <= end) {
    expanded = allDays.slice(start, end + 1);
  } else {
    expanded = [...allDays.slice(start), ...allDays.slice(0, end + 1)];
  }
  return expanded.map((d) => dayMap[d]);
};

const ActiveWindow = () => {
  const [windows, setWindows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWindows = async () => {
      try {
        setLoading(true);
        const result = await getAvailabilityWindows();
        if (result.success) {
          const formatted = result.data.map((w, i) => ({
            id: w._id || i,
            name: w.windowName,
            expanded: expandDays(w.windowName),
            active: w.isAvailable,
          }));
          setWindows(formatted);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchWindows();
  }, []);

  const toggleWindow = async (window) => {
    const newStatus = !window.active;
    try {
      await setAvailability(window.name, newStatus); // API call
      setWindows((prev) =>
        prev.map((w) =>
          w.id === window.id ? { ...w, active: newStatus } : w
        )
      );
    } catch (err) {
      console.error("Error updating window:", err);
      alert("Failed to update availability");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading windows...</p>;

  return (
    <div className="p-6 font-sans max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Window Manager</h2>
      <p className="text-sm text-gray-600 mb-5">
        Manage your window visibility based on day of the week
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {windows.map((window) => (
          <div
            key={window.id}
            className={`border-2 rounded-lg p-5 transition-all ${
              window.active
                ? "border-green-500 bg-green-50"
                : "border-gray-300 bg-gray-50 opacity-70"
            }`}
          >
            <h2
              className={`flex justify-between items-center ${
                window.active ? "text-green-600" : "text-gray-500"
              }`}
            >
              {/* Range title */}
              {window.expanded.length > 1
                ? `${window.expanded[0]}–${
                    window.expanded[window.expanded.length - 1]
                  }`
                : window.expanded[0]}
              <span
                className={`inline-block w-3 h-3 rounded-full ${
                  window.active ? "bg-green-500" : "bg-gray-400"
                }`}
              ></span>
            </h2>

            <p className="text-gray-600 text-sm mt-2">
              Active on: {window.expanded.join(", ")}
            </p>

            <button
              onClick={() => toggleWindow(window)}
              className={`w-full mt-4 py-2 px-4 text-white font-bold rounded cursor-pointer ${
                window.active
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {window.active ? "Turn Off" : "Turn On"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveWindow;
