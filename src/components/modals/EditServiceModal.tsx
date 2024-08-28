import { useEditServiceMutation } from "@/redux/features/services/serviceApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ServiceModal from "./ServiceModal";
import { createServiceValidationSchema } from "./schemas";

const EditServiceModal = ({ data, setOpen }) => {
  const [editService] = useEditServiceMutation();

  const { _id, name, price, duration, description, imgUrl } = data || {};
  
  const title = "Edit Service";

  const form = useForm({
    resolver: zodResolver(createServiceValidationSchema),
    defaultValues: {
      name: name || "",
      price: price || "",
      duration: duration || "",
      description: description || "",
      imgUrl: imgUrl || "",
    },
  });

  async function onSubmit(data) {
    const updatedData = {
      id: _id,
      service: data,
    };

    // Edit service to the database here
    try {
      const res = await editService(updatedData);
      if (res.data.success) {
        //toast message
        console.log("Service updated successfully");
        console.log(res);
      }

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

export default EditServiceModal;
