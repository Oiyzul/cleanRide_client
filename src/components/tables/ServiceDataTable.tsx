import {
  useDeleteServiceMutation,
  useGetServicesQuery,
} from "@/redux/features/services/serviceApi";
import { Plus, Trash } from "lucide-react";
import EditServiceModal from "../modals/EditServiceModal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Dialog, DialogTrigger } from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

const ServiceDataTable = () => {
  const [open, setOpen] = useState(false);
  const { data: serviceData = [], isLoading } = useGetServicesQuery({});
  const [deleteService] = useDeleteServiceMutation();

  if (isLoading) return <div>Loading...</div>;

  const handleDelete = async (id: string) => {
    const res = await deleteService(id);

    if (res.data.success) {
      //toast  "Service deleted successfully"
      console.log("Service deleted successfully");
    }
  };
  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Services</CardTitle>
        <CardDescription>
          Manage your services and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">img</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="hidden md:table-cell">Duration</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
                {/* <span className="sr-only">Actions</span> */}
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {serviceData?.data?.map((service) => {
              const {
                _id,
                name,
                imgUrl,
                description,
                price,
                duration,
                createdAt,
              } = service;
              return (
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <img
                      alt="Product img"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={imgUrl}
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{name}</TableCell>
                  <TableCell>{description}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {duration}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    ${price}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {new Date(createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                          <Plus
                            strokeWidth={2.5}
                            className="text-green-500 border-2 rounded border-green-500 cursor-pointer"
                          />
                        </DialogTrigger>
                        <EditServiceModal data={service} setOpen={setOpen} />
                      </Dialog>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Trash
                            strokeWidth={3}
                            className="text-red-500 cursor-pointer border-2 border-red-500 rounded p-0.5"
                          />
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure to delete this service?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This will soft delete the service in the servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              
                              onClick={() => handleDelete(_id)}
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>{`1-${
            serviceData?.data?.length <= 10 ? serviceData?.data?.length : 10
          }`}</strong> of{" "}
          <strong>{serviceData?.data?.length}</strong> services
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceDataTable;
