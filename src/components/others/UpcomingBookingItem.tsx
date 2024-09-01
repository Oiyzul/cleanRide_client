import { getAmPm } from "@/utils/getAmPm";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CountdownTimer from "./CountDownTimer";

type TProps = {
  counter: number;
  countingAll: boolean;
  booking: TBooking;
};

const UpcomingBookingItem = ({ booking, counter, countingAll }: TProps) => {
  return (
    <div>
      <Card
        key={booking._id}
        className="w-[280px] p-4 flex flex-col items-center"
      >
        <CardHeader>
          {counter === 0 && !countingAll ? (
            <CountdownTimer
              targetDate={booking?.slot.date}
              targetTime={booking?.slot.startTime}
            />
          ) : countingAll ? (
            <CountdownTimer
              targetDate={booking?.slot.date}
              targetTime={booking?.slot.startTime}
            />
          ) : null}
          <CardTitle>{booking?.service.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Slot:{" "}
            {`${booking?.slot.startTime} ${getAmPm(booking?.slot.startTime)}`}
          </p>
          <p>Date: {booking.slot.date}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpcomingBookingItem;
