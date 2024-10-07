type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  address: string;
};

type TBooking = {
  _id: Types.ObjectId;
  customer: Types.ObjectId;
  service: Types.ObjectId;
  slot: Types.ObjectId;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
  transactionId;
  paymentStatus;
  createdAt;
};

type TBookingPayload = {
  customer: Types.ObjectId;
  serviceId: Types.ObjectId;
  slotId: Types.ObjectId;
  vehicleType: keyof typeof Vehicle_types;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};

type TService = {
  _id: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  duration: number;
  imgUrl?: string;
  features: string[];
  unavailableFeatures?: string[];
  isDeleted: boolean;
  createdAt: Date;
};

type TSlot = {
  _id: Types.ObjectId;
  service: Types.ObjectId;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
  createdAt: Date;
};

type TFormProps = {
  form: UseFormReturn<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
};
type TReview = {
  _id: Types.ObjectId;
  customerId: Types.ObjectId;
  customerName: string;
  feedback: string;
  rating: number;
  createdAt: Date;
};
