import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const UserBookingsDataTable = ({ bookingsData }) => {
  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Your Bookings</CardTitle>
        <CardDescription>All your bookings are listed here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] sm:table-cell">
                Customer Name
              </TableHead>
              <TableHead>Service Name</TableHead>
              <TableHead className="">Start Time</TableHead>
              <TableHead className="">Vehicle Type</TableHead>
              <TableHead className="">Vehicle Brand</TableHead>
              <TableHead className="">Vehicle Model</TableHead>
              <TableHead className="">Registration Plate</TableHead>
              <TableHead className="">Payment Status</TableHead>
              <TableHead className="">Transaction ID</TableHead>
              <TableHead className="">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookingsData?.map((booking) => {
              const {
                customer: { name: customerName },
                service: { name: serviceName },
                slot: { startTime },
                transactionId,
                paymentStatus,
                vehicleType,
                vehicleBrand,
                vehicleModel,
                registrationPlate,
                createdAt,
              } = booking;
              return (
                <TableRow>
                  <TableCell className="sm:table-cell">
                    {customerName}
                  </TableCell>
                  <TableCell className="font-medium">{serviceName}</TableCell>
                  <TableCell>{startTime}</TableCell>
                  <TableCell>{vehicleType}</TableCell>
                  <TableCell>{vehicleBrand}</TableCell>
                  <TableCell>{vehicleModel}</TableCell>
                  <TableCell>{registrationPlate}</TableCell>
                  <TableCell>{paymentStatus}</TableCell>
                  <TableCell>{transactionId}</TableCell>
                  <TableCell>
                    {new Date(createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing{" "}
          <strong>{`1-${
            bookingsData?.length <= 10 ? bookingsData?.length : 10
          }`}</strong>{" "}
          of <strong>{bookingsData?.length}</strong> bookings
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserBookingsDataTable;
