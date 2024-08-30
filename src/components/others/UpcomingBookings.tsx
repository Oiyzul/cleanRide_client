import { Card, CardContent, CardTitle } from "./../ui/card";

const UpcomingBookings = ({ bookingsData }) => {
  //Start time in milliseconds
  //   const startTimeInMs = new Date(`${date}T${startTime}`).getTime();
  //   // Present time in milliseconds
  //   const presentTimeInMs = new Date().getTime();
  //   // Convert to seconds
  //   const timeDifferenceSec = timeDifferenceMs / 1000;
  //   // // Convert to minutes
  //   const timeDifferenceMin = timeDifferenceMs / (1000 * 60);
  //   // // Convert to hours
  //   const timeDifferenceHrs = timeDifferenceMs / (1000 * 60 * 60);
  //   const timeDifferenceDays = Math.floor(
  //     timeDifferenceMs / (1000 * 60 * 60 * 24)
  //   );
  //   const remainingHours = timeDifferenceMs % (1000 * 60 * 60 * 24);
  //   const timeDifferenceDaysWithHours = `${timeDifferenceDays} days ${(
  //     remainingHours /
  //     (1000 * 60 * 60)
  //   ).toFixed(2)} hours`;
 const getAmPm = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours < 12 ? 'AM' : 'PM';
 }
 
  const upcomingBookings = bookingsData.filter((booking) => {
    const startTimeInMs = new Date(
      `${booking.slot.date}T${booking.slot.startTime}`
    ).getTime();
    // Present time in milliseconds
    const presentTimeInMs = new Date().getTime();
    
    return startTimeInMs < presentTimeInMs;
  });
  
  return (
    <div>
      {upcomingBookings.length === 0 ? (
        <div>No upcoming bookings. </div>
      ) : (
        <div className="flex gap-10">
          {upcomingBookings.map((booking) => (
            <Card key={booking._id} className="w-[280px] p-4 flex flex-col items-center">
              <CardTitle>{booking.service.name}</CardTitle>
              <CardContent>
                <p>Slot: { `${booking.slot.startTime} ${getAmPm(booking.slot.startTime)}`}</p>
                <p>Date: {booking.slot.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingBookings;
