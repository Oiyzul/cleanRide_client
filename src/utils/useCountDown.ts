// import { useEffect, useState } from 'react';

// const useCountdown = (targetDate) => {
//   const countDownDate = new Date(targetDate).getTime();

//   const [countDown, setCountDown] = useState(
//     countDownDate - new Date().getTime()
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountDown(countDownDate - new Date().getTime());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [countDownDate]);

//   return getReturnValues(countDown);
// };

// const getReturnValues = (countDown) => {
//   // calculate time left
//   const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

//   return [days, hours, minutes, seconds];
// };

// export { useCountdown };





// //Start time in milliseconds
//   //   const startTimeInMs = new Date(`${date}T${startTime}`).getTime();
//   //   // Present time in milliseconds
//   //   const presentTimeInMs = new Date().getTime();
//   //   // Convert to seconds
//   //   const timeDifferenceSec = timeDifferenceMs / 1000;
//   //   // // Convert to minutes
//   //   const timeDifferenceMin = timeDifferenceMs / (1000 * 60);
//   //   // // Convert to hours
//   //   const timeDifferenceHrs = timeDifferenceMs / (1000 * 60 * 60);
//   //   const timeDifferenceDays = Math.floor(
//   //     timeDifferenceMs / (1000 * 60 * 60 * 24)
//   //   );
//   //   const remainingHours = timeDifferenceMs % (1000 * 60 * 60 * 24);
//   //   const timeDifferenceDaysWithHours = `${timeDifferenceDays} days ${(
//   //     remainingHours /
//   //     (1000 * 60 * 60)
//   //   ).toFixed(2)} hours`;