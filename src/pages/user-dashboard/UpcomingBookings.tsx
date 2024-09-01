import UpcomingBookingItem from "@/components/others/UpcomingBookingItem";
import UserBookingsDataTable from "@/components/tables/UserBookingsDataTable";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useGetSingleUserBookingsQuery } from "@/redux/features/bookings/bookingApi";
import { useAppSelector } from "@/redux/hooks";
import { getUpcomingBookings } from "@/utils/getUpcomingBookings";

const UpcomingBookings = () => {
  const user = useAppSelector(selectUser);
  //@ts-ignore
  const { data: bookingsData = [], isLoading } = useGetSingleUserBookingsQuery(user?._id);

  if (isLoading) return <p>Loading...</p>;

  const upcomingBookings = getUpcomingBookings(bookingsData?.data);

  return (
    <div>
      <div>
        {upcomingBookings?.length === 0 ? (
          <div className="p-10 mx-auto text-2xl font-semibold">
            No upcoming bookings.{" "}
          </div>
        ) : (
          <div className="flex gap-10">
            {upcomingBookings?.map((booking: TBooking, i: number) => (
              <UpcomingBookingItem
                booking={booking}
                counter={i}
                countingAll={true}
              />
            ))}
          </div>
        )}
      </div>
      {upcomingBookings?.length > 0 ? (
        <UserBookingsDataTable bookingsData={upcomingBookings} />
      ) : null}
    </div>
  );
};

export default UpcomingBookings;
