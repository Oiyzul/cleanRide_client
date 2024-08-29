import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ServiceModal from "./ServiceModal";
import { updateUserValidationSchema } from "./schemas";
import { useUpdateUserMutation } from "@/redux/features/users/userApi";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import UserForm from "../forms/UserForm";

const UpdateUserInfo = ({ data, setOpen }) => {
  const [updateUser] = useUpdateUserMutation();

  const { _id, name, email, phone, address } = data || {};

  const title = "Update User";

  const form = useForm({
    resolver: zodResolver(updateUserValidationSchema),
    defaultValues: {
      name: name || "",
      email: email || "",
      phone: phone || "",
      address: address || "",
    },
  });

  async function onSubmit(data) {
    const updatedData = {
      id: _id,
      data: data,
    };

    // Edit service to the database here
    try {
      const res = await updateUser(updatedData);
      if (res.data.success) {
        //toast message
        console.log("User updated successfully");
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
    <DialogContent className="sm:max-w-[525px] max-h-screen overflow-y-scroll">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>

      <UserForm form={form} onSubmit={onSubmit} />
    </DialogContent>
    </>
  );
};

export default UpdateUserInfo;
