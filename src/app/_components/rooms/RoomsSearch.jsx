import BookingSearchForm from "@components/forms/BookingSearchForm";

const RoomsSearch = ({ checkInDate, checkOutDate, capacity }) => {
  return (
    <section className="besmile-rooms-search">
      <div className="container">
        <div className="besmile-rooms-search__panel">
          <BookingSearchForm
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            capacity={capacity}
          />
        </div>
      </div>
    </section>
  );
};

export default RoomsSearch;