import BookingSearchForm from "@components/forms/BookingSearchForm";

const RoomsSearch = ( { checkInDate, checkOutDate, capacity } ) => {
    return (
        <>
            {/* search panel */}
            <div className="mil-content-pad mil-search-window">
                <div className="container">
                    <div className="mil-search-panel mil-panel-2">
                        <BookingSearchForm checkInDate={checkInDate} checkOutDate={checkOutDate} capacity={capacity} />
                    </div>
                </div>
            </div>
            {/* search panel end */}
        </>
    )
};
export default RoomsSearch;
