export const getUpcomingBookings = (bookingsData: TBooking[]) => {
  const upcomingBookings = bookingsData?.filter((booking: TBooking) => {
    const startTimeInMs = new Date(
      `${booking.slot.date}T${booking.slot.startTime}`
    ).getTime();
    // Present time in milliseconds
    const presentTimeInMs = new Date().getTime();

    return startTimeInMs > presentTimeInMs;
  });

  return upcomingBookings;
};
