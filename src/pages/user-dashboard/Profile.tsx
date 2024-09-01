import { UpdateUserInfo } from "@/components";
import { useGetSingleUserQuery } from "@/redux/features/users/userApi";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const userId = location.state || {};
  const { data: userData = {}, isLoading } = useGetSingleUserQuery(userId);

  if (isLoading) return <div>Loading...</div>;
  if (!userData) return <div>User not found.</div>;

  return (
    <div className="m-5">
      <h1 className="text-3xl font-semibold">{userData?.data?.name} Profile</h1>
      <p>You can update your Information if necessary.</p>
      <div className="w-[380px] p-8 mx-auto bg-white rounded">
        <UpdateUserInfo user={userData.data} />
      </div>
    </div>
  );
};

export default Profile;
