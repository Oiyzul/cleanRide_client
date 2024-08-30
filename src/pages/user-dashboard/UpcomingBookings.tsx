import UserBookingsDataTable from "@/components/tables/UserBookingsDataTable";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useGetSingleUserBookingsQuery } from "@/redux/features/bookings/bookingApi";
import { useGetSingleUserQuery } from "@/redux/features/users/userApi";
import { useAppSelector } from "@/redux/hooks";

const UpcomingBookings = () => {
  const user = useAppSelector(selectUser);

  const { data: userData = {}, isLoading } = useGetSingleUserQuery(user?.email);

  const { data: bookingsData = [], isLoading: bookingIsLoading } =
    useGetSingleUserBookingsQuery(userData?.data?._id);

  if (isLoading) return <p>Loading...</p>;

  const getAmPm = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours < 12 ? "AM" : "PM";
  };

  const upcomingBookings = bookingsData?.data?.filter((booking) => {
    const startTimeInMs = new Date(
      `${booking.slot.date}T${booking.slot.startTime}`
    ).getTime();
    // Present time in milliseconds
    const presentTimeInMs = new Date().getTime();

    return startTimeInMs > presentTimeInMs;
  });
  return (
    <div>
      <div>
        {upcomingBookings?.length === 0 ? (
          <div className="p-10 mx-auto text-2xl font-semibold">
            No upcoming bookings.{" "}
          </div>
        ) : (
          <div className="flex gap-10">
            {upcomingBookings?.map((booking) => (
              <Card
                key={booking._id}
                className="w-[280px] p-4 flex flex-col items-center"
              >
                <CardTitle>{booking.service.name}</CardTitle>
                <CardContent>
                  <p>
                    Slot:{" "}
                    {`${booking.slot.startTime} ${getAmPm(
                      booking.slot.startTime
                    )}`}
                  </p>
                  <p>Date: {booking.slot.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      <UserBookingsDataTable bookingsData={upcomingBookings} />
    </div>
  );
};

export default UpcomingBookings;
