import ServiceForm from "../forms/ServiceForm";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const ServiceModal = ({ form, title, onSubmit }) => {
//  console.log('formm, onSubmitm', form, onSubmit)
  return (
    <DialogContent className="sm:max-w-[525px] max-h-screen overflow-y-scroll">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>

      <ServiceForm form={form} onSubmit={onSubmit} />
    </DialogContent>
  );
};

export default ServiceModal;
