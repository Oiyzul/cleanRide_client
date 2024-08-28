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
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  useGetSlotsQuery,
  useUpdateSlotMutation,
} from "@/redux/features/slots/slotApi";
import { cn } from "@/lib/utils";

const SlotDataTable = () => {
  const [status, setStatus] = useState("");
  const [updateSlot] = useUpdateSlotMutation({});

  const { data: slotData = [], isLoading } = useGetSlotsQuery({});

  const handleUpdateSlotStatus = async (id: string) => {
    if (status && id) {
      const slotUpdatedData = {
        id: id,
        data: { isBooked: status },
      };
      const res = await updateSlot(slotUpdatedData);
      console.log("res", res);
      if (res?.data?.success) {
        //toast  "Service status updated successfully"
        console.log("Slot status updated successfully");
      }
    }
  };
  const handleDelete = async (id: string) => {
    // const res = await deleteService(id);
    // if (res.data.success) {
    //   //toast  "Service deleted successfully"
    //   console.log("Service deleted successfully");
    // }
  };

  if (isLoading) return <div>Loading...</div>;
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
              <TableHead className="w-[100px] sm:table-cell">
                Service Id
              </TableHead>
              <TableHead>Slot Id</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="">Start Time</TableHead>
              <TableHead className="">End Time</TableHead>
              <TableHead className="">Created at</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead>
                {/* <span className="sr-only">Actions</span> */}
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {slotData?.data?.map((slot) => {
              const {
                _id: slotId,
                service: { _id: serviceId },
                date,
                startTime,
                endTime,
                isBooked,
                createdAt,
              } = slot;
              return (
                <TableRow>
                  <TableCell className="sm:table-cell">{serviceId}</TableCell>
                  <TableCell className="font-medium">{slotId}</TableCell>
                  <TableCell>{date}</TableCell>
                  <TableCell>{startTime}</TableCell>
                  <TableCell>{endTime}</TableCell>
                  <TableCell>
                    {new Date(createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell
                    className={cn(
                      isBooked === "booked" ? "text-green-500" : ""
                    )}
                  >
                    {isBooked} <br />
                    {!(isBooked === "booked") && (
                      <>
                        <label htmlFor="isBooked">Change status:</label>
                        <select
                          name="isBooked"
                          id="isBooked"
                          onChange={(e) => {
                            setStatus(e.target.value);
                            handleUpdateSlotStatus(slotId);
                          }}
                        >
                          <option value="available">available</option>
                          <option value="cancelled">cancelled</option>
                        </select>
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
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
          Showing <strong>1-10</strong> of{" "}
          <strong>{slotData?.data?.length}</strong> slots
        </div>
      </CardFooter>
    </Card>
  );
};

export default SlotDataTable;
