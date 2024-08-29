import { PlusCircle, Trash } from "lucide-react";
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
  useGetUsersQuery,
  useUpdateUserMutation,
} from "@/redux/features/users/userApi";

const UsersDataTable = () => {
  const { data: usersData = [], isLoading } = useGetUsersQuery({});
  const [updateUser] = useUpdateUserMutation();

  const updateUserRole = async (role: string, id: string) => {
    console.log("role", role);
    const updatedUser = {
      id,
      data: {
        role,
      },
    };

    try {
      const res = await updateUser(updatedUser);
      if (res?.data?.success) {
        console.log("User role updated successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (isLoading) return <div>Loading...</div>;
  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Manage users and view their bookings.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] sm:table-cell">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="">Address</TableHead>
              <TableHead className="">Role</TableHead>
              <TableHead className="">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersData?.data?.map((user) => {
              const { _id, name, email, address, phone, role } = user;
              return (
                <TableRow>
                  <TableCell className="sm:table-cell">{name}</TableCell>
                  <TableCell className="font-medium">{email}</TableCell>
                  <TableCell>{phone}</TableCell>
                  <TableCell>{address}</TableCell>
                  <TableCell>{role}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div className="flex gap-1 items-center cursor-pointer">
                            Update Role
                            <PlusCircle />
                          </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure to change this user role?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This will change the user role.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() =>
                                updateUserRole(
                                  role === "user" ? "admin" : "user",
                                  _id
                                )
                              }
                            >
                              {`Update to ${
                                role === "user" ? "admin" : "user"
                              }`}
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
          <strong>{usersData?.data?.length}</strong> slots
        </div>
      </CardFooter>
    </Card>
  );
};

export default UsersDataTable;
