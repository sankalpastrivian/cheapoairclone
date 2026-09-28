"use client";

import { useState } from "react";

type CalendarMode = "depart" | "return";

export default function FlightSearch() {
  const [from, setFrom] = useState("DEL - New Delhi, India");
  const [to, setTo] = useState("");

  const [departDate, setDepartDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarMode, setCalendarMode] =
    useState<CalendarMode>("depart");

  const [viewMonth, setViewMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  const [directFlights, setDirectFlights] = useState(false);

  const formatDate = (date: Date | null) => {
    if (!date) {
      return "Select date";
    }

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const sameDate = (a: Date | null, b: Date | null) => {
    if (!a || !b) return false;

    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const openDatePicker = (mode: CalendarMode) => {
    setCalendarMode(mode);
    setCalendarOpen(true);

    if (mode === "return" && departDate) {
      setViewMonth(
        new Date(
          departDate.getFullYear(),
          departDate.getMonth(),
          1
        )
      );
    }
  };

  const handleDateSelect = (date: Date) => {
    if (calendarMode === "depart") {
      setDepartDate(date);

      if (returnDate && returnDate < date) {
        setReturnDate(null);
      }

      setCalendarMode("return");
      return;
    }

    if (calendarMode === "return") {
      if (departDate && date < departDate) {
        return;
      }

      setReturnDate(date);
    }
  };

  const previousMonth = () => {
    setViewMonth(
      new Date(
        viewMonth.getFullYear(),
        viewMonth.getMonth() - 1,
        1
      )
    );
  };

  const nextMonth = () => {
    setViewMonth(
      new Date(
        viewMonth.getFullYear(),
        viewMonth.getMonth() + 1,
        1
      )
    );
  };

  const resetDates = () => {
    setDepartDate(null);
    setReturnDate(null);
    setCalendarMode("depart");
  };

  const closeCalendar = () => {
    setCalendarOpen(false);
  };

  const getMonthDays = (month: Date) => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();

    const firstDay = new Date(
      year,
      monthIndex,
      1
    ).getDay();

    const numberOfDays = new Date(
      year,
      monthIndex + 1,
      0
    ).getDate();

    return {
      firstDay,
      numberOfDays,
    };
  };

  const renderMonth = (month: Date) => {
    const { firstDay, numberOfDays } =
      getMonthDays(month);

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <span
          key={`empty-${month.getMonth()}-${i}`}
          className="calendar-empty"
        />
      );
    }

    for (let day = 1; day <= numberOfDays; day++) {
      const date = new Date(
        month.getFullYear(),
        month.getMonth(),
        day
      );

      const isPast = date < today;

      const isBeforeDeparture =
        calendarMode === "return" &&
        departDate &&
        date < departDate;

      const disabled =
        isPast || Boolean(isBeforeDeparture);

      const isDepart = sameDate(date, departDate);
      const isReturn = sameDate(date, returnDate);

      const isInRange =
        departDate &&
        returnDate &&
        date > departDate &&
        date < returnDate;

      const isToday = sameDate(date, today);

      days.push(
        <button
          key={`${month.getFullYear()}-${month.getMonth()}-${day}`}
          type="button"
          disabled={disabled}
          className={`
            calendar-day
            ${isDepart ? "selected-date" : ""}
            ${isReturn ? "selected-date" : ""}
            ${isInRange ? "date-in-range" : ""}
            ${isToday ? "today-date" : ""}
          `}
          onClick={() => handleDateSelect(date)}
        >
          {day}

          {isToday && (
            <span className="today-label">
              Today
            </span>
          )}
        </button>
      );
    }

    return days;
  };

  const leftMonth = viewMonth;

  const rightMonth = new Date(
    viewMonth.getFullYear(),
    viewMonth.getMonth() + 1,
    1
  );

  const leftMonthName =
    leftMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

  const rightMonthName =
    rightMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

  
  const handleSearch = () => {
    if (!from.trim()) {
      alert("Please enter a departure city or airport.");
      return;
    }

    if (!to.trim()) {
      alert("Please enter a destination.");
      return;
    }

    if (!departDate) {
      alert("Please select a departure date.");
      return;
    }

    alert(
      `Searching flights from ${from} to ${to}`
    );
  };

  return (
    <section className="flight-search">
      <div className="search-fields">

        

        <div className="search-field from-field">
          <i className="bi bi-airplane"></i>

          <div>
            <small>From</small>

            <input
              type="text"
              value={from}
              onChange={(e) =>
                setFrom(e.target.value)
              }
            />
          </div>
        </div>

        

        <button
          type="button"
          className="swap-button"
          onClick={() => {
            const oldFrom = from;

            setFrom(to);
            setTo(oldFrom);
          }}
        >
          <i className="bi bi-arrow-left-right"></i>
        </button>

        

        <div className="search-field">
          <i className="bi bi-airplane"></i>

          <div>
            <small>Where to?</small>

            <input
              type="text"
              value={to}
              placeholder="Where to?"
              onChange={(e) =>
                setTo(e.target.value)
              }
            />
          </div>
        </div>

        

        <div className="search-field date-field">
          <i className="bi bi-calendar3"></i>

          <button
            type="button"
            className="date-content"
            onClick={() =>
              openDatePicker("depart")
            }
          >
            <small>Depart</small>

            <strong>
              {formatDate(departDate)}
            </strong>
          </button>
        </div>

       

        <div className="search-field date-field">
          <i className="bi bi-calendar3"></i>

          <button
            type="button"
            className="date-content"
            onClick={() =>
              openDatePicker("return")
            }
          >
            <small>Return</small>

            <strong>
              {formatDate(returnDate)}
            </strong>
          </button>
        </div>

        

        <button
          type="button"
          className="search-button"
          onClick={handleSearch}
        >
          Search
        </button>

        

        {calendarOpen && (
          <div className="date-picker-overlay">

            <div className="date-picker">

              <div className="date-picker-top">

                <button
                  type="button"
                  className={`date-mode ${
                    calendarMode === "depart"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setCalendarMode("depart")
                  }
                >
                  <i className="bi bi-calendar3"></i>
                  <span>Depart</span>
                </button>

                <button
                  type="button"
                  className={`date-mode ${
                    calendarMode === "return"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setCalendarMode("return")
                  }
                >
                  <i className="bi bi-calendar3"></i>
                  <span>Return</span>
                </button>

                <div className="calendar-trip">
                  <strong>Round-trip</strong>
                  <i className="bi bi-chevron-down"></i>
                </div>

                <label className="direct-flight">
                  <input
                    type="checkbox"
                    checked={directFlights}
                    onChange={(e) =>
                      setDirectFlights(
                        e.target.checked
                      )
                    }
                  />

                  <span>
                    Direct Flights
                  </span>
                </label>

              </div>

              

              <div className="calendar-content">

                <div className="calendar-month">

                  <h3>{leftMonthName}</h3>

                  <div className="calendar-weekdays">
                    <span>S</span>
                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                    <span>T</span>
                    <span>F</span>
                    <span>S</span>
                  </div>

                  <div className="calendar-grid">
                    {renderMonth(leftMonth)}
                  </div>

                </div>

                <div className="calendar-month">

                  <h3>{rightMonthName}</h3>

                  <div className="calendar-weekdays">
                    <span>S</span>
                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                    <span>T</span>
                    <span>F</span>
                    <span>S</span>
                  </div>

                  <div className="calendar-grid">
                    {renderMonth(rightMonth)}
                  </div>

                </div>

              </div>

             

              <div className="calendar-footer">

                <button
                  type="button"
                  className="reset-button"
                  onClick={resetDates}
                >
                  Reset
                </button>

                <button
                  type="button"
                  className="done-button"
                  onClick={closeCalendar}
                >
                  Done
                </button>

              </div>

            
              <button
                type="button"
                className="calendar-next"
                onClick={nextMonth}
              >
                <i className="bi bi-chevron-right"></i>
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}