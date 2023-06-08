import { useState } from "react";
import { FindBooking } from "./FindBooking";
import { ShowBooking } from "./ShowBooking";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { deleteBooking, getBookingById } from "../../services/bookingService";

export const HandleBooking = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [booking, setBooking] = useState<IBooking>(defaultBooking);

  const searchIdForBooking = async (id: string) => {
    setBooking(await getBookingById(id));
    setShowBooking(true);
  };

  const removeBooking = async (id: string) => {
    const response = await deleteBooking(id);
    console.log(response);
  };

  return (
    <>
      {!showBooking ? (
        <FindBooking searchBooking={searchIdForBooking}></FindBooking>
      ) : (
        <ShowBooking
          booking={booking}
          removeBookingById={removeBooking}
        ></ShowBooking>
      )}
    </>
  );
};