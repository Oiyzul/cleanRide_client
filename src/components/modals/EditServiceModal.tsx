import { useEditServiceMutation } from "@/redux/features/services/serviceApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import ServiceModal from "./ServiceModal";
import { createServiceValidationSchema } from "../../validationSchemas/schemas";

const EditServiceModal = ({
  data,
  setOpen,
}: {
  data: TService;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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

  async function onSubmit(data: FieldValues) {
    const updatedData = {
      id: _id,
      service: data,
    };
    console.log(updatedData);
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
