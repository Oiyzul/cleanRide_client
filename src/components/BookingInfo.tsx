import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const BookingInfo = ({ booking }) => {
  const { vehicleType, vehicleBrand, vehicleModel } = booking;
  
  return (
    <Card className="max-w-[480px]">
      <CardHeader>Booking Information</CardHeader>
      <CardContent>
        <p>Email: {vehicleType}</p>
        <p>Phone: {vehicleBrand}</p>
        <p>Address: {vehicleModel}</p>
      </CardContent>
      <CardFooter>
        <Button>Update Info</Button>
      </CardFooter>
    </Card>
  );
};

export default BookingInfo;
