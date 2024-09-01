import SlotForm from "@/components/forms/SlotForm";
import { useCreateSlotMutation } from "@/redux/features/services/serviceApi";
import { createSlotValidationSchema } from "@/validationSchemas/slot.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const CreateSlot = () => {
  const [createSlot] = useCreateSlotMutation();
  const [error, setError] = useState("");

  const form = useForm({
    resolver: zodResolver(createSlotValidationSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const res = await createSlot(data).unwrap();
    console.log(res);
    if (res.success) {
      console.log("Slots created successfully");
    } else if (!res.success) {
      setError(res.message);
      console.log("Failed to create slot.");
    }
  };

  return (
    <div className="p-8 w-[380px] mx-auto bg-white rounded mt-5">
      <h1 className="text-2xl font-semibold mb-2">Create Slot</h1>
      <SlotForm form={form} onSubmit={onSubmit} />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default CreateSlot;
