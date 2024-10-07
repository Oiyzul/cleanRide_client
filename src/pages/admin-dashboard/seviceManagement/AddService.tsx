import { FormInput } from "@/components";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useAddServiceMutation } from "@/redux/features/services/serviceApi";
import { createServiceValidationSchema } from "@/validationSchemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { IKUpload } from "imagekitio-react";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

export type TAddServiceForm = z.infer<typeof createServiceValidationSchema>;

const AddService = () => {
  const [addService] = useAddServiceMutation();
  const ikUploadRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  
  const navigate = useNavigate()

  const onError = (err: any) => {
    console.log("Error", err);
    setIsUploading(false);
  };

  const onUploadStart = () => {
    setIsUploading(true);
  };

  const onSuccess = (res: any) => {
    // console.log("Success", res);

    setThumbnailUrl(res.thumbnailUrl);
    form.setValue("imgUrl", res.url);
    setIsUploading(false);
  };

  const onUploadProgress = (progress: any) => {
    console.log("Upload-progress", progress);
  };

  const form = useForm<TAddServiceForm>({
    resolver: zodResolver(createServiceValidationSchema),
    defaultValues: {
      name: "",
      price: 0,
      duration: 0,
      description: "",
      imgUrl: "",
      features: [],
      unavailableFeatures: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "features",
    control: form.control,
  } as any);

  const {
    fields: unavailableFeatures,
    append: unavailableAppend,
    remove: unavailableRemove,
  } = useFieldArray({
    name: "unavailableFeatures",
    control: form.control,
  } as any);

  const {
    formState: { isSubmitting, errors },
  } = form;
  // console.log(errors, isSubmitting, form.getValues());
  async function onSubmit(data: TAddServiceForm) {
    console.log(data);
    // Add service to the database here
    try {
      const res = await addService(data);
      console.log(res);
      if (res.data.success) {
        //toast message
        navigate('/admin/service-list')
      }

      // Reset form fields
      // form.reset();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h1 className="text-5xl font-semibold mb-5">Add Service</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
        >
          <FormInput
            control={form.control}
            name="name"
            label="Name"
            placeholder="Service Name"
          />
          <FormInput
            control={form.control}
            name="price"
            label="Price"
            placeholder="Price"
            type="number"
          />
          <FormInput
            control={form.control}
            name="description"
            label="Description"
            placeholder="Description"
            textArea
          />

          <FormInput
            control={form.control}
            name="duration"
            label="Duration"
            placeholder="Duration"
            type="number"
          />
          <div className="flex items-center flex-wrap gap-2 mb-5">
            <FormLabel className="mr-2">Features:</FormLabel>
            {fields.map((_, index) => (
              <FormField
                control={form.control}
                key={`features-${index}`}
                name={`features.${index}`}
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 flex-wrap">
                    <FormLabel className={cn("sr-only")}>Features</FormLabel>

                    <FormControl>
                      <div className="flex gap-1">
                        <Input {...field} className="w-full md:w-fit" />
                        <Button
                          type="button"
                          variant={"outline"}
                          className="p-0.5 text-red-500"
                          onClick={() => remove(index)}
                        >
                          <X />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className=""
              onClick={() => append("")}
            >
              Add Feature
            </Button>
          </div>
          <div className="flex items-center flex-wrap gap-2 mb-5">
            <FormLabel className="mr-2">Unavailabel Features:</FormLabel>
            {unavailableFeatures.map((_, index) => (
              <FormField
                control={form.control}
                key={`unavailableFeatures-${index}`}
                name={`unavailableFeatures.${index}`}
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 flex-wrap">
                    <FormLabel className={cn("sr-only")}>Features</FormLabel>

                    <FormControl>
                      <div className="flex gap-1">
                        <Input {...field} className="w-full md:w-fit" />
                        <Button
                          type="button"
                          variant={"outline"}
                          className="p-0.5 text-red-500"
                          onClick={() => unavailableRemove(index)}
                        >
                          <X />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className=""
              onClick={() => unavailableAppend("")}
            >
              Add Unavailable Feature
            </Button>
          </div>
          <div className="">
            <FormLabel className="mr-2">Image:</FormLabel>
            {/* <ImageUpload ref={ikUploadRef} /> */}

            <IKUpload
              onError={onError}
              onSuccess={onSuccess}
              onUploadProgress={onUploadProgress}
              onUploadStart={onUploadStart}
              className="hidden"
              ref={ikUploadRef}
              folder="/cleanRide"
            />
            {ikUploadRef && (
              <Button
                type="button"
                variant="outline"
                onClick={() => ikUploadRef?.current?.click()}
              >
                {isUploading ? "uploading..." : "Upload"}
              </Button>
            )}

            {thumbnailUrl && (
              <div className="h-[300px]">
                <img
                  src={thumbnailUrl}
                  alt="Preview"
                  className="w-full h-full"
                />
              </div>
            )}
          </div>

          <Button type="submit" disabled={isUploading || isSubmitting}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddService;
