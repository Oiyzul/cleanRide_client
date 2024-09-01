import { ArrowBigLeft } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { cn } from "@/lib/utils";
import {
  useGetSlotsQuery,
  useUpdateSlotMutation,
} from "@/redux/features/slots/slotApi";

const StatusToggle = ({
  isBooked,
  slotId,
}: {
  isBooked: string;
  slotId: string;
}) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const [updateSlot] = useUpdateSlotMutation({});

  const handleUpdateStatus = async (slotId: string, status: string) => {
    setIsUpdating(true);

    const slotUpdatedData = {
      id: slotId,
      data: { isBooked: status },
    };

    const res = await updateSlot(slotUpdatedData);

    setIsUpdating(false);
    if (res?.data?.success) {
      //toast  "Service status updated successfully"
      console.log("Slot status updated successfully");
    }
  };
  return (
    <div className="flex gap-2">
      <button
        className={cn(
          "cursor-not-allowed px-4 py-1 border rounded",
          isBooked === "available"
            ? "text-blue-500 border-blue-500"
            : "text-red-500 border-red-500"
        )}
      >
        {isBooked}
      </button>
      <button
        className={cn("px-4 p-1 border rounded")}
        onClick={() =>
          handleUpdateStatus(
            slotId,
            isBooked === "available" ? "cancelled" : "available"
          )
        }
      >
        {isUpdating ? (
          "Updating..."
        ) : (
          <>
            <ArrowBigLeft className="inline" />
            {isBooked === "available" ? "cancel" : "available"}
          </>
        )}
      </button>
    </div>
  );
};

const SlotDataTable = () => {
  const { data: slotData = [], isLoading } = useGetSlotsQuery({});

  if (isLoading) return <div>Loading...</div>;
  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Slots</CardTitle>
        <CardDescription>Manage services slots.</CardDescription>
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
              {/* <TableHead>
                <span className="sr-only">Actions</span>
                Actions
              </TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {slotData?.data?.map((slot: TSlot) => {
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
                <TableRow key={slotId}>
                  <TableCell className="sm:table-cell">{serviceId}</TableCell>
                  <TableCell className="font-medium">{slotId}</TableCell>
                  <TableCell>{date}</TableCell>
                  <TableCell>{startTime}</TableCell>
                  <TableCell>{endTime}</TableCell>
                  <TableCell>
                    {new Date(createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {isBooked === "booked" ? (
                      <button className="text-green-500 cursor-not-allowed px-4 p-1 border border-green-500 rounded">
                        {isBooked}
                      </button>
                    ) : (
                      <StatusToggle isBooked={isBooked} slotId={slotId} />
                    )}
                  </TableCell>
                  {/* <TableCell
                    className={cn(
                      isBooked === "booked" ? "text-green-500" : ""
                    )}
                  >
                    {isBooked === "booked" ? (
                      isBooked
                    ) : (
                      <StatusToggle initialStatus={isBooked} slotId={slotId} />
                    )}
                  </TableCell> */}
                  {/* <TableCell>
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
                  </TableCell> */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing{" "}
          <strong>{`1-${
            slotData?.data?.length <= 10 ? slotData?.data?.length : 10
          }`}</strong>{" "}
          of <strong>{slotData?.data?.length}</strong> slots
        </div>
      </CardFooter>
    </Card>
  );
};

export default SlotDataTable;
