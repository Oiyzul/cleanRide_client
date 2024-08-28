import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ServiceModal from "./ServiceModal";
import { createServiceValidationSchema } from "./schemas";
import { useAddServiceMutation } from "@/redux/features/services/serviceApi";

const AddServiceModal = ({ setOpen }) => {
  const [addService] = useAddServiceMutation();

  const title = "Add Service";

  const form = useForm({
    resolver: zodResolver(createServiceValidationSchema),
    defaultValues: {
      name: "",
      price: "",
      duration: "",
      description: "",
      imgUrl: "",
    },
  });

  async function onSubmit(data) {
    console.log(data);
    setOpen(false);

    // Add service to the database here
    const res = await addService(data)
    if(res.data.success) {
      //toast message
      console.log("Service added successfully");
      console.log(res)
    }
  }

  return (
    <>
      <ServiceModal form={form} title={title} onSubmit={onSubmit} />
    </>
  );
};

export default AddServiceModal;
