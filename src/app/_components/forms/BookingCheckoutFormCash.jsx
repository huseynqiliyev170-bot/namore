"use client";

import { useState } from "react";
import { useContext } from 'react';
import { BasicContext } from "@context/basicContext";

const BookingCheckoutForm = ( { roomID, nights, price, checkInDate, checkOutDate, roomType, roomTypeId } ) => {
    const { strings } = useContext(BasicContext);
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const bookingData = {
          check_in_date: checkInDate,
          check_out_date: checkOutDate,
          nights,
          room_id: roomID,
          price,
          roomType,
          roomTypeId,
          first_name: formData.get("firstName"),
          last_name: formData.get("lastName"),
          email: formData.get("email"),
          phone_number: formData.get("phoneNumber"),
        };

        try {
          const response = await fetch("/api/cash", {
            method: "POST",
            body: JSON.stringify(bookingData),
          });
    
          if (response.ok) {
            const payment = await response.json();
            window.location.href = payment.url;
          } else {
            console.log("Error submitting form:", response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
          setLoading(false);
        }
    };

    return (
      <>
        <form onSubmit={handleFormSubmit}>
            <div className="mil-field-frame mil-mb-20">
                <label>{strings.firstName}</label>
                <input type="text" name="firstName" id="firstName" placeholder="Jonh" required />
            </div>
            <div className="mil-field-frame mil-mb-20">
                <label>{strings.lastName}</label>
                <input type="text" name="lastName" id="lastName" placeholder="Doe" required />
            </div>
            <div className="mil-field-frame mil-mb-20">
                <label>{strings.emailAddress}</label>
                <input type="email" name="email" id="email" placeholder="your-email@gmail.com" required />
            </div>
            <div className="mil-field-frame mil-mb-20">
                <label>{strings.phoneNumber}</label>
                <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="+1 0916 123 12 32" required />
            </div>
            <button type="submit" className="mil-button mil-accent-1" disabled={loading}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>{loading ? strings.loading : strings.confirmAndPay}</span>
            </button>
        </form>
      </>
    );
  };
  export default BookingCheckoutForm;