import { UserInfo } from "@/components";
import UpcomingBookingItem from "@/components/others/UpcomingBookingItem";
import UserBookingsDataTable from "@/components/tables/UserBookingsDataTable";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useGetSingleUserBookingsQuery } from "@/redux/features/bookings/bookingApi";
import { useAppSelector } from "@/redux/hooks";
import { getUpcomingBookings } from "@/utils/getUpcomingBookings";

const UserDashboard = () => {
  const user = useAppSelector(selectUser);

  const { data: bookingsData = [], isLoading } = useGetSingleUserBookingsQuery(
    user?._id || ""
  );

  const upcomingBookings = getUpcomingBookings(bookingsData?.data);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">
          {user?.name} Dashboard
        </h1>
        <p className="text-sm text-gray-500">Welcome, {user?.name}</p>

        <div className="flex gap-5 flex-wrap">
          {user && <UserInfo userData={user} />}

          {upcomingBookings?.length > 0 ? (
            <div className="flex gap-5 flex-wrap">
              {upcomingBookings?.map((booking: TBooking, i: number) => (
                <UpcomingBookingItem
                  booking={booking}
                  counter={i}
                  countingAll={false}
                  key={`upcoming-${booking._id}`}
                />
              ))}
            </div>
          ) : (
            <div>
              <p className="text-2xl font-semibold">No upcoming booking.</p>
            </div>
          )}
        </div>
        <UserBookingsDataTable bookingsData={bookingsData.data} />
      </div>
    </div>
  );
};

export default UserDashboard;
