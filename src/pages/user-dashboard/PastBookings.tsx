import UserBookingsDataTable from "@/components/tables/UserBookingsDataTable";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useGetSingleUserBookingsQuery } from "@/redux/features/bookings/bookingApi";
import { useAppSelector } from "@/redux/hooks";

const PastBookings = () => {
  const user = useAppSelector(selectUser);
  
  //@ts-ignore
  const { data: bookingsData = [], isLoading } = useGetSingleUserBookingsQuery(user?._id);

  if (isLoading) return <p>Loading...</p>;
  
  const pastBookings = bookingsData?.data?.filter((booking:TBooking) => {
    const startTimeInMs = new Date(
      `${booking.slot.date}T${booking.slot.startTime}`
    ).getTime();
    // Present time in milliseconds
    const presentTimeInMs = new Date().getTime();
    
    return startTimeInMs < presentTimeInMs;
  });
  
  return <div>
    <UserBookingsDataTable bookingsData={pastBookings} />
  </div>;
};

export default PastBookings;
