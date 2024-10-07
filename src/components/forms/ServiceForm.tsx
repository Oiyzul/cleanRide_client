import { IKUpload } from "imagekitio-react";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ServiceForm = ({ form, onSubmit }: TFormProps) => {
  const ikUploadRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");

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

  // console.log(form.getValues());
  console.log(isUploading)
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration</FormLabel>
              <FormControl>
                <Input placeholder="duration" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <>
          {/* <ImageUpload ref={ikUploadRef} /> */}
          <IKUpload
            onError={onError}
            onSuccess={onSuccess}
            onUploadProgress={onUploadProgress}
            onUploadStart={onUploadStart}
            className="hidden"
            ref={ikUploadRef}
          />
          {ikUploadRef && (
            <Button type='button' onClick={() => ikUploadRef?.current?.click()}>
              {isUploading ? "uploading..." : "Upload"}
            </Button>
          )}
        </>
        {thumbnailUrl && (
          <div className="h-[300px]">
            <img src={thumbnailUrl} alt="Preview" className="w-full h-full" />
          </div>
        )}

        <Button type="submit" disabled={isUploading}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ServiceForm;
