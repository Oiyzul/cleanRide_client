import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ServiceModal from "./ServiceModal";
import { createServiceValidationSchema } from "./schemas";
import { useAddServiceMutation } from "@/redux/features/services/serviceApi";
import { z } from "zod";

export type TAddServiceForm = z.infer<typeof createServiceValidationSchema>;

const AddServiceModal = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [addService] = useAddServiceMutation();

  const title = "Add Service";

  const form = useForm<TAddServiceForm>({
    resolver: zodResolver(createServiceValidationSchema),
    defaultValues: {
      name: "",
      price: 0,
      duration: 0,
      description: "",
      imgUrl: "",
    },
  });

  async function onSubmit(data: TAddServiceForm) {
    console.log(data);
    // Add service to the database here
    try {
      const res = await addService(data);
      if (res.data.success) {
        //toast message
        console.log("Service added successfully");
        console.log(res);
      }

      // Close modal after adding service
      setOpen(false);
      // Reset form fields
      form.reset();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <ServiceModal form={form} title={title} onSubmit={onSubmit} />
    </>
  );
};

export default AddServiceModal;
