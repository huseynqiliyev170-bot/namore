"use client";

import { useState, useContext } from "react";
import { BasicContext } from "@context/basicContext";

const BookingCheckoutForm = ({
  roomID,
  nights,
  price,
  checkInDate,
  checkOutDate,
  roomType,
  roomTypeId,
}) => {
  const { strings } = useContext(BasicContext);
  const [loading, setLoading] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessNotice(false);
    setErrorNotice(false);

    const form = e.currentTarget;            // ✅ сохраняем форму сразу
    const formData = new FormData(form);

    const payload = {
      first_name: String(formData.get("firstName") || "").trim(),
      last_name: String(formData.get("lastName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phoneNumber") || "").trim(),

      room_id: String(roomID || "").trim(),
      room_type: String(roomType || "").trim(),
      room_type_id: String(roomTypeId || "").trim(),

      check_in_date: checkInDate,
      check_out_date: checkOutDate,
      nights: Number(nights) || 0,
      price: Number(price) || 0,
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data?.error) {
        console.error("BOOKING FAILED:", data);
        setErrorNotice(true);
        return;
      }

      form.reset();                    // ✅ теперь не null
      setSuccessNotice(true);
    } catch (err) {
      console.error("REQUEST FAILED:", err);
      setErrorNotice(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="mil-field-frame mil-mb-20">
          <label>{strings.firstName}</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            required
          />
        </div>

        <div className="mil-field-frame mil-mb-20">
          <label>{strings.lastName}</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Doe"
            required
          />
        </div>

        <div className="mil-field-frame mil-mb-20">
          <label>{strings.emailAddress}</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your-email@gmail.com"
            required
          />
        </div>

        <div className="mil-field-frame mil-mb-20">
          <label>{strings.phoneNumber}</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="+7 999 123-45-67"
            required
          />
        </div>

        <button
          type="submit"
          className="mil-button mil-accent-1"
          disabled={loading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bookmark"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>{loading ? strings.loading : (strings.confirm || "Подтвердить")}</span>
        </button>

        {successNotice && (
          <div className="form-status alert-success mil-p-30-0">
            {strings?.success || "Бронь отправлена! С вами скоро свяжутся."}
          </div>
        )}

        {errorNotice && (
          <div className="form-status alert-error mil-p-30-0">
            {strings?.error || "Ошибка отправки. Попробуйте ещё раз."}
          </div>
        )}
      </form>
    </>
  );
};

export default BookingCheckoutForm;