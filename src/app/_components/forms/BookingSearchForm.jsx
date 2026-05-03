"use client";

import { useContext, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays, differenceInCalendarDays } from "date-fns";
import { BasicContext } from "@context/basicContext";

const BookingSearchForm = ({
  checkInDate = "",
  checkOutDate = "",
  capacity = 1,
}) => {
  const router = useRouter();
  const { strings } = useContext(BasicContext);

  const initialStartDate = useMemo(
    () => (checkInDate ? new Date(checkInDate) : new Date()),
    [checkInDate]
  );

  const initialEndDate = useMemo(
    () => (checkOutDate ? new Date(checkOutDate) : addDays(initialStartDate, 1)),
    [checkOutDate, initialStartDate]
  );

  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [error, setError] = useState("");

  const nights = endDate ? differenceInCalendarDays(endDate, startDate) : 1;

  const handleStartDateChange = (date) => {
    if (!date) return;

    setStartDate(date);

    if (!endDate || date >= endDate) {
      setEndDate(addDays(date, 1));
    }

    setError("");
  };

  const handleEndDateChange = (date) => {
    if (!date) return;

    setEndDate(date);
    setError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const selectedCapacity = formData.get("capacity");

    if (!startDate || !endDate) {
      setError("Выберите даты заезда и выезда");
      return;
    }

    if (differenceInCalendarDays(endDate, startDate) < 1) {
      setError("Минимум 1 ночь проживания");
      return;
    }

    router.push(
      `/rooms?checkInDate=${format(startDate, "yyyy-MM-dd")}&checkOutDate=${format(
        endDate,
        "yyyy-MM-dd"
      )}&capacity=${selectedCapacity}`
    );
  };

  return (
    <form onSubmit={handleFormSubmit} className="mil-lux-booking">
      <div className="mil-lux-booking__head">
        <span>Reservation</span>
        <p>Подберите идеальные даты для отдыха</p>
      </div>

      <div className="mil-lux-booking__grid">
        <div className="mil-lux-booking__field">
          <label>{strings.checkIn || "Дата заезда"}</label>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            placeholderText="Выберите дату"
            dateFormat="dd/MM/yyyy"
          />
          <CalendarIcon />
        </div>

        <div className="mil-lux-booking__field">
          <label>{strings.checkOut || "Дата выезда"}</label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={addDays(startDate, 1)}
            placeholderText="Выберите дату"
            dateFormat="dd/MM/yyyy"
          />
          <CalendarIcon />
        </div>

        <div className="mil-lux-booking__field">
          <label>{strings.adults || "Гости"}</label>
          <input
            type="number"
            min="1"
            max="12"
            step="1"
            name="capacity"
            defaultValue={capacity}
            placeholder="1"
          />
          <GuestsIcon />
        </div>

        <div className="mil-lux-booking__nights">
          <strong>
            {nights > 0 ? `${nights} ${nights === 1 ? "ночь" : "ночи"}` : "1 ночь"}
          </strong>
        </div>

        <button
          type="submit"
          className="mil-lux-booking__submit"
          aria-label="Найти номер"
        >
          <SearchIcon />
          <span>Найти номер</span>
        </button>
      </div>

      {error && <div className="mil-lux-booking__error">{error}</div>}
    </form>
  );
};

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const GuestsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

export default BookingSearchForm;