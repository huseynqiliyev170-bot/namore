"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useContext } from 'react';
import { BasicContext } from "@context/basicContext";

const DirectBookingForm = ( { roomTypeId, roomId, bookedDatesByRooms = [] } ) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [maxDateDatepicker, setMaxDateDatepicker] = useState(null);
    const router = useRouter();
    const [error, setError] = useState("");
    const { strings } = useContext(BasicContext);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (!endDate) {
            setError("Please add a check out date");
            document.querySelector('.mil-field-frame-end').classList.add('focused');
        } else {
          const formattedCheckInDate = format(startDate, "yyyy-MM-dd");
          const formattedCheckOutDate = format(endDate, "yyyy-MM-dd");
          
          const checkAvailabilityData = {
            checkInDate: formattedCheckInDate,
            checkOutDate: formattedCheckOutDate
          }
          router.push(`/booking-confirmation?checkInDate=${checkAvailabilityData.checkInDate}&checkOutDate=${checkAvailabilityData.checkOutDate}&roomId=${roomId}&roomTypeId=${roomTypeId}`)
        }
    }

    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentEndDate = ''+year+'-'+month+'-'+(date+1)+'T00:00:00';

    const getDaysArray = function(start, end) {
        const arr = [];
        for(const dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
            arr.push(new Date(dt));
        }
        return arr;
    };

    let allDates = [];
    let excludedDates = [];

    bookedDatesByRooms.map((room) => {
        room.reservations.map((order) => {
            allDates = allDates.concat(getDaysArray(new Date(order.check_in_date), new Date(order.check_out_date)));
        });
    });

    const datesRepeatInAllRooms = (arr,count) =>
        arr.reduce(([obj,res],a) => {
          obj[a] = obj[a] + 1 || 1;
          if(obj[a] === count) res.push(a);
          return [obj,res]
        },[{},[]])[1];

    excludedDates = datesRepeatInAllRooms(allDates, bookedDatesByRooms.length);

    const changeStartRangeHandler = (start) => {
        setStartDate(start);
        setMaxDateDatepicker(null);

        if (excludedDates.length > 0) {
            for (const date of excludedDates) {
                if (date >= new Date(start)) {
                    setMaxDateDatepicker(date);
                    break;
                }
            }
        }
    };

    return (
      <>
        <form onSubmit={handleFormSubmit}>
            <div className="mil-field-frame mil-field-frame-start mil-mb-20">
                <label>{strings.checkIn}</label>
                <DatePicker 
                    selected={startDate} 
                    onChange={(date) => changeStartRangeHandler(date)} 
                    selectsStart 
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    placeholderText={strings.selectDate} 
                    dateFormat="dd/MM/yyyy" 
                    excludeDates={excludedDates}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            </div>
            <div className="mil-field-frame mil-field-frame-end mil-mb-20">
                <label>{strings.checkOut}</label>
                <DatePicker 
                    selected={endDate} 
                    onChange={(date) => { setEndDate(date); document.querySelector('.mil-field-frame-end').classList.remove('focused'); } } 
                    selectsEnd 
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate ? startDate : new Date(currentEndDate)}
                    maxDate={maxDateDatepicker}
                    placeholderText={strings.selectDate} 
                    dateFormat="dd/MM/yyyy"
                    excludeDates={excludedDates}
                    shouldCloseOnSelect 
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            </div>
            <button type="submit" className="mil-button mil-accent-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>{strings.bookNow}</span>
            </button>
        </form>
      </>
    );
  };
  export default DirectBookingForm;