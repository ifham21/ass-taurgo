import React, { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isToday } from "date-fns";
import "./CustomCalendar.css";

const CustomCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Navigate months
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  // Render calendar days
  const renderDays = () => {
    const startDate = startOfWeek(startOfMonth(currentMonth));
    const endDate = endOfWeek(endOfMonth(currentMonth));
    const days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days.map((day, index) => (
      <div
        key={index}
        className={`cc-day ${!isSameMonth(day, currentMonth) ? "cc-disabled" : ""} ${
          isToday(day) ? "cc-today" : ""
        } ${selectedDate.toDateString() === day.toDateString() ? "cc-selected" : ""}`}
        onClick={() => isSameMonth(day, currentMonth) && setSelectedDate(day)}
      >
        {day.getDate()}
      </div>
    ));
  };

  return (
    <div className="cc-calendar-container">
      {/* Header */}
      <div className="cc-header">
        <button onClick={prevMonth} className="cc-nav-button">
          ❮
        </button>
        <div className="cc-month-year">{format(currentMonth, "MMMM yyyy")}</div>
        <button onClick={nextMonth} className="cc-nav-button">
          ❯
        </button>
      </div>

      {/* Input and Today Button */}
      <div className="cc-controls">
        <input
          type="text"
          value={format(selectedDate, "MMM dd, yyyy")}
          readOnly
          className="cc-date-input"
        />
        <button
          onClick={() => {
            const today = new Date();
            setCurrentMonth(today);
            setSelectedDate(today);
          }}
          className="cc-today-button"
        >
          Today
        </button>
      </div>

      {/* Week Days */}
      <div className="cc-week-days">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
          <div key={day} className="cc-week-day">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="cc-calendar-days">{renderDays()}</div>
    </div>
  );
};

export default CustomCalendar;
