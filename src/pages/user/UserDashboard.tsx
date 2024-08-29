import BookingInfo from "@/components/BookingInfo";
import UserBookingsDataTable from "@/components/tables/UserBookingsDataTable";
import UserInfo from "@/components/UserInfo";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useGetSingleUserBookingsQuery } from "@/redux/features/bookings/bookingApi";
import { useGetSingleUserQuery } from "@/redux/features/users/userApi";
import { useAppSelector } from "@/redux/hooks";

const UserDashboard = () => {
  const user = useAppSelector(selectUser);
  const { data: userData = {}, isLoading } = useGetSingleUserQuery(user?.email);

  const { data: bookingData = [], isLoading: bookingIsLoading } =
    useGetSingleUserBookingsQuery(userData.data?._id);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">
          {user?.name} Dashboard
        </h1>
        <p className="text-sm text-gray-500">Welcome, {user?.name}</p>

        <UserInfo userData={userData.data} />
        {/* {!bookingIsLoading && bookingData?.data?.length > 0 &&
          bookingData.data.map((booking) => <BookingInfo booking={booking} />)} */}

        <UserBookingsDataTable userId={userData.data?._id} />
      </div>
    </div>
  );
};

export default UserDashboard;
