import UserBookingsDataTable from "@/components/tables/UserBookingsDataTable";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useGetSingleUserBookingsQuery } from "@/redux/features/bookings/bookingApi";
import { useGetSingleUserQuery } from "@/redux/features/users/userApi";
import { useAppSelector } from "@/redux/hooks";

const PastBookings = () => {
  const user = useAppSelector(selectUser);
  
  const { data: userData = {}, isLoading } = useGetSingleUserQuery(user?.email);
  
  const { data: bookingsData = [], isLoading: bookingIsLoading } =
    useGetSingleUserBookingsQuery(userData?.data?._id);

  if (isLoading) return <p>Loading...</p>;
  
  const pastBookings = bookingsData?.data?.filter((booking) => {
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
