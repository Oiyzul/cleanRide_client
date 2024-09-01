import { Link } from "react-router-dom";
import { Button } from "./../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./../ui/card";

const UserInfo = ({ userData }: { userData: TUser }) => {
  const { name, email, phone, address } = userData;

  return (
    <Card className="max-w-[280px]">
      <CardHeader>User Information</CardHeader>
      <CardContent>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="h-8 gap-1" asChild>
          <Link to="/user/profile" state={userData._id}>
            Update
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserInfo;
