export function getAmPm(time:string) {
    const [hours] = time.split(":").map(Number);
    return hours < 12 ? "AM" : "PM";
  };