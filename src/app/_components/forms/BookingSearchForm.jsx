"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useContext } from 'react';
import { BasicContext } from "@context/basicContext";

const BookingSearchForm = ( { checkInDate = '', checkOutDate = '', capacity = 1, layoutType = 'row' } ) => {
    const [startDate, setStartDate] = useState(checkInDate ? new Date(checkInDate) : new Date());
    const [endDate, setEndDate] = useState(checkOutDate ? new Date(checkOutDate) : '');
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
            checkOutDate: formattedCheckOutDate,
            capacity: formData.get("capacity")
          }
          router.push(`/rooms?checkInDate=${checkAvailabilityData.checkInDate}&checkOutDate=${checkAvailabilityData.checkOutDate}&capacity=${checkAvailabilityData.capacity}`)
        }
    }

    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentEndDate = ''+year+'-'+month+'-'+(date+1)+'T00:00:00';

    return (
      <>
        <form onSubmit={handleFormSubmit}>
            {layoutType === 'row' ? ( 
            <>
                <div className="mil-form-grid">
                    <div className="mil-col-5 mil-field-frame">
                        <label>{strings.checkIn}</label>
                        <DatePicker 
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)} 
                            selectsStart 
                            startDate={startDate}
                            endDate={endDate}
                            minDate={new Date()}
                            placeholderText={"Select date"} 
                            dateFormat="dd/MM/yyyy" 
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                    <div className="mil-col-5 mil-field-frame mil-field-frame-end">
                        <label>{strings.checkOut}</label>
                        <DatePicker 
                            selected={endDate} 
                            onChange={(date) => { setEndDate(date); document.querySelector('.mil-field-frame-end').classList.remove('focused'); } } 
                            selectsEnd 
                            startDate={startDate}
                            endDate={endDate}
                            minDate={new Date(currentEndDate)}
                            placeholderText={"Select date"} 
                            dateFormat="dd/MM/yyyy" 
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                    <div className="mil-col-2 mil-field-frame">
                        <label>{strings.adults}</label>
                        <input type="number" placeholder="Enter quantity" name="capacity" defaultValue={capacity} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                </div>
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <span>{strings.search}</span>
                </button>
            </>
            ) : (
            <>
                <div className="mil-field-frame mil-mb-20">
                    <label>{strings.checkIn}</label>
                    <DatePicker 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)} 
                        selectsStart 
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        placeholderText="Select date" 
                        dateFormat="dd/MM/yyyy" 
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
                        minDate={new Date(currentEndDate)}
                        placeholderText="Select date" 
                        dateFormat="dd/MM/yyyy" 
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                </div>
                <div className="mil-field-frame mil-mb-20">
                    <label>{strings.adults}</label>
                    <input type="number" placeholder="Enter quantity" name="capacity" defaultValue={capacity} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <button type="submit" className="mil-button mil-accent-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <span>{strings.search}</span>
                </button>
            </>
            )}
        </form>
      </>
    );
  };
  export default BookingSearchForm;